(function(){
  'use strict'

  Vue.component('launcherbutton-component', {
    props: ['callback', 'callbackattrs'],
    template: '<button v-on:click="executeCallback">do something</button>',
    methods: {
      executeCallback: executeCallback
    }
  });

  function executeCallback() {
    console.log('the same component ');
    this.callback.apply(null, this.callbackattrs);
  }
})()


