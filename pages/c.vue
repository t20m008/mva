<template>
  <v-row class="pa-4">
    <v-col v-for="i in 12" :key="i" cols="3" class="katex-html2 ma-2" style="border: 1px solid blue">
      {{ i }} katex-htmlもどき
    </v-col>

    <v-col cols="12" v-for="j in 100" :key="j + 12">{{ j }}</v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line prefer-const */
export default {
  mounted() {
    const katexHTML2 = Array.from(document.getElementsByClassName('katex-html2'))
    function createCtxMenu(index) {
      const contextMenu = document.createElement('div')
      contextMenu.classList.add('context-menu', 'close')
      contextMenu.style.border = '1px solid #ccc'
      contextMenu.style.boxShadow = `0 10px 25px 0 rgba(0, 0, 0, .5)`

      const ul = document.createElement('ul')
      const li0 = document.createElement('li')
      const li1 = document.createElement('li')
      const li2 = document.createElement('li')
      const li3 = document.createElement('li')
      const li4 = document.createElement('li')
      const li5 = document.createElement('li')
      ul.classList.add(`ctx-ul`)
      ul.classList.add(`ctx-ul-${index}`)
      li0.classList.add('ctx-show-mathml')
      li1.classList.add('ctx-show-tex')
      li2.classList.add('ctx-copy-mathml')
      li3.classList.add('ctx-all-collapse')
      li4.classList.add('ctx-all-expand')
      li5.classList.add('ctx-default')

      li0.innerText = 'MathMLを表示'
      li1.innerText = 'TeXを表示'
      li2.innerText = 'MathMLをコピー'
      li3.innerText = 'TeXをコピー'
      li4.innerText = '全ての数式を折りたたむ'
      li5.innerText = `全ての数式を展開する ${index}`

      const menus = [li0, li1, li2, li3, li4, li5]
      menus.forEach((menu) => {
        ul.appendChild(menu)
      })

      ul.style.fontSize = '11pt'
      ul.style.fontFamily = 'Osaka'

      contextMenu.appendChild(ul)

      return contextMenu
    }

    const katex = document.getElementsByClassName('katex')
    katexHTML2.forEach((kh2, i) => {
      kh2.after(createCtxMenu(i))
    })
    // const katexHTML = document.getElementsByClassName('katex-html')
    const ctxMenus = Array.from(document.getElementsByClassName('context-menu'))
    const li = []
    let openCtx = []

    let clientX = 0
    let clientY = 0

    katexHTML2.forEach((k, i) => {
      k.oncontextmenu = function (e) {
        if (openCtx.length === 0) {
          openCtx.push(ctxMenus[i])
        } else {
          openCtx[0].classList.remove('open')
          openCtx[0].classList.add('close')
          openCtx.pop()
          openCtx.push(ctxMenus[i])
        }
        clientX = e.clientX
        clientY = e.clientY
        ctxMenus[i].classList.remove('close')
        ctxMenus[i].classList.add('open')
        ctxMenus[i].style.top = `${clientY - 50}px`
        ctxMenus[i].style.left = `${clientX}px`
        return false
      }
    })

    ctxMenus.forEach((ctxMenu, ctxMenuIndex) => {
      ctxMenu.children[0].children.forEach((li, liIndex) => {
        if (liIndex === 0) {
          li.addEventListener('click', (event) => {
            showMathML(ctxMenuIndex)
          })
        } else if (liIndex === 1) {
          li.addEventListener('click', (event) => {
            showTeX(ctxMenuIndex)
          })
        } else if (liIndex === 2) {
          li.addEventListener('click', (event) => {
            copyMathML(ctxMenuIndex)
          })
        } else if (liIndex === 3) {
          li.addEventListener('click', (event) => {
            copyTeX(ctxMenuIndex)
          })
        } else if (liIndex === 4) {
          li.addEventListener('click', (event) => {
            allCollapse()
          })
        } else if (liIndex === 5) {
          li.addEventListener('click', (event) => {
            allExpand()
          })
        }
      })
    })

    document.body.addEventListener('click', () => {
      Array.from(ctxMenus).forEach((el, i) => {
        el.classList.remove('open')
        el.classList.add('close')
      })
      openCtx = []
    })

    function showMathML(index) {
      console.log('showMathML', index)
    }
    function showTeX(index) {
      console.log('showTeX', index)
    }
    function copyMathML(index) {
      console.log('copyMathML', index)
    }
    function copyTeX(index) {
      console.log('copyTex', index)
    }
    function allCollapse() {
      console.log('allCollapse')
    }
    function allExpand() {
      console.log('allExpand')
    }
  },
  methods: {},
}
</script>

<style scoped></style>
