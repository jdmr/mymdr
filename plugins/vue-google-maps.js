import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAKSvArw4Z-wWwdpCoeRI8jGS_TdgXlqcQ',
    libraries: 'places'
  }
})
