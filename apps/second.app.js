(function(){
  'use strict'

  var secondApp = new Vue({
    el: '#secondApp',
    data: {
      appTitle: 'my second vue app!',
      firstWord: 'hi ',
      secondWord: 'vue!'
    },
    methods: {
      callback: callback
    }
  });

  function callback(str1, str2) {
    console.log('i do something different: ' + str1 + str2);
  }
})()


