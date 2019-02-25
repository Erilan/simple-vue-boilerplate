<template>
  <div class="WithBorder">
    <h2>I am AView !</h2>
    <MyComponent></MyComponent>
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent'
export default {
  name: 'AView',
  components: {
    MyComponent
  },
  props: [],
  data: () => {
    return {
    }
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {}
}
</script>