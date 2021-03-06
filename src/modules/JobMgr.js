/*
 See usage notes below code
*/

import {} from 'vuex'
import Axios from 'axios'
export function JobMgr () {
  this.jobType = null
  this.jobId = null
  this.err = null
  this.jobInputFiles = []
  this.jobParameters = null
  this.createJobPath = '/nmr/jobcreate'
  this.postJobFilePath = '/nmr/jobpostfile'
  this.submitJobPath = '/nmr/jobsubmit'
}
JobMgr.prototype = {
  getJobId: function () {
    return this.jobId
  },
  handleErr: function (err, failureFunction) {
    let vm = this
    if (err.config) {
      console.log(err.config)
    }
    if (err.response) {
      if (err.config && err.config.data) {
        let data = JSON.parse(err.config.data)
        if (data.jobFileInfo) {
          vm.jobInputFiles[data.jobFileInfo.idx].statusCode = err.response.status
          vm.jobInputFiles[data.jobFileInfo.idx].statusText = err.response.statusText
        }
      }
      return failureFunction(err.response.status, err.response.statusText)
    } else if (err.request) {
      return failureFunction(500, err)
    } else {
      return failureFunction(500, err)
    }
  },
  submitJob: function (successFunction, failureFunction) {
    // this.jobId = SET by remote call
    let vm = this
    if (vm.jobType === null) {
      setTimeout(failureFunction(400, 'Job type required'), 0) // don't do this on main path -- it's supposed to be async
    } else {
      // create job to get jobId and initialize job directory
      let fileSends = []
      if (vm.jobParameters) { // TODO : once there is a security layer extract the user and put it here
        vm.jobParameters.user = 'testuser'
      } else {
        vm.jobParameters = {'user': 'testuser'}
      }
      try {
        Axios.post(vm.createJobPath, {
          'jobParameters': vm.jobParameters,
          'jobType': vm.jobType
        })
          .then(function (res) {
            vm.jobId = res.data.data.jobId
            vm.jobInputFiles.forEach(function (v) {
              // send each file in a separate request and wait for all to complete successfully before submitting job
              fileSends.push(Axios.post(vm.postJobFilePath, {
                'jobId': vm.jobId,
                'jobType': vm.jobType,
                'jobFileInfo': v
              }))
            })
            Axios.all(fileSends)
              .then((p) => {
                console.log(p)
                // wait for all files to be sent then submit job
                p.forEach(function (v) {
                  // console.log('logging response info below: ')
                  // console.log(v)
                  // set status and status text vm.jobInputFiles[idx].statusCode=p.
                  let reqData = JSON.parse(v.config.data)
                  let index = reqData.jobFileInfo.idx
                  vm.jobInputFiles[index].statusCode = v.status
                  vm.jobInputFiles[index].statusText = v.statusText
                })
                Axios.post(vm.submitJobPath, {
                  'jobId': vm.jobId,
                  'jobType': vm.jobType
                })
                  .then(function (res) {
                    console.log('submit job success - statusCode: ' + res.status + ' statusText: ' + res.statusText)
                    return successFunction(vm.jobId)
                  })
                  .catch(function (err) {
                    console.log('submit job failure' + err)
                    vm.handleErr(err, failureFunction)
                  })
              })
              .catch(function (err) {
                console.log('Axios.all catch' + err)
                vm.handleErr(err, failureFunction)
              })
          })
          .catch(function (err) {
            vm.handleErr(err, failureFunction)
          })
      } catch (ex) {
        vm.handleErr(ex, failureFunction)
      }
    }
  },
  setJobType: function (jobType) {
    this.jobType = jobType
  },
  getJobType: function () {
    return this.jobType
  },
  getFileCount: function () {
    return this.jobInputFiles.length
  },
  getFileInfo: function (idx) {
    let rv = null
    if (idx >= 0 && idx < this.jobInputFiles.length) {
      rv = this.jobInputFiles[idx]
    }
    return rv
  },
  addInputFile: function (fileName, dataUri) {
    let idx = this.jobInputFiles.length
    this.jobInputFiles.push({ 'idx': idx, 'fileName': fileName, 'dataUri': dataUri, 'statusCode': null, 'statusText': null })
  },
  setJobParameters: function (paramsObject) {
    this.jobParameters = paramsObject
  }
}

/*
  Using this class
  import {JobMgr} from '@/modules/JobMgr.js'
  let jm = new JobMgr()
  jm.addInputFile(fileName[0], dataUrl[0])
  jm.addInputFile(fileName[N], dataUrl[N])
  jm.setJobParameters( {'testField': val1, 'myField2': val2 })
  jm.setJobType( jobType )
  jm.submitJob( function success (jobid) {
      console.log(jobId)
      console.log('Success')
    }, function failure (err) {
      console.log(err)
      for( let i=0; i < jm.getFileCount(); ++i) {
        let fileInfo = jm.getFileInfo(i)
        console.log('file name: ' + fileInfo.fileName + ' statusCode: ' + fileInfo.statusCode + ' statusText: ' + fileInfo.statusText)
      }
  })

*/
