/* eslint-disable prefer-const */
/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import { getDefaultSetting } from './katex-localStorage'

import firebase from './firebase'

const window_width = window.innerWidth - 15
const window_width_adjusted = window_width
// list of .katex-html
let katex = []
let katex_list = []
let katex_html_collection_list = []
let mathml_list = []
let katex_mathml_html_collection_list = []

// list of .katex-html
let katexClass = []
let katexHTMLClass = []
let katexMathMLClass = []

async function getKatex() {
  katex = await document.getElementsByClassName('katex')
  katex = Array.from(katex)
  katex_html_collection_list = await document.getElementsByClassName('katex-html')
  katex_list = Array.from(katex_html_collection_list)
  katex_mathml_html_collection_list = await document.getElementsByClassName('katex-mathml')
  mathml_list = Array.from(katex_mathml_html_collection_list)
}

async function loadKaTeX() {
  katexClass = await document.getElementsByClassName('katex')
  katexClass = Array.from(katexClass)
  katexHTMLClass = await document.getElementsByClassName('katex-html')
  katexHTMLClass = Array.from(katexHTMLClass)
  katexMathMLClass = await document.getElementsByClassName('katex-mathml')
  katexMathMLClass = Array.from(katexMathMLClass)
}

const addOrdinalNumberClass = async () => {
  // const katexHTMLCollectionList = document.getElementsByClassName('katex')
  // const katexList = Array.from(document.getElementsByClassName('katex'))

  katex.forEach((ktx, index) => {
    if (katex[index].children[1].children.length > 0) {
      if (katex[index].parentElement.classList[0] === 'katex-display') {
        katex[index].parentElement.classList.add(`kd-${index}`)
      }
      katex[index].classList.add(`k-${index}`)
      const children = Array.from(katex[index].children)
      children.forEach((child, childIndex) => {
        if (child.className === 'katex-mathml') {
          children[childIndex].classList.add(`km-${index}`)
        } else if (child.className === 'katex-html') {
          children[childIndex].classList.add(`kh-${index}`)
        }
      })
    }
  })
}
const addStyle = async () => {
  // katex_list.forEach((katex) => {
  //   katex.style.overflow = 'auto revert'
  // })
}
const addClassHorizontal = async () => {
  let baseClassCount = 0
  let mrelEqCount = 0
  let mrelRightArrowCount = 0
  let leftmost = true
  let leftmostLastBaseIndex = 0
  let rightmost = false
  let rightmostFirstBaseIndex = 0
  katex_list.forEach((katex_html, katex_html_index) => {
    const bases = Array.from(katex_html.children)

    baseClassCount = 0
    mrelEqCount = 0
    mrelRightArrowCount = 0

    bases.forEach((base) => {
      if (base.className === 'base') baseClassCount++
      const base_children = Array.from(base.children)
      base_children.forEach((baseChild) => {
        if (baseChild.textContent === '=') mrelEqCount++
        if (baseChild.textContent === '⇒') mrelRightArrowCount++
      })
    })

    if (baseClassCount > 2 && (mrelEqCount > 1 || mrelRightArrowCount > 1)) {
      katex_html.classList.add('horizontal')
      leftmostLastBaseIndex = 0
      rightmostFirstBaseIndex = 0
      leftmost = true

      // confirm if each base is leftmost element or rightmost element (span.base)
      bases.forEach((base, base_index) => {
        const base_children = Array.from(base.children)

        base_children.forEach((baseChild, baseChildIndex) => {
          // equation
          if (mrelRightArrowCount === 0) {
            katex_html.classList.add('equation')
            if (leftmost) {
              if (baseChild.textContent === '=') {
                leftmost = false
                leftmostLastBaseIndex = base_index
              }
            } else if (baseChild.textContent === '=') {
              rightmost = false
              rightmostFirstBaseIndex = base_index
            } else {
              rightmost = true
            }
          }
          // logical
          else if (mrelRightArrowCount > 0) {
            katex_html.classList.add('logical')
          }
        })
      })
      // add leftmost/rightmost class
      if (rightmostFirstBaseIndex !== 0) {
        bases.forEach((base, base_index) => {
          if (base_index < leftmostLastBaseIndex) {
            base.classList.add('leftmost')
          } else if (base_index == leftmostLastBaseIndex) {
            base.classList.add('leftmost', 'phrase_end')
          } else if (base_index > leftmostLastBaseIndex && base_index <= rightmostFirstBaseIndex) {
            const base_children = Array.from(base.children)
            base_children.forEach((base_child, base_child_index) => {
              if (base_child.textContent === '=') {
                base.classList.add('phrase_end')
              }
            })
          } else if (rightmostFirstBaseIndex < base_index) {
            base.classList.add('rightmost')
          }
        })
      }
    }
  })
}
const addClassVertical = async () => {
  // check if there are multiple col-align-r/col-align-l class
  katexHTMLClass.forEach((katexHTML, katexHTMLIndex) => {
    const mtableClass = Array.from(katexHTML.getElementsByClassName('mtable'))

    // check matrix
    mtableClass.forEach((mtable, mtableIndex) => {})

    if (katexHTML.getElementsByClassName('mtable')[0] === undefined) {
      // not multi-line
    } else {
      const mtableClass = Array.from(katexHTML.getElementsByClassName('mtable'))
      // katexHTML has multi-lines
      let multiLine = false
      let existColAlignR = false
      let existColAlignL = false

      mtableClass.forEach((mtable, mtableIndex) => {
        if (mtable.classList.contains('matrix-mtable')) {
        } else if (!mtable.classList.contains('matrix-mtable') && mtableIndex == 0) {
          const mtableChildren = Array.from(mtable.children)
          mtableChildren.forEach((mtableChild) => {
            if (mtableChild.className === 'col-align-r') existColAlignR = true
            if (mtableChild.className === 'col-align-l') existColAlignL = true
          })
          if (existColAlignR === true && existColAlignL === true) multiLine = true
          if (multiLine) {
            katexHTML.classList.add('multi-line')
            const colAlignRList = []
            const colAlignLList = []
            mtableChildren.forEach((mtableChild) => {
              if (mtableChild.className === 'col-align-r') {
                colAlignRList.push(mtableChild)
              } else if (mtableChild.className === 'col-align-l') {
                colAlignLList.push(mtableChild)
              } else {
              }
            })
            let leftRowIndex = 0
            let rightRowIndex = 0
            // Add classes to left lines
            if (colAlignRList.length > 1) {
              colAlignRList.forEach((colAlignR, i) => {
                if (i === 0) {
                  leftRowIndex = 1
                } else {
                  leftRowIndex = 0
                }
                const cols = colAlignR.getElementsByClassName('mord')
                cols.forEach((e, i) => {
                  if (
                    e.textContent.length > 0 &&
                    e.className === 'mord' &&
                    e.clientHeight > 1 &&
                    e.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes('col')
                  ) {
                    e.classList.add(`formula-${katexHTMLIndex}`, `row-${leftRowIndex}`, `left`)
                    leftRowIndex++
                  }
                })
              })
            } else {
              colAlignRList.forEach((colAlignR, i) => {
                const cols = Array.from(colAlignR.getElementsByClassName('mord'))
                cols.forEach((e, i) => {
                  if (
                    e.textContent.length > 0 &&
                    e.className === 'mord' &&
                    e.clientHeight > 1 &&
                    e.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes('col')
                  ) {
                    e.classList.add(`formula-${katexHTMLIndex}`, `row-${leftRowIndex}`, `left`)
                    leftRowIndex++
                  }
                })
              })
            }

            // Add classes to right lines
            if (colAlignLList.length > 1) {
              colAlignLList.forEach((colAlignL, i) => {
                if (i === 0) {
                  rightRowIndex = 1
                } else {
                  rightRowIndex = 0
                }
                const cols = colAlignL.getElementsByClassName('mord')
                cols.forEach((row) => {
                  if (
                    row.textContent.length > 0 &&
                    row.className === 'mord' &&
                    row.clientHeight > 1 &&
                    row.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes('col')
                  ) {
                    console.log(rightRowIndex, row)
                    row.classList.add(`formula-${katexHTMLIndex}`, `row-${rightRowIndex}`, `right`)
                    rightRowIndex++
                  }
                })
              })
            } else {
              colAlignLList.forEach((colAlignL) => {
                const cols = Array.from(colAlignL.getElementsByClassName('mord'))
                cols.forEach((row, index) => {
                  if (
                    row.textContent.length > 0 &&
                    row.className === 'mord' &&
                    row.clientHeight > 1 &&
                    row.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes('col') &&
                    row.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes(
                      'base'
                    ) &&
                    !row.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
                      'matrix-mtable'
                    )
                  ) {
                    row.classList.add(`formula-${katexHTMLIndex}`, `xrow-${rightRowIndex}`, `right`)
                    rightRowIndex++
                  }
                })
              })
            }
            // eslint-disable-next-line no-console
            if (leftRowIndex === rightRowIndex) {
              katexHTML.classList.add('symmetric')
            } else if (leftRowIndex === 0 && rightRowIndex > 0) {
              katexHTML.classList.add('straight')
            } else {
              katexHTML.classList.add('asymmetric')
            }
          }
        }
      })
    }
  })
}
const addStyleOverFlowXAuto = () => {
  const ofx = document.getElementsByClassName('overflow-x')
  Array.from(ofx).forEach((o) => {
    o.style.overflowX = 'auto'
    o.style.overflowY = 'visible'
    o.style.position = 'contents'
  })
}
function allCollapse() {
  const toggleButton = Array.from(document.getElementsByClassName('katex-extension-button'))

  toggleButton.forEach((el, index) => {
    try {
      if (el.classList.contains('collapse-btn') === true) {
        el.click()
      }
    } catch (error) {}
  })
}
function allExpand() {
  const toggleButton = Array.from(document.getElementsByClassName('katex-extension-button'))

  toggleButton.forEach((el, index) => {
    try {
      if (el.classList.contains('expand-btn') === true) {
        el.click()
      }
    } catch (error) {}
  })
}
const saveKatexStatus = (index, val) => {
  const localStorage_obj = JSON.parse(localStorage['katex-status'])
  localStorage_obj[window.location.href][index] = val
  const setjson = JSON.stringify(localStorage_obj)
  localStorage.setItem('katex-status', setjson)
}
const getKatexOverFlowX = () => {
  const index_list = []
  const katex_html_collection = document.getElementsByClassName('katex-html')
  const katex_html = Array.from(katex_html_collection)

  const base_width = []
  const base_height = []

  katex_html.forEach((katex, katex_html_index) => {
    const katex_children = Array.from(katex.children)
    let width = 0
    // console.log('num, client, offset, scroll')
    katex_children.forEach((base, index) => {
      // console.log(index, base.clientWidth, base.offsetWidth, base.scrollWidth)
      width += base.offsetWidth
    })
    if (width > window_width_adjusted) {
      katex_html[katex_html_index].classList.add('overflow-x')
      index_list.push(katex_html_index)
    }
  })
  return index_list
}
const getPhraseEndList = (list) => {
  const phrase_end_list = []
  list.forEach((el, el_index) => {
    if (el.classList.contains('phrase_end')) phrase_end_list.push(el_index)
  })
  return phrase_end_list
}
const getLeftmostList = (list) => {
  const leftmost_list = []
  list.forEach((el, el_index) => {
    if (el.classList.contains('leftmost')) leftmost_list.push(el_index)
  })
  return leftmost_list
}
async function reshape(overFlowList) {
  await overFlowList.forEach((index) => {
    // console.log(katex_list[index])
    const children = Array.from(katex_list[index].children)
    const window_width = window.innerWidth

    let katex_width = 0
    const chapter = []
    console.log('window.width = ', window.innerWidth, 'katex-html-width = ', katex_list[index].clientWidth)
    if (children.length > 1) {
      console.log(children)
      // horizontal type
      children.forEach((child, child_index) => {
        katex_width += child.clientWidth
        console.log('width: ', child.clientWidth, ' sum: ', katex_width)
        if (katex_list[index].clientWidth - 50 < katex_width) {
          katex_width = child.clientWidth
          chapter.push(child_index)
        }
      })
      console.log('chapter:', chapter)
      let outerHTML = ''
      const outerHTMLList = []
      chapter.forEach((sep, chapter_index) => {
        outerHTML = ''
        if (chapter_index < chapter.length - 1) {
          for (let i = sep; i < chapter[chapter_index + 1]; i++) {
            outerHTML += children[i].outerHTML
          }
          outerHTMLList.push('<p>' + outerHTML + '</p>')
        } else {
          for (let i = sep; i < children.length; i++) {
            outerHTML += children[i].outerHTML
          }
          outerHTMLList.push('<p>' + outerHTML + '</p>')
        }
      })
      for (let i = chapter[0] + 1; i < children.length; i++) {
        children[i].remove()
      }

      const str = outerHTMLList.join('')

      children[chapter[0]].outerHTML = str
    } else if (children.length === 1) {
      // vertical type
    }
  })
}
async function reshape2(overFlowList, enable = true) {
  await overFlowList.forEach((index) => {
    const katex_children = Array.from(katex_list[index].children)
    const window_width = window.innerWidth

    let katex_width = 0
    const chapters = []
    const child_widths = []
    const child_heights = []

    console.log('window.width = ', window.innerWidth, 'katex-html-width = ', katex_list[index].scrollWidth)
    const phrase_end_list = getPhraseEndList(katex_children)
    const leftmost_list = getLeftmostList(katex_children)
    const leftmost_end_element = katex_list[index].children[leftmost_list.slice(-1)[0]]
    // leftmost_end_element.children[leftmost_end_element.children.length - 2].remove()
    // console.log(katex_list[index].children[leftmost_list.slice(-1)[0] + 1].before(document.createElement('br')))
    phrase_end_list.forEach((phrase_end) => {
      // 等号追加
      katex_children[phrase_end + 1].children[0].outerHTML =
        katex_children[phrase_end + 1].children[0].outerHTML + '<span class="mrel">=</span>'
      // 等号削除
      Array.from(katex_children[phrase_end].children).slice(-2)[0].remove()
    })
    if (katex_children.length > 1) {
      // horizontal type
      katex_children.forEach((child, child_index) => {
        child_widths.push(child.offsetWidth)
        child_heights.push(child.offsetHeight)
        katex_width += child.clientWidth
        // ディスプレイをはみ出した
        if (window_width_adjusted <= katex_width) {
          katex_width = child.clientWidth
          chapters.push(child_index)
        }
      })
      console.log(katex_children)
      chapters.forEach((chapter, c_index) => {
        console.log('chapter: ', chapter)
        if (chapter != chapters.slice(-1)[0]) {
          console.log('chapterの最後の要素ではない')
          for (let i = chapter; i < chapters[c_index + 1]; i++) {
            console.log('i=', i)
            // 自分がchapter かつ phrase_endかつ、一つ前がphrase_endの場合は改行
            if (
              i == chapter &&
              katex_children[i].classList.contains('phrase_end') &&
              katex_children[i - 1].classList.contains('phrase_end')
            ) {
              console.log('@@@if@@@')
              const br = document.createElement('br')
              br.className = `${i}`
              katex_children[i].before(br)
            } else if (
              i == chapter &&
              katex_children[i].classList.contains('phrase_end') &&
              !katex_children[i - 1].classList.contains('phrase_end')
            ) {
              console.log('@@@elif1@@@')
              const br = document.createElement('br')
              br.className = `${i}`
              katex_children[phrase_end_list[phrase_end_list.indexOf(i) - 1]].after(br)
            }
            // 自分がchapterでphrase_endでない時
            else if (i == chapter && !katex_children[i].classList.contains('phrase_end')) {
              console.log('@@@elif2@@@:chapter', chapter)
              let tmp
              console.log(getPhraseEndList(katex_children))
              getPhraseEndList(katex_children).forEach((phrase_end) => {
                console.log(i, phrase_end)
                if (phrase_end < i) tmp = phrase_end
              })
              console.log('tmp', tmp)
              const br = document.createElement('br')
              br.className = `${i}`
              console.log([tmp, katex_children])
              // console.table(katex_children)
              katex_children[tmp + 1].before(br)
            } else {
              console.log('@@@else@@@')
              const br = document.createElement('br')
              br.className = `${i}`
            }
          }
        } else {
          console.log('chapterの最後の要素')
          for (let i = chapter; i < katex_children.length; i++) {
            console.log('i=', i)
            if (i == chapter && katex_children[i].classList.contains('phrase_end')) {
              console.log('+++if+++')
              const br = document.createElement('br')
              br.className = `${i}`
              katex_children[phrase_end_list[phrase_end_list.indexOf(i) - 1]].after(br)
              // const br = document.createElement('br')
              // br.className = `${i}`
              // katex_children[i].after(br)
            } else if (i == chapter) {
              console.log('+++elif+++')
              let tmp
              getPhraseEndList(katex_children).forEach((phrase_end) => {
                if (phrase_end < i) tmp = phrase_end
              })
              console.log('tmp', tmp)
              const br = document.createElement('br')
              br.className = `${i}`
              katex_children[tmp + 1].before(br)
            }
          }
        }
      })

      console.log('chapters: ', chapters)
      console.log('phrase_end: ', getPhraseEndList(katex_children))
      // console.log('cw:', child_widths, '\nch:', child_heights)
      // console.log('cw,sum: ', sum(child_widths, child_widths.length))
      const outerHTMLList = []
    } else if (katex_children.length === 1) {
      // vertical type
    }
  })
}
function sumFront(array, index) {
  let sum = 0
  for (let i = 0; i < index; i++) {
    sum += array[i]
  }
}
function sumPart(array, start, last) {
  let sum = 0
  for (let i = start; i < last; i++) {
    sum += array[i]
  }
}
function collapseAsymmetric(n) {
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)
  let numLeftLine = 0
  let numRightLine = 0
  const leftHeight = []
  const rightHeight = []
  const colLeft = []
  const colRight = []
  let firstElement = null
  let secondElement = null
  let lastElement = null

  if (katex_list[n].classList.contains('collapsed')) {
  } else {
    formula.forEach((row, i) => {
      if (row.classList.contains('left')) {
        numLeftLine++
        leftHeight.push(row.clientHeight)
        colLeft.push(row)
      } else {
        numRightLine++
        rightHeight.push(row.clientHeight)
        colRight.push(row)
      }
      numLeftLine = 0
      numRightLine = 0
    })

    colLeft.forEach((row, index) => {
      if (index == 0) {
        firstElement = row
      }
      if (index < colLeft.length - 1) {
        row.classList.add('gradation')
      }
    })

    // colRight.forEach((row, index) => {
    //   if (index < 3) {
    //     row.classList.add('gradation')
    //     row.style.display = 'none'
    //     row.previousElementSibling.style.display = 'none'
    //   }
    // })
    colRight.forEach((row, index) => {
      if (index < colRight.length - 1) {
        row.classList.add('gradation')
        row.style.display = 'none'
        row.previousElementSibling.style.display = 'none'
      } else {
        lastElement = row
      }
    })

    secondElement = colRight[1]

    if (firstElement != null && lastElement != null) {
      const lastElementStyleTop = lastElement.parentElement.style.top
      // console.log(secondElement)
      const secondElementStyleTop = secondElement.parentElement.style.top
      lastElement.parentElement.style.top = firstElement.parentElement.style.top
      // lastElement.parentElement.style.top = secondElementStyleTop
      // firstElement.parentElement.style.top = secondElementStyleTop

      const h = Math.max(firstElement.clientHeight, lastElement.clientHeight)
      katex_list[n].style.height = `${h}px`
      katex_list[n].classList.add('collapsed', `${lastElementStyleTop}`)
      katex_list[n].classList.remove('expanded')
    }
  }
}
function collapseHorizontal(n) {
  let leftmostLastBaseIndex = 0
  let rightmostFirstBaseIndex = 0
  let tmp = 0

  const katex_children = Array.from(katex_list[n].children)
  katex_children.forEach((katex_child, index) => {
    if (katex_child.classList.contains('leftmost')) {
      leftmostLastBaseIndex = index
    } else if (katex_child.classList.contains('rightmost')) {
      rightmostFirstBaseIndex = index
      tmp++
    }
  })
  rightmostFirstBaseIndex = rightmostFirstBaseIndex - tmp + 1
  // console.log(leftmostLastBaseIndex, rightmostFirstBaseIndex)
  katex_children.forEach((katex_child, index) => {
    if (leftmostLastBaseIndex < index && index < rightmostFirstBaseIndex) {
      katex_child.style.display = 'none'
      katex_child.classList.add('gradation')
    }
  })
  katex_list[n].classList.remove('expanded')
  katex_list[n].classList.add('collapsed')
}
function collapseHorizontalOnMounted(n) {
  let leftmostLastBaseIndex = 0
  let rightmostFirstBaseIndex = 0
  let tmp = 0

  const katex_children = Array.from(katex_list[n].children)

  katex_children.forEach((katex_child, index) => {
    if (katex_child.classList.contains('leftmost')) {
      leftmostLastBaseIndex = index
    } else if (katex_child.classList.contains('rightmost')) {
      rightmostFirstBaseIndex = index
      tmp++
    }
  })
  rightmostFirstBaseIndex = rightmostFirstBaseIndex - tmp + 1
  katex_children.forEach((katex_child, index) => {
    if (leftmostLastBaseIndex < index && index < rightmostFirstBaseIndex) {
      katex_child.style.display = 'none'
      katex_child.classList.add('gradation')
    }
  })
  katex_list[n].classList.add('collapsed')
}
function collapseStraight(n) {
  const katexHTMLList = document.getElementsByClassName('katex-html')
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)

  // console.log(katexHTMLList)
  // katexHTMLList[n].style.height = '79px'
  // katexHTMLList[n].style.height = '79px'
  // console.log(formula)
  formula.forEach((row, index) => {
    // console.log(row.clientHeight)
    if (index > 0 && index < formula.length - 1) {
      row.style.display = 'none'
    }
  })
}
function collapseSymmetric(n) {
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)
  const leftHeight = []
  const rightHeight = []
  const colLeftList = []
  const colRightList = []
  const firstRowElementsInColLeft = []
  const lastRowElementsInColLeft = []
  const firstRowElementsInColRight = []
  const lastRowElementsInColRight = []
  let numColRight = 0

  formula.forEach((row, index) => {
    if (row.classList.contains('left')) {
      leftHeight.push(row.clientHeight)
      colLeftList.push(row)
    } else {
      numColRight++
      rightHeight.push(row.clientHeight)
      colRightList.push(row)
    }
  })
  const colLeftListList = []

  if (colLeftList.length != colRightList.length) {
    colLeftListList.push(colLeftList.slice(0, numColRight - 1), colLeftList.slice(numColRight - 1))
  } else {
    colLeftListList.push(colLeftList)
  }

  // console.log(n, 'colLeftList:', colLeftList, 'colRightList:', colRightList)
  colLeftListList.forEach((colLeftList, colLeftListIndex) => {
    colLeftList.forEach((row, index) => {
      if (index == colLeftList.length - 1) {
        lastRowElementsInColLeft.push(row)
      }
      if (colLeftListIndex == colLeftListList.length - 1) {
        if (index == 0) firstRowElementsInColLeft.push(row)
      }
      const rowIndex = row.className.match(/row-(\d)/)[1]
      if (rowIndex != 0 && rowIndex != numColRight - 1) {
        row.style.display = 'none'
        row.previousElementSibling.style.display = 'none'
        row.classList.add('gradation')
      }
    })
  })

  console.log(colLeftList, colRightList)

  colRightList.forEach((r, i) => {
    console.log(r)
  })
  colRightList.forEach((row, index) => {
    if (index == 0) {
      firstRowElementsInColRight.push(row)
    } else if (index > 0 && index < colRightList.length - 1) {
      row.style.display = 'none'
      row.previousElementSibling.style.display = 'none'
    } else {
      lastRowElementsInColRight.push(row)
    }
  })

  // let lastRowElementStyleTop = 0
  // let secondElementStyleTop = 0

  // try {
  //   if (lastRowElementsInColRight.length != 0) {
  //     lastRowElementStyleTop = lastRowElementsInColRight[0].parentElement.style.top
  //     secondElementStyleTop = firstRowElementsInColLeft[0].parentElement.nextElementSibling.style.top
  //   }
  // } catch (e) {
  //   console.error(e)
  // }

  // lastRowElementsInColLeft.forEach((row) => {
  //   row.parentElement.style.top = secondElementStyleTop
  // })

  // lastRowElementsInColRight.forEach((row) => {
  //   row.parentElement.style.top = secondElementStyleTop
  // })

  // let firstRowHeight = 0
  // let lastRowHeight = 0

  // firstRowElementsInColLeft.forEach((e, i) => {
  //   if (i == 0) firstRowHeight = e.clientHeight
  //   else firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
  // })

  // firstRowElementsInColRight.forEach((e, i) => {
  //   if (i == 0) firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
  //   else firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
  // })

  // lastRowElementsInColLeft.forEach((e, i) => {
  //   if (i == 0) lastRowHeight = e.clientHeight
  //   else lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
  // })

  // lastRowElementsInColRight.forEach((e, i) => {
  //   if (i == 0) lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
  //   else lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
  // })

  katex_list[n].style.height = `${firstRowHeight + lastRowHeight}px`
  katex_list[n].classList.add('collapsed', `${lastRowElementStyleTop}`)
  katex_list[n].classList.remove('expanded')
}
function collapseSymmetricOnMounted(n) {
  const katexHTMLList = document.getElementsByClassName('katex-html')
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)
  const leftHeight = []
  const rightHeight = []
  const colLeftList = []
  const colRightList = []
  const firstRowElementsInColLeft = []
  const lastRowElementsInColLeft = []
  const firstRowElementsInColRight = []
  const lastRowElementsInColRight = []
  let numColRight = 0

  formula.forEach((row, index) => {
    if (row.classList.contains('left')) {
      leftHeight.push(row.clientHeight)
      colLeftList.push(row)
    } else {
      numColRight++
      rightHeight.push(row.clientHeight)
      colRightList.push(row)
    }
  })
  const colLeftListList = []

  if (colLeftList.length != colRightList.length) {
    colLeftListList.push(colLeftList.slice(0, numColRight - 1), colLeftList.slice(numColRight - 1))
  } else {
    colLeftListList.push(colLeftList)
  }

  // console.log(n, 'colLeftList:', colLeftList, 'colRightList:', colRightList)
  colLeftListList.forEach((colLeftList, colLeftListIndex) => {
    colLeftList.forEach((row, index) => {
      if (index == colLeftList.length - 1) {
        lastRowElementsInColLeft.push(row)
      }
      if (colLeftListIndex == colLeftListList.length - 1) {
        if (index == 0) firstRowElementsInColLeft.push(row)
      }
      const rowIndex = row.className.match(/row-(\d)/)[1]
      if (rowIndex != 0 && rowIndex != numColRight - 1) {
        row.style.display = 'none'
        row.previousElementSibling.style.display = 'none'
        row.classList.add('gradation')
      }
    })
  })

  colRightList.forEach((row, index) => {
    if (index == 0) {
      firstRowElementsInColRight.push(row)
    } else if (index > 0 && index < colRightList.length - 1) {
      row.style.display = 'none'
      row.previousElementSibling.style.display = 'none'
      row.classList.add('gradation')
    } else {
      lastRowElementsInColRight.push(row)
    }
  })

  let lastRowElementStyleTop = 0
  let secondElementStyleTop = 0
  if (lastRowElementsInColRight.length != 0) {
    lastRowElementStyleTop = lastRowElementsInColRight[0].parentElement.style.top
    secondElementStyleTop = firstRowElementsInColLeft[0].parentElement.nextElementSibling.style.top
  }

  lastRowElementsInColLeft.forEach((row) => {
    row.parentElement.style.top = secondElementStyleTop
  })

  lastRowElementsInColRight.forEach((row) => {
    row.parentElement.style.top = secondElementStyleTop
  })

  let firstRowHeight = 0
  let lastRowHeight = 0

  firstRowElementsInColLeft.forEach((e, i) => {
    if (i == 0) firstRowHeight = e.clientHeight
    else firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
  })

  firstRowElementsInColRight.forEach((e, i) => {
    if (i == 0) firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
    else firstRowHeight = Math.max(firstRowHeight, e.clientHeight)
  })

  lastRowElementsInColLeft.forEach((e, i) => {
    if (i == 0) lastRowHeight = e.clientHeight
    else lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
  })

  lastRowElementsInColRight.forEach((e, i) => {
    if (i == 0) lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
    else lastRowHeight = Math.max(lastRowHeight, e.clientHeight)
  })

  katexHTMLList[n].style.height = `${firstRowHeight + lastRowHeight}px`
  katexHTMLList[n].classList.add('collapsed', `${lastRowElementStyleTop}`)
  katexHTMLList[n].classList.remove('expanded')
}
// function createToggle(stats) {
//   let checked = ''
//   if (stats) {
//     checked = 'checked'
//   }

