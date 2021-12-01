/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
function existGlobalKatexStatus() {
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
function existLocalKatexStatus() {
  try {
    if (window.location.href in JSON.parse(localStorage['katex-status'] || 'null')) return true
    else return false
  } catch (e) {
    console.log(e)
  }
}
function existDefaultSetting() {
  try {
    if ('katex-default-setting' in localStorage) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}
function existDefaultSettingInline() {
  try {
    if ('katex-default-setting-inline' in localStorage) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

function addKatexStatus() {
  const katex_status = []
  const katex_html = document.getElementsByClassName('katex-html')
  // Array.from(katex_html).forEach((el, i) => {
  //   katex_status.push(1)
  // })

  if (getDefaultSetting()['default-collapse']) {
    Array.from(katex_html).forEach((el, i) => {
      katex_status.push(1)
    })
  } else {
    Array.from(katex_html).forEach((el, i) => {
      katex_status.push(0)
    })
  }
  const localStorage_obj = JSON.parse(localStorage['katex-status'])
  localStorage_obj[window.location.href] = katex_status
  const setjson = JSON.stringify(localStorage_obj)
  localStorage.setItem('katex-status', setjson)
}

function createDefaultSetting() {
  localStorage['katex-default-setting'] = []
  let setJSON = { 'default-collapse': true }
  setJSON = JSON.stringify(setJSON)
  localStorage.setItem('katex-default-setting', setJSON)
}

function mutateDefaultSetting(boolean) {
  let trueJSON = { 'default-collapse': true }
  let falseJSON = { 'default-collapse': false }
  trueJSON = JSON.stringify(trueJSON)
  falseJSON = JSON.stringify(falseJSON)
  if (boolean) {
    localStorage.setItem('katex-default-setting', trueJSON)
  } else {
    localStorage.setItem('katex-default-setting', falseJSON)
  }
}

function createKatexStatus() {
  console.log('create katex status', getDefaultSetting())
  localStorage['katex-status'] = []
  const katex_status = {}
  katex_status[window.location.href] = []
  const katex_html = document.getElementsByClassName('katex-html')
  if (getDefaultSetting()['default-collapse']) {
    Array.from(katex_html).forEach((el, i) => {
      katex_status[window.location.href].push(1)
    })
  } else {
    Array.from(katex_html).forEach((el, i) => {
      katex_status[window.location.href].push(0)
    })
  }

  const setjson = JSON.stringify(katex_status)
  localStorage.setItem('katex-status', setjson)
}

function getDefaultSetting() {
  return JSON.parse(localStorage['katex-default-setting'])
}
function getKatexStatus() {
  return JSON.parse(localStorage['katex-status'])[window.location.href]
}

function katexLocalStorage() {
  try {
    // default setting
    if (existDefaultSetting()) {
      console.log(existDefaultSetting())
      //
    } else {
      console.log(existDefaultSetting())

      createDefaultSetting()
    }

    // katex status
    if (existGlobalKatexStatus()) {
      console.log('existG', existGlobalKatexStatus())
      if (existLocalKatexStatus()) {
        console.log('existL', existLocalKatexStatus())

        // load
        getKatexStatus()
      } else {
        // add
        addKatexStatus()
      }
    } else {
      console.log('else')

      // create && set
      createKatexStatus()
    }
  } catch (e) {
    console.log(e)
  }
}

export default (context, inject) => {
  inject('katexLocalStorage', katexLocalStorage)
  inject('getKatexStatus', getKatexStatus)
}

export { getDefaultSetting, mutateDefaultSetting }
