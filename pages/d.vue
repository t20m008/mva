<template>
  <div>
    <div style="height: 100px; width: 600px; background-color: pink; font-size: 40px; text-align: center">100px * 600px</div>
    <div style="height: 70px; width: 200px; background-color: grey; font-size: 20px; text-align: center">70px * 200px</div>

    <div class="a">
      a 300px * 500px
      <div class="b">
        b 200px * 400px
        <div class="c">c 100px * 300px</div>
      </div>
    </div>

    <p v-for="i in 100" :key="i">{{ i }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const c = document.getElementsByClassName('c')
    // c[0].style.top = '100px'
    // c[0].style.top = '0px'

    // eslint-disable-next-line no-unused-vars
    // let styleTop = 0
    document.body.addEventListener('click', (e) => {
      // console.info('右クリックしました。\n', e.clientX, e.clientY, '\n', e)
      c[0].style.top = `${e.clientY}px`
      c[0].style.left = `${e.clientX}px`
      // styleTop = c[0].style.top
      // console.log(c[0].style.top)
    })

    // const div = document.getElementsByTagName('div')
    // console.log(div)

    window.addEventListener('scroll', function () {
      console.log('横スクロール：' + window.scrollX)
      console.log('縦スクロール：' + window.scrollY)
      // c[0].style.top = `${styleTop + window.scrollY}px`
      // c[0].style.left = `${window.scrollX}px`
    })
  },
}
</script>
<style>
.a {
  border: 1px solid black;
  padding: 40px;
  width: 500px;
  height: 300px;
  position: relative;
}
.b {
  border: 1px solid black;
  padding: 30px;
  width: 400px;
  height: 200px;
  position: relative;
}
.c {
  border: 1px solid black;
  padding: 20px;
  width: 300px;
  height: 100px;
  background-color: aquamarine;
  position: static;
}
</style>