//   const defaultButtonStatus = 'expand-btn'

//   katex_list.forEach((katexHTML, index) => {
//     let numRightLine = 0
//     // vertical symmetric
//     if (katex_list[index].classList.contains('symmetric')) {
//       // console.log(index, ':symmetric')
//       if (katex_list.classList.contains('collapsed')) {
//         // is collapsed
//         const formulaList = document.querySelectorAll(`[class~="formula-${index}`)
//         formulaList.forEach((formula) => {
//           if (formula.classList.contains('right')) {
//             numRightLine++
//           }
//         })
//         const katexToolbar = document.createElement('div')
//         katexToolbar.innerHTML = `
//                   <div class="switch">
//                     <label class="switch__label">
//                       <input
//                         type="checkbox" ${checked}
//                         class="switch__input katex-extension-button symmetric ${defaultButtonStatus}"
//                       />
//                       <span class="switch__content"></span>
//                       <span class="switch__circle"></span>
//                     </label>
//                   </div>`

//         katexToolbar.classList.add('katex-toolbar', `kib-${index}`)
//         katex_html_collection_list[index].parentElement.parentElement.parentElement.parentElement.after(katexToolbar)
//       }
//     }
//     // vertical asymmetric
//     else if (katex_html_collection_list[index].classList.contains('asymmetric')) {
//       // console.log(index, ':asymmetric')

