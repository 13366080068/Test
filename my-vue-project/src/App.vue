<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p v-if="seen">Now you can see me</p>
    <router-link to="/helloworld">Go to HelloWorld</router-link>
    <router-link to="/hello">Go to Hello</router-link>
    <h1>Named Routes</h1>
    <p>Current route name: {{ $route.name }}</p>
    <ul>
      <li><router-link :to="{ name: 'home' }">home</router-link></li>
      <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
      <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
    </ul>   
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <child my-message="parentMsg"></child>

    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>

    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

export default {
  name: 'App',
  data() {
    return {
      seen: true,
      total: 0
    }
  },
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    incrementTotal: function () {
      this.total += 1
    }
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

.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "nav content"
    "nav helper"
    ;
}

h2 {
  grid-area: header;
}

.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: .75rem;
  padding: .3rem;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}
</style>
