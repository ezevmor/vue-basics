(function(){
  'use strict'

  var firstApp = new Vue({
    el: '#firstApp',
    data: {
      appTitle: 'my first vue app!',
    },
    methods: {
      callback: callback
    }
  });

  function callback(title) {
    console.log('i do something: ' + title);
  }
})()