//       // is collapsed
//       const formulaList = document.querySelectorAll(`[class~="formula-${index}"`)
//       formulaList.forEach((formula) => {
//         if (formula.classList.contains('right')) {
//           numRightLine++
//         }
//       })
//       const katexToolbar = document.createElement('div')
//       katexToolbar.innerHTML = `
//                   <div class="switch">
//                     <label class="switch__label">
//                       <input
//                         type="checkbox" ${checked}
//                         class="switch__input katex-extension-button asymmetric"
//                       />
//                       <span class="switch__content"></span>
//                       <span class="switch__circle"></span>
//                     </label>
//                   </div>`
//       katexToolbar.classList.add('katex-toolbar', `kib-${index}`)
//       katex_html_collection_list[index].parentElement.parentElement.parentElement.parentElement.after(katexToolbar)
//     }
//     // horizontal
//     else if (katex_html_collection_list[index].classList.contains('horizontal')) {
//       let numHideElements = 0
//       const katex_html_children = Array.from(katex_list[index].children)

//       // equation
//       if (katex_list[index].classList.contains('equation')) {
//         katex_html_children.forEach((base, baseIndex) => {
//           const base_children = Array.from(base.children)
//           base_children.forEach((base_child) => {
//             if (base_child.textContent == '=') numHideElements++
//           })
//         })
//       }
//       // logical
//       else if (katex_html_collection_list[index].classList.contains('logical')) {
//         katexHTMLChildren.forEach((base, baseIndex) => {})
//       }

