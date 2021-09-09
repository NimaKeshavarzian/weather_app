// App
import Vue from 'vue'
import App from './App.vue'

// events
export const eventBus = new Vue();

// Render
new Vue({
    el: '#app',
    render: h => h(App)
})