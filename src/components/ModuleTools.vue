<template>
  <div class="mtools">
    <h1>{{ msg }}</h1>
    <v-container>
      <div>
        <p>
          Statistical learning and analysis modules include web and downloadable packages that can be used to
          pre-process and analyze structure and material property data. Each of the modules will specify the required
          input format and output data, and provide a brief introduction behind the mechanism of the algorithm.
        </p>
        <div>
          <div>
            <img src="/cdn/img/recon_tool.PNG"/>
          </div>
          <div>
            <h4>
              <span>
                <router-link to="/mcr_homepage">Microstructure Characterization and Reconstruction</router-link>
              </span>
            </h4>
            <p>
              An essential component of computational material design involves microstructure analysis. Our user
              friendly webtools allow users to characterize microstructure images and reconstruct statistically
              equivalent microstructures. Users can choose among
              multiple input formats as well as characterization and reconstruction methods.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src="/cdn/img/dynamfit.png"/>
          </div>
          <div>
            <h4>
              <span>
                <router-link to="/dynamfit">
                  Dynamfit
                </router-link>
              </span>
            </h4>
            <p>
              Dynamfit is a sign control algorithm for Prony Series fitting. This program fits a viscoelastic
              mastercurve from DMA experiments with a Prony Series. The Prony Series coefficients can be used as
              baseline properties for the matrix in a FEA simulation of nanocomposites.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src="/cdn/img/webtool_tuneshifting.png"/>
          </div>
          <div>
            <h4>
              <span>
                <router-link to="/AUTOFIT">Automatic Fitting of Interphase Relaxation Model in Nanocomposites</router-link>
              </span>
            </h4>
            <p>
              This algorithm derives interphase relaxation properties in nanocomposites using an inverse method that
              starts from composite properties and microstructure. It integrates finite element analysis and
              metamodeling optimization that predicts the interphase properties that results in minimal error between
              simulated properties from FEA and experimental composite properties.
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ModuleTools',
  data () {
    return {
      msg: 'Statistical Learning and Analysis Module Tools'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 240px;
  }
  h4 {
    text-transform: uppercase;
  }
</style>
