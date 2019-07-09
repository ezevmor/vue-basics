(function(){
  'use strict'

  var firstApp = new Vue({
    el: '#firstApp',
    data: {
      appTitle: 'my first vue app!',
    },
    methods: {
      callback: function() {
        callback.apply(this);
      }
    }
  });

  function callback() {
    console.log('i do something: ' + this.appTitle);
  }
})()