//       const toggle = document.createElement('div')
//       toggle.classList.add('switch', 'katex-toolbar', `kib-${index}`, 'py-1')
//       toggle.innerHTML = `
//                 <label class="switch__label">
//                   <input
//                     type="checkbox" ${checked}
//                     class="switch__input katex-extension-button horizontal ${defaultButtonStatus}"
//                   />
//                   <span class="switch__content"></span>
//                   <span class="switch__circle"></span>
//                 </label>`

//       // toggle.classList.add('katex-toolbar', `kib-${index}`)
//       if (katex[index].parentElement.classList.contains('katex-display')) {
//         // display
//         katex[index].parentElement.parentElement.after(toggle)
//       } else {
//         // inline
//         toggle.style.display = 'inline'
//         katex[index].after(toggle)
//       }
//     }
//     // horizontal combined
//     else if (katex_html_collection_list[index].classList.contains('horizontal-combined')) {
//       // console.log(index, ':horizontal-combined')
//       const numHideElements = 0
//       const katexHTMLChildren = Array.from(katexHTMLList[index].children)

//       const katexToolbar = document.createElement('div')
//       katexToolbar.innerHTML = `
//           <span class="collapse-message cm-${index}">${numHideElements - 1}式を省略中</span>
//           <div class="expand-btn hcebtn-${index}"><i class="fas fa-2x fa-caret-square-right fa-fw"></i></div>
//           <div class="collapse-btn hccbtn-${index}" style="display: none;"><i class="fas fa-2x fa-caret-square-left fa-fw"></i></div>

