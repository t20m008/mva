<template>
  <div>
    <div style="height: 100px; width: 600px; background-color: pink; font-size: 40px; text-align: center">100px * 600px</div>
    <div style="height: 70px; width: 200px; background-color: grey; font-size: 20px; text-align: center">70px * 200px</div>
    <div v-katex>$$ f(x)g(x) = x^2 y^3 $$</div>

    <div v-katex>$$ \int_a^b x(t) dx = \frac{1+c}{2} $$</div>

    <div class="a">
      a 300px * 500px
      <div class="b">b 200px * 400px</div>
    </div>
    <div class="c">c 100px * 300px</div>

    <div class="popup" id="js-popup">
      <div class="popup-inner">
        <div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div>
        <div class="show-mathml">TEXT</div>
      </div>
      <div class="black-background" id="js-black-bg"></div>
    </div>
    <button id="js-show-popup">Show Popup</button>

    <p v-for="i in 100" :key="i">{{ i }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$runCtx()
    // eslint-disable-next-line no-unused-vars
    const c = document.getElementsByClassName('c')

    document.body.addEventListener('click', (e) => {
      try {
        c[0].style.left = `${e.pageX}px`
        c[0].style.top = `${e.pageY}px`
      } catch (e) {
        console.error(e)
      }
    })

    /** POP UP **/
    function popupImage() {
      document.getElementsByClassName('show-mathml')[0].innerText = document.getElementsByClassName('katex-mathml')[0].innerHTML
      const popup = document.getElementById('js-popup')
      if (!popup) return

      const blackBg = document.getElementById('js-black-bg')
      const closeBtn = document.getElementById('js-close-btn')
      const showBtn = document.getElementById('js-show-popup')

      closePopUp(blackBg)
      closePopUp(closeBtn)
      closePopUp(showBtn)
      function closePopUp(elem) {
        if (!elem) return
        elem.addEventListener('click', function () {
          popup.classList.toggle('is-show')
        })
      }
    }
    popupImage()
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
  position: absolute;
}

.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: 0.6s;
}
.popup.is-show {
  opacity: 1;
  visibility: visible;
}
.popup-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  padding: 50px;
  background-color: #fff;
  z-index: 2;
}
.popup-inner img {
  width: 100%;
}
.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.close-btn i {
  font-size: 20px;
  color: #333;
}
.black-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(96, 96, 96, 0.8);
  z-index: 1;
  cursor: pointer;
}
</style>
