// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'

const UserSettingsNav = {
  template: `
<div class="us__nav">
  <router-link to="/settings/emails">emails</router-link>
  <br>
  <router-link to="/settings/profile">profile</router-link>
</div>
`
}

const UserSettings = {
  template: `
<div class="us">
  <h2>User Settings</h2>
  <UserSettingsNav/>
  <router-view class ="us__content"/>
  <router-view name="helper" class="us__content us__content--helper"/>
</div>
  `,
  components: { UserSettingsNav }
}

const UserEmailsSubscriptions = {
  template: `
<div>
	<h3>Email Subscriptions</h3>
</div>
  `
}

const UserProfile = {
  template: `
<div>
	<h3>Edit your profile</h3>
</div>
  `
}

const UserProfilePreview = {
  template: `
<div>
	<h3>Preview of your profile</h3>
</div>
  `
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello/:id',
      name: 'Hello',
      component: Hello
    },
    { path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
      }, {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }]
    }
  ]
})

router.push('/settings/emails')

Vue.config.productionTip = false

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
})

Vue.component('child', {
  props: ['myMessage'],
  template: '<div>{{ myMessage }}</div>'
})

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
