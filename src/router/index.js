import Vue from 'vue'
import Router from 'vue-router'
import NanoMine from '@/components/NanoMine'
import Database from '@/components/Database'
import ModuleTools from '@/components/ModuleTools'
import SimTools from '@/components/SimTools'
import XMLCONV from '@/components/XMLCONV'
import NmEditor from '@/components/Editor'
import McrHomepage from '@/components/McrHomepage'
import BinarizeHomepage from '@/components/BinarizeHomepage'
import Otsu from '@/components/Otsu'
import Niblack from '@/components/Niblack'
import CharacterizeHomepage from '@/components/CharacterizeHomepage'
import CorrelationCharacterize from '@/components/CorrelationCharacterize'
import SDFCharacterize from '@/components/SDFCharacterize'
import DescriptorCharacterize from '@/components/DescriptorCharacterize'
import ReconstructionHomepage from '@/components/ReconstructionHomepage'
import CorrelationReconstruct from '@/components/CorrelationReconstruct'
import SDFReconstruct from '@/components/SDFReconstruct'
import DescriptorReconstruct from '@/components/DescriptorReconstruct'
import Visualization from '@/components/Visualization'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NanoMine',
      component: NanoMine
    },
    {
      path: '/db',
      name: 'Database',
      component: Database
    },
    {
      path: '/simtools',
      name: 'SimTools',
      component: SimTools
    },
    {
      path: '/mtools',
      name: 'ModuleTools',
      component: ModuleTools
    },
    {
      path: '/XMLCONV',
      name: 'XMLCONV',
      component: XMLCONV
    },
    {
      path: '/editor',
      name: 'NmEditor',
      component: NmEditor
    },
    {
      path: '/mcr_homepage',
      name: 'McrHomepage',
      component: McrHomepage
    },
    {
      path: '/binarization_homepage',
      name: 'BinarizeHomepage',
      component: BinarizeHomepage
    },
    {
      path: '/Otsu',
      name: 'Otsu',
      component: Otsu
    },
    {
      path: '/characterization_homepage',
      name: 'CharacterizeHomepage',
      component: CharacterizeHomepage
    },
    {
      path: '/reconstruction_homepage',
      name: 'ReconstructionHomepage',
      component: ReconstructionHomepage
    },
    {
      path: '/Niblack',
      name: 'Niblack',
      component: Niblack
    },
    {
      path: '/CorrelationCharacterize',
      name: 'CorrelationCharacterize',
      component: CorrelationCharacterize
    },
    {
      path: '/SDFCharacterize',
      name: 'SDFCharacterize',
      component: SDFCharacterize
    },
    {
      path: '/DescriptorCharacterize',
      name: 'DescriptorCharacterize',
      component: DescriptorCharacterize
    },
    {
      path: '/CorrelationReconstruct',
      name: 'CorrelationReconstruct',
      component: CorrelationReconstruct
    },
    {
      path: '/SDFReconstruct',
      name: 'SDFReconstruct',
      component: SDFReconstruct
    },
    {
      path: '/DescriptorReconstruct',
      name: 'DescriptorReconstruct',
      component: DescriptorReconstruct
    },
    {
      path: '/Visualization',
      name: 'Visualization',
      component: Visualization
    }
  ]
})
