/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */

export default (context, inject) => {
  function existG() {
    try {
      if ('katex-status' in localStorage) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log(e)
    }
  }
  function existL() {
    try {
      if (window.location.href in JSON.parse(localStorage['katex-status'] || 'null')) return true
      else return false
    } catch (e) {
      console.log(e)
    }
  }
  function getKatexStatus() {
    return JSON.parse(localStorage['katex-status'])[window.location.href]
  }
  function addKatexStatus() {
    const katex_status = []
    const katex_html = document.getElementsByClassName('katex-html')
    Array.from(katex_html).forEach((el, i) => {
      katex_status.push(1)
      // if (el.classList.contains('collapsed')) katex_status.push(1)
      // else if (el.classList.contains('expanded')) katex_status.push(0)
      // else katex_status.push(-1)
    })
    const localStorage_obj = JSON.parse(localStorage['katex-status'])
    localStorage_obj[window.location.href] = katex_status
    const setjson = JSON.stringify(localStorage_obj)
    localStorage.setItem('katex-status', setjson)
  }
  function createKatexStatus() {
    localStorage['katex-status'] = []
    const katex_status = {}
    katex_status[window.location.href] = []
    const katex_html = document.getElementsByClassName('katex-html')
    Array.from(katex_html).forEach((el, i) => {
      katex_status[window.location.href].push(1)
      // if (el.classList.contains('collapsed')) katex_status[context.route.name].push(1)
      // else if (el.classList.contains('expanded')) katex_status[context.route.name].push(0)
      // else katex_status[context.route.name].push(-1)
    })
    const setjson = JSON.stringify(katex_status)
    localStorage.setItem('katex-status', setjson)
  }
  function execute() {
    try {
      if (existG()) {
        if (existL()) {
          // load
          console.log('load')
          getKatexStatus()
        } else {
          // add
          console.log('add')
          addKatexStatus()
        }
      } else {
        // create && set
        createKatexStatus()
      }
    } catch (e) {
      console.log(e)
    }
  }
  inject('execute', execute)
  inject('getKatexStatus', getKatexStatus)
}