//       `
//       katexToolbar.classList.add('katex-toolbar', `kib-${index}`)

//       katex_html_collection_list[index].parentElement.parentElement.parentElement.parentElement.after(katexToolbar)
//     }
//     // other
//     else {
//       const katexToolbar = document.createElement('div')
//       // katexToolbar.classList.add('katex-extension-button')
//       // katexHTMLListHC[index].parentElement.parentElement.after(katexToolbar)
//       // console.log(index, ':other')
//     }
//   })
// }

function createToggle(index, checked, collapsed) {
  const status = ['expand-btn', 'collapse-btn']

  const toggle = document.createElement('div')
  toggle.classList.add('switch', 'katex-toolbar', `kib-${index}`, 'py-1')

  function innerHTML(type, checked, collapsed) {
    let _checked = 'checked'
    let _collapsed = 'expand-btn'
    if (!checked) _checked = ''
    if (!collapsed) _collapsed = 'collapse-btn'
    const html = `<label class="switch__label">
      <input type="checkbox" ${_checked} class="switch__input katex-extension-button ${type} ${_collapsed}"/>
      <span class="switch__content"></span><span class="switch__circle"></span></label>`
    return html
  }
  let type = ''
  if (katex_list[index].classList.contains('symmetric')) type = 'symmetric'
  else if (katex_list[index].classList.contains('asymmetric')) type = 'asymmetric'
  else if (katex_list[index].classList.contains('horizontal')) type = 'horizontal'
  else if (katex_list[index].classList.contains('horizontal-combined')) type = 'horizontal-combined'
  else type = 'none'

  toggle.innerHTML = innerHTML(type, checked, collapsed)
  if (katex[index].parentElement.classList.contains('katex-display')) {
    // display
    katex[index].parentElement.parentElement.after(toggle)
  } else {
    // inline
    toggle.style.display = 'inline'
    toggle.style.position = 'relative'
    katex[index].after(toggle)
  }
}
function expandAsymmetric(n) {
  // console.log(`expandAsymmetric(${n})`)
  const katexHTML = document.getElementsByClassName('katex-html')
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)
  const colLeft = []
  const colRight = []

  if (katexHTML[n].classList.contains('expanded')) {
  } else {
    // not expanded
    katexHTML[n].style.height = ''
    katexHTML[n].classList.remove('collapsed')
    katexHTML[n].classList.add('expanded')
    let lastElementStyleTop = ''
    const katexHTMLClassList = Array.from(katexHTML[n].classList)
    const pattern = /\w+em/g
    katexHTMLClassList.forEach((className, classNameIndex) => {
      if (className.match(pattern)) {
        lastElementStyleTop = katexHTML[n].classList[classNameIndex]
      }
    })

    if (formula.length > 0) {
      // console.log('%cformula:', this.$store.state.console, formula)
    }
    formula.forEach((row, i) => {
      row.style.display = ''
      row.previousElementSibling.style.display = ''
      if (i == formula.length - 1) {
        row.parentElement.style.top = lastElementStyleTop
      }
      if (row.classList.contains('left')) {
        colLeft.push(row)
      } else {
        colRight.push(row)
      }
    })
  }
}
function expandHorizontal(n) {
  // 11/11 Thu. 修正済み
  let leftmostLastBaseIndex = 0
  let rightmostFirstBaseIndex = 0
  let tmp = 0
  Array.from(katex_list[n].children).forEach((kc, kcIndex) => {
    if (kc.classList.contains('leftmost')) {
      leftmostLastBaseIndex = kcIndex
    } else if (kc.classList.contains('rightmost')) {
      rightmostFirstBaseIndex = kcIndex
      tmp++
    }
  })
  rightmostFirstBaseIndex = rightmostFirstBaseIndex - tmp + 1
  Array.from(katex_list[n].children).forEach((el, index) => {
    if (leftmostLastBaseIndex < index && index < rightmostFirstBaseIndex) {
      el.style.display = ''
    }
  })

  katex_list[n].classList.remove('collapsed')
  katex_list[n].classList.add('expanded')
}
function expandSymmetric(n) {
  const katexHTMLList = document.getElementsByClassName('katex-html')
  const formula = document.querySelectorAll(`[class~="formula-${n}"`)

  if (katexHTMLList[n].classList.contains('expanded')) {
  } else {
    // not expanded
    katexHTMLList[n].style.height = ''
    katexHTMLList[n].classList.remove('collapsed')
    katexHTMLList[n].classList.add('expanded')

    let lastElementStyleTop = ''
    const katexHTMLClassList = Array.from(katexHTMLList[n].classList)
    katexHTMLClassList.forEach((className, classNameIndex) => {
      if (className.match(/\w+em/g)) {
        lastElementStyleTop = katexHTMLList[n].classList[classNameIndex]
      }
    })

    const rowIndexList = []

    formula.forEach((row) => {
      rowIndexList.push(row.className.match(/row-(\d)/)[1])
    })
    const rowIndex = Math.max(...rowIndexList)

    formula.forEach((row, i) => {
      row.style.display = ''
      row.previousElementSibling.style.display = ''
      if (row.className.match(/row-(\d)/)[1] == rowIndex) {
        row.parentElement.style.top = lastElementStyleTop
      }
    })
  }
}
function fireStoreDocExists() {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!firebase.auth().currentUser) {
    firebase
      .firestore()
      .collection('log')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.exists
      })
  }
}
function fireStoreSaveDocField() {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!firebase.auth().currentUser) {
    firebase
      .firestore()
      .collection('log')
      .doc(firebase.auth().currentUser.uid)
      .set({
        displayName: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
        uid: firebase.auth().currentUser.uid,
      })
      .then(() => {
        // console.log('fsSaveDocField!')
      })
  }
}
function fireStoreSaveLog(katexIndex, action) {
  const katexMathML = Array.from(document.getElementsByClassName('katex-mathml'))

  firebase
    .firestore()
    .collection('log')
    .doc(firebase.auth().currentUser.uid)
    .collection('history')
    // .doc(String(Date.now()))
    .doc(getUniqueStr(811))
    .set({
      action,
      date: Date(),
      href: window.location.href,
      id: katexIndex,
      tex: katexMathML[katexIndex].innerText,
      timestamp: Date.now(),
    })
    .then(() => {
      // console.log('Document successfully written!')
    })
}
function getUniqueStr(myStrong) {
  let strong = 1000
  if (myStrong) strong = myStrong
  return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}

