<template>
  <div>
    <div class="container">
      <h1>This is my app !</h1>

      <p>You can use images :</p>
      <img src="./assets/images/cat.jpg" width="400">

      <br>

      <p>You can use SASS</p>
      <p>I am a red square : <span class="Square Square--red"></span></p>
      <p>I am a green square : <span class="Square Square--green"></span></p>

      <br>

      <p>You can use components : </p>
      <AView></AView>

    </div>
  </div>
</template>

<script>
import AView from './views/AView'

export default {
  name: 'App',
  components: {
    AView
  }
}
</script>