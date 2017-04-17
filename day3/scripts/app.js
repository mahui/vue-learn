window.onload = function () {
  var app = new Vue({
    el:"#app",
    data:{
      domains:''
    },
    methods: {
      getDomains: function(){
        this.$http.get('static/data.json').then(function(response){
          alert(JSON.stringify(response));
          this.$set('domains',response.data.domains)
        }).catch(function(response){
          console.log(response)
        })
      }
    }

  })
  app.getDomains();
}