async function setToggleDetail(element, index, type, stats) {
  if (type == 'symmetric') {
    element.addEventListener('change', (event) => {
      if (element.checked) {
        event.target.classList.remove('collapse-btn')
        event.target.classList.add('expand-btn')
        event.target.classList.remove(`scbtn-${index}`)
        event.target.classList.add(`sebtn-${index}`)
        collapseSymmetric(index)
        fireStoreSaveLog(index, 'collapse')
        saveKatexStatus(index, 1)
      } else {
        event.target.classList.remove('expand-btn')
        event.target.classList.add('collapse-btn')
        event.target.classList.remove(`sebtn-${index}`)
        event.target.classList.add(`scbtn-${index}`)
        expandSymmetric(index)
        fireStoreSaveLog(index, 'expand')
        saveKatexStatus(index, 0)
      }
    })
  } else if (type == 'asymmetric') {
    element.addEventListener('change', (event) => {
      if (element.checked) {
        event.target.classList.remove('collapse-btn')
        event.target.classList.add('expand-btn')
        event.target.classList.remove(`acbtn-${index}`)
        event.target.classList.add(`aebtn-${index}`)
        collapseAsymmetric(index)
        fireStoreSaveLog(index, 'collapse')
        saveKatexStatus(index, 1)
      } else {
        event.target.classList.remove('expand-btn')
        event.target.classList.add('collapse-btn')
        event.target.classList.remove(`aebtn-${index}`)
        event.target.classList.add(`acbtn-${index}`)
        expandAsymmetric(index)
        fireStoreSaveLog(index, 'expand')
        saveKatexStatus(index, 0)
      }
    })
  } else if (type == 'horizontal') {
    element.addEventListener('change', (event) => {
      if (element.checked) {
        event.target.classList.remove('collapse-btn')
        event.target.classList.add('expand-btn')
        event.target.classList.remove(`hcbtn-${index}`)
        event.target.classList.add(`hebtn-${index}`)
        collapseHorizontal(index)
        fireStoreSaveLog(index, 'collapse')
        saveKatexStatus(index, 1)
      } else {
        event.target.classList.remove('expand-btn')
        event.target.classList.add('collapse-btn')
        event.target.classList.remove(`hebtn-${index}`)
        event.target.classList.add(`hcbtn-${index}`)
        expandHorizontal(index)
        fireStoreSaveLog(index, 'expand')
        saveKatexStatus(index, 0)
      }
    })
  } else if (type == 'horizontalcombined') {
  } else {
    // console.log('type not found')
  }
}
async function katexCollapsible(collapse = true, reshape = true, katex_status) {
  // console.log(
  //   '%cRun katex-collapsible.js',
  //   `@import url("https://fonts.googleapis.com/css?family=Courgette"); font: 12px "Courgette", cursive;
  //   color: green; font-weight: bold; border: 1px solid green; border-radius: 10px; padding: 1px;`
  // )
  const l = {
    uid: firebase.auth().currentUser.uid,
    email: firebase.auth().currentUser.email,
    displayName: firebase.auth().currentUser.displayName,
  }

  // console.table(l)
  // console.log('fireStoreDocExists:', fireStoreDocExists())
  // if (fireStoreDocExists()) {
  //   fireStoreSaveDocField()
  // } else {
  //   fireStoreSaveDocField()
  // }

  fireStoreSaveDocField()

  await getKatex()
  await loadKaTeX()
  await addOrdinalNumberClass()
  await addClassHorizontal()
  await addClassVertical()
  await addStyle()

  // const katex_status = [1, 0, 1, 1, 0, 1, 1]
  const overFlowIndexList = getKatexOverFlowX()
  // await reshape(overFlowIndexList)
  addStyleOverFlowXAuto()
  // if (reshape) await reshape2(overFlowIndexList)

  // if (getDefaultSetting()['default-collapse']) {
  //   console.log(getDefaultSetting()['default-collapse'])
  //   console.log(JSON.parse(localStorage['katex-status'])[window.location.href])
  //   console.log(localStorage.getItem('katex-status'))
  // } else {
  //   //
  // }
  // context menu
  if (collapse) {
    // collapseOnMounted
    katexHTMLClass.forEach((katex, index) => {
      if (katexClass[index].parentElement.classList.contains('katex-display')) {
        katexHTMLClass[index].classList.add('display')
      } else {
        katexHTMLClass[index].classList.add('inline')
      }
      //
      if (katex.classList.contains('symmetric')) {
        if (katex_status[index] == 1) {
          collapseSymmetric(index)
          createToggle(index, 1, true)
        } else createToggle(index, 0, false)
      } else if (katex.classList.contains('straight')) {
        collapseStraight(index)
      } else if (katex.classList.contains('asymmetric')) {
        if (katex_status[index] == 1) {
          collapseAsymmetric(index)
          createToggle(index, 1, true)
        } else createToggle(index, 0, false)
      } else if (katex.classList.contains('horizontal')) {
        if (katex_status[index] == 1) {
          collapseHorizontal(index)
          createToggle(index, 1, true)
        } else createToggle(index, 0, false)
      } else if (katex.classList.contains('horizontal-combined')) {
        // collapseHorizontalCombinedOnMounted(index)
      } else {
        // type not found
      }
    })
  }

  // Connect collapse/expand buttons and methods
  const katexExtensionButtons = Array.from(document.getElementsByClassName('katex-extension-button'))
  let katexExtensionButtonType = null
  katexExtensionButtons.forEach((katexExtensionButton, katexExtensionButtonIndex) => {
    katexExtensionButtonType = katexExtensionButton.classList[2]
    setToggleDetail(
      katexExtensionButton,
      katexExtensionButton.parentElement.parentElement.classList[2].split('-')[1],
      katexExtensionButtonType
    )
  })
}

export default (context, inject) => {
  inject('katexCollapsible', katexCollapsible)
}

export { allCollapse, allExpand, getUniqueStr }
