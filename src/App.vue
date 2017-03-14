<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <p @click="add()">{{ state.count }}</p>
    <p>{{ a }}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './store'

export default {
  name: 'app',
  components: {
    Hello
  },
  data () {
    return {
      state: store.state,
      a: 123
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    add () {
      store.commit('increment')
    }
  },
  mounted () {
    this.$http.get('/movie').then(res => {
      console.log(res)
    }, rej => {
      console.log(rej)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
