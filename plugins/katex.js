import Vue from 'vue'
import Katex from '../node_modules/vue-katex-auto-render'

// import 'katex/dist/contrib/auto-render.min.js'
// import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'

// export default (context, inject) => {
//   const $ktx = {
//     renderMathInElement: renderMathInElement,
//     context: context,
//     Katex: Katex,
//   }
//   inject('ktx', $ktx)
// }

Vue.directive('katex', Katex)
