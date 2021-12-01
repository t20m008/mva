<template>
  <div>
    <button id="modalOpen" class="button">Click Me</button>
    <div id="easyModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h1>MathML</h1>
          <span class="modalClose">×</span>
        </div>
        <div class="modal-body">
          <p>f(x) = ax^2 + bx + c</p>
          <textarea>aaa</textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    /* modal */
    const buttonOpen = document.getElementById('modalOpen')
    const modal = document.getElementById('easyModal')
    const buttonClose = document.getElementsByClassName('modalClose')[0]

    // ボタンがクリックされた時
    buttonOpen.addEventListener('click', modalOpen)
    function modalOpen() {
      modal.style.display = 'block'
    }

    // バツ印がクリックされた時
    buttonClose.addEventListener('click', modalClose)
    function modalClose() {
      modal.style.display = 'none'
    }

    // モーダルコンテンツ以外がクリックされた時
    addEventListener('click', outsideClose)
    function outsideClose(e) {
      if (e.target === modal) {
        modal.style.display = 'none'
      }
    }
  },
}
</script>

<style scoped>
/* .button {
  background: lightblue;
  color: #fff;
  padding: 0 2em;
  border: 0;
  width: 50px;
  height: 100px;
  font-size: 15px;
  border-radius: 5px;
  font-weight: 900;
  position: relative;
  font-family: serif;
} */

/* .button:hover {
  background: lightcoral;
  cursor: pointer;
} */
</style>
