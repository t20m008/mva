/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { allCollapse, allExpand } from '@/plugins/katex-collapsible.js'
import { getDefaultSetting, mutateDefaultSetting } from '@/plugins/katex-localStorage.js'

// list of .katex-html
let katexClass = []
let katexHTMLClass = []
let katexMathMLClass = []

// context menu status
let contextMenuDisplay = false
const defaultSettingSwitch = null
let modalDisplay = false
let focusIndex = null

async function loadKaTeX() {
  katexClass = await document.getElementsByClassName('katex')
  katexClass = Array.from(katexClass)
  katexHTMLClass = await document.getElementsByClassName('katex-html')
  katexHTMLClass = Array.from(katexHTMLClass)
  katexMathMLClass = await document.getElementsByClassName('katex-mathml')
  katexMathMLClass = Array.from(katexMathMLClass)
}

function createContextMenu(index) {
  const contextMenu = document.createElement('div')
  contextMenu.oncontextmenu = function () {
    return false
  }
  contextMenu.id = 'katex-context-menu'
  contextMenu.classList.add('context-menu', 'close')

  const ul = document.createElement('ul')
  const ul2 = document.createElement('ul')
  const li0 = document.createElement('li')
  const li1 = document.createElement('li')
  const li2 = document.createElement('li')
  const li3 = document.createElement('li')
  const li4 = document.createElement('li')
  const li5 = document.createElement('li')
  const li6 = document.createElement('li')
  const li7 = document.createElement('li')

  ul.classList.add(`ctx-ul`)
  ul.classList.add(`ctx-ul-${index}`)
  ul.id = 'ctx-ul'
  li0.classList.add('ctx-show-mathml')
  li1.classList.add('ctx-show-tex')
  li2.classList.add('ctx-copy-mathml')
  li2.id = 'ctx-copy-mathml'
  li3.classList.add('ctx-copy-tex')
  li3.id = 'ctx-copy-tex'
  li4.classList.add('ctx-all-collapse')
  li5.classList.add('ctx-all-expand')
  li6.id = 'ctx-default-setting'
  li7.id = 'ctx-default-setting-inline'

  li0.innerText = 'MathMLを表示'
  li1.innerText = 'TeXを表示'
  li2.innerText = 'MathMLをコピー'
  li3.innerText = 'TeXをコピー'
  li4.innerText = '全ての数式を折りたたむ'
  li5.innerText = `全ての数式を展開する ${index}`
  li5.style.borderBottom = '2px solid black'
  li6.innerText = '[*]デフォルトの開閉状態'
  li7.innerText = '[*]インライン数式の開閉'

  li6.appendChild(createDefaultCollapsedStateRadio(getDefaultSetting()['default-collapse']))
  li7.appendChild(createDefaultInlineCollapsibleRadio())
  const menus = [li0, li1, li2, li3, li4, li5, li6, li7]
  menus.forEach((menu) => {
    ul.appendChild(menu)
  })

  ul.style.fontSize = '11pt'
  ul.style.fontFamily = 'Osaka'

  contextMenu.appendChild(ul)

  return contextMenu
}
function createModal(header, content) {
  modalDisplay = true
  const modal = document.createElement('div')
  modal.id = 'modal'
  modal.classList.add('modal')
  const modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')
  const modalHeader = document.createElement('div')
  modalHeader.classList.add('modal-header')
  const h1 = document.createElement('h1')
  h1.innerText = header
  const modalClose = document.createElement('span')
  modalClose.classList.add('modalClose')
  modalClose.innerText = '×'
  modalClose.addEventListener('click', () => {
    modal.remove()
  })

  const modalBody = document.createElement('div')
  modalBody.classList.add('modal-body')
  modalBody.innerHTML = `<label><input type="range" min="10" max="20" step="1" id="slider"></label><p>
  ${content}</p>`
  modalBody.style.fontSize = '15px'
  // modalBody.innerText = content
  modalBody.addEventListener('input', (e) => {
    // console.log(e.target.value)
    modalBody.style.fontSize = `${e.target.value}px`
  })

  modalHeader.appendChild(h1)
  modalHeader.appendChild(modalClose)

  modalContent.appendChild(modalHeader)
  modalContent.appendChild(modalBody)

  modal.appendChild(modalContent)

  document.body.appendChild(modal)
}
function createDefaultCollapsedStateRadio(katexDefaultSetting) {
  const radioPart = document.createElement('p')
  const label0 = document.createElement('label')
  const input0 = document.createElement('input')
  const span0 = document.createElement('span')

  label0.classList.add('Radio')
  label0.id = 'labelCollapse'
  input0.id = 'radioCollapse'
  input0.setAttribute('name', 'radio')
  input0.setAttribute('type', 'radio')
  span0.classList.add('Radio-text')
  span0.innerText = '折りたたむ'
  label0.appendChild(input0)
  label0.appendChild(span0)

  const label1 = document.createElement('label')
  const input1 = document.createElement('input')
  const span1 = document.createElement('span')

  label1.classList.add('Radio')
  label1.id = 'labelExpand'
  input1.id = 'radioExpand'
  input1.setAttribute('name', 'radio')
  input1.setAttribute('type', 'radio')
  span1.classList.add('Radio-text')
  span1.innerText = '展開する'
  label1.appendChild(input1)
  label1.appendChild(span1)

  if (katexDefaultSetting) {
    input0.setAttribute('checked', '')
  } else {
    input1.setAttribute('checked', '')
  }

  radioPart.appendChild(label0)
  radioPart.appendChild(label1)

  input0.addEventListener('click', () => {
    mutateDefaultSetting(true)
  })
  input1.addEventListener('click', () => {
    mutateDefaultSetting(false)
  })
  return radioPart
}
function createDefaultInlineCollapsibleRadio(katexDefaultSetting) {
  const radioPart = document.createElement('p')
  const label0 = document.createElement('label')
  const input0 = document.createElement('input')
  const span0 = document.createElement('span')

  label0.classList.add('Radio')
  label0.id = 'labelInlineAble'
  input0.setAttribute('name', 'radio2')
  input0.setAttribute('type', 'radio')
  span0.classList.add('Radio-text')
  span0.innerText = '許可する'
  label0.appendChild(input0)
  label0.appendChild(span0)

  const label1 = document.createElement('label')
  const input1 = document.createElement('input')
  const span1 = document.createElement('span')

  label1.classList.add('Radio')
  label1.id = 'labelInlineDisable'
  input1.setAttribute('name', 'radio2')
  input1.setAttribute('type', 'radio')
  span1.classList.add('Radio-text')
  span1.innerText = '許可しない'
  label1.appendChild(input1)
  label1.appendChild(span1)

  if (katexDefaultSetting) {
    input0.setAttribute('checked', '')
  } else {
    input1.setAttribute('checked', '')
  }

  radioPart.appendChild(label0)
  radioPart.appendChild(label1)

  input0.addEventListener('click', () => {
    mutateDefaultSetting(true)
  })
  input1.addEventListener('click', () => {
    mutateDefaultSetting(false)
  })
  return radioPart
}
function escape_html(string) {
  if (typeof string !== 'string') {
    return string
  }
  return string.replace(/[&'`"<>]/g, function (match) {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
    }[match]
  })
}
function showMathML(index) {
  createModal('MathML', escape_html(katexMathMLClass[index].innerHTML))
}
function showTeX(index) {
  createModal('TeX', katexMathMLClass[index].innerText)
}
function copyMathML(index) {
  copyToClipboard(katexMathMLClass[index].innerHTML)
}
function copyTeX(index) {
  copyToClipboard(katexMathMLClass[index].innerText)
}
function copyToClipboard(text) {
  const pre = document.createElement('pre')

  pre.style.webkitUserSelect = 'auto'
  pre.style.userSelect = 'auto'
  pre.textContent = text

  document.body.appendChild(pre)
  document.getSelection().selectAllChildren(pre)
  const result = document.execCommand('copy')

  document.body.removeChild(pre)

  return result
}
function setCoordinateContextMenu(katexContextMenu, x, y) {
  try {
    katexContextMenu.style.top = `${y}px`
    katexContextMenu.style.left = `${x}px`
  } catch (error) {
    console.error(error)
  }
}
function setFunctionContextMenu(katexContextMenuUl, i) {
  const katexContextMenu = document.getElementById('katex-context-menu')
  katexContextMenuUl.children.forEach((li, liIndex) => {
    if (liIndex === 0) {
      li.addEventListener('click', (event) => {
        showMathML(i)
      })
    } else if (liIndex === 1) {
      li.addEventListener('click', (event) => {
        showTeX(i)
      })
    } else if (liIndex === 2) {
      li.addEventListener('click', (event) => {
        copyMathML(i)
      })
    } else if (liIndex === 3) {
      li.addEventListener('click', (event) => {
        copyTeX(i)
      })
    } else if (liIndex === 4) {
      li.addEventListener('click', (event) => {
        allCollapse()
      })
    } else if (liIndex === 5) {
      li.addEventListener('click', (event) => {
        allExpand()
      })
    } else if (liIndex === 6) {
      li.addEventListener('click', (event) => {
        // mutateDefaultSetting(false)
      })
    }
  })
}
async function katexContextMenu() {
  console.log(
    '%cRun katex-context-menu.js',
    `@import url("https://fonts.googleapis.com/css?family=Courgette"); font: 12px "Courgette", cursive; 
    color: blue; font-weight: bold; border: 1px solid blue; border-radius: 10px; padding: 1px;`
  )

  await loadKaTeX()

  // set onContext Event
  katexClass.forEach((katex, i) => {
    katex.oncontextmenu = function (e) {
      contextMenuDisplay = true
      if (focusIndex !== null) {
        katexClass[focusIndex].classList.remove('focus')
      }
      focusIndex = i

      katex.classList.add('focus')
      const _katexContextMenu = document.getElementById('katex-context-menu')
      if (_katexContextMenu) {
        _katexContextMenu.remove()
      }
      try {
        document.body.appendChild(createContextMenu(i))

        const katexContextMenu = document.getElementById('katex-context-menu')
        const katexContextMenuUl = document.getElementById('ctx-ul')

        setCoordinateContextMenu(katexContextMenu, e.pageX, e.pageY)
        setFunctionContextMenu(katexContextMenuUl, i)
      } catch (error) {
        console.error(error)
      }

      return false
    }
  })

  katexClass.forEach((katex, i) => {
    katex.addEventListener('touchmove', (event) => {
      event.preventDefault()
      contextMenuDisplay = true
      if (focusIndex !== null) {
        katexClass[focusIndex].classList.remove('focus')
      }
      focusIndex = i

      katex.classList.add('focus')
      const _katexContextMenu = document.getElementById('katex-context-menu')
      if (_katexContextMenu) {
        _katexContextMenu.remove()
      }
      try {
        document.body.appendChild(createContextMenu(i))

        const katexContextMenu = document.getElementById('katex-context-menu')
        const katexContextMenuUl = document.getElementById('ctx-ul')

        // setCoordinateContextMenu(katexContextMenu, event.pageX, event.pageY)
        setCoordinateContextMenu(katexContextMenu, 0, 0)
        setFunctionContextMenu(katexContextMenuUl, i)
      } catch (error) {
        console.error(error)
      }
    })
  })
  // addEventListener('click', (e) => {
  //   // console.log(e.target, e)
  //   console.info(`contextMenuDisplay:${contextMenuDisplay}\nmodalDisplay:${modalDisplay}\nfocusIndex:${focusIndex}`)
  //   const modal = document.getElementById('modal')
  //   try {
  //     if (e.target === modal && modalDisplay === true) {
  //       modal.remove()
  //       modalDisplay = false
  //       if (focusIndex !== null) {
  //         katexClass[focusIndex].classList.remove('focus')
  //         focusIndex = null
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // })

  // addEventListener('click', (e) => {
  //   console.info(`contextMenuDisplay:${contextMenuDisplay}\nmodalDisplay:${modalDisplay}\nfocusIndex:${focusIndex}`)

  //   // console.log(e.target, e)
  //   const katexContextMenu = document.getElementById('katex-context-menu')
  //   try {
  //     if (e.target !== katexContextMenu && contextMenuDisplay === true) {
  //       katexContextMenu.remove()
  //       contextMenuDisplay = false
  //       if (focusIndex !== null) {
  //         katexClass[focusIndex].classList.remove('focus')
  //         focusIndex = null
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // })

  addEventListener('click', (e) => {
    // console.log(e.target, e)
    // console.info(`contextMenuDisplay:${contextMenuDisplay}\nmodalDisplay:${modalDisplay}\nfocusIndex:${focusIndex}`)
    const modal = document.getElementById('modal')
    const katexContextMenu = document.getElementById('katex-context-menu')

    try {
      if (e.target === modal && modalDisplay === true) {
        modal.remove()
        modalDisplay = false
      } else if (e.target !== katexContextMenu && contextMenuDisplay === true) {
        katexContextMenu.remove()
        contextMenuDisplay = false
      }
      if (contextMenuDisplay === false && modalDisplay === false) {
        if (katexClass[focusIndex]) {
          katexClass[focusIndex].classList.remove('focus')
          focusIndex = null
        }
      }
    } catch (error) {
      console.error(error)
    }
  })

  // document.body.addEventListener('click', () => {
  //   const katexContextMenu = document.getElementById('katex-context-menu')
  //   if (katexContextMenu) {
  //     katexContextMenu.remove()
  //   }

  // show x,y
  // document.body.oncontextmenu = function (e) {
  //   console.info(
  //     'クリックしました。\ne.client:',
  //     e.clientY,
  //     e.clientX,
  //     '\ne.layer:',
  //     e.layerY,
  //     e.layerX,
  //     '\nx,y:',
  //     e.y,
  //     e.x,
  //     '\noffset:',
  //     e.offsetY,
  //     e.offsetX,
  //     '\nscreen:',
  //     e.screenY,
  //     e.screenX,
  //     '\npage:',
  //     e.pageY,
  //     e.pageX,
  //     '\n',
  //     e
  //   )
  // }
}

export default (context, inject) => {
  inject('katexContextMenu', katexContextMenu)
}
