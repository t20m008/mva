<template>
  <v-row>
    <v-col v-katex cols="12">
      <div v-katex:auto>
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
        \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
      </div>
    </v-col>
    <div style="border: 1px solid black; height: 300px; width: 400px; margin: 100px">
      <div style="border: 1px solid blue; height: 300px; margin: 10px">
        <span style="height: 2.3em; background: yellow; width: 2.3em">A a a </span>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  watch: {},
  mounted() {
    let katexHTMLClass = document.getElementsByClassName('katex-html')
    katexHTMLClass = Array.from(katexHTMLClass)
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
          // eslint-disable-next-line no-empty
          if (mtable.classList.contains('matrix-mtable')) {
          } else if (!mtable.classList.contains('matrix-mtable') && mtableIndex === 0) {
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
                  // eslint-disable-next-line no-empty
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
                  try {
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
                  } catch (e) {
                    console.error(e)
                  }
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
                  try {
                    cols.forEach((row) => {
                      if (
                        row.textContent.length > 0 &&
                        row.className === 'mord' &&
                        row.clientHeight > 1 &&
                        row.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes('col')
                      ) {
                        row.classList.add(`formula-${katexHTMLIndex}`, `row-${rightRowIndex}`, `right`)
                        rightRowIndex++
                      }
                    })
                  } catch (e) {
                    console.error(e)
                  }
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
                      row.classList.add(`formula-${katexHTMLIndex}`, `row-${rightRowIndex}`, `right`)
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
  },
}
</script>

<style scoped>
.base {
  border: 1px dashed rgb(184, 63, 63);
}
.katex-html {
  border: 1px solid green;
}
</style>

document.getElementsByClassName('row-0')[1].style.display = "none" document.getElementsByClassName('row-1')[0].style.display
="none" document.getElementsByClassName('row-2')[0].style.display = "none" colAlignL =
document.getElementsByClassName('col-align-l') colAlignL[0].style.border = "1px solid black" vlist =
document.getElementsByClassName('vlist') vlist[4].style.border = "1px dashed blue" vlist[29].style.border = "1px dashed red"
vlistR = document.getElementsByClassName('vlist-r') vlistR[4].style.border = "4px solid yellow" vlistT =
document.getElementsByClassName('vlist-t')
