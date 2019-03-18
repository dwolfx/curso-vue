new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
      alerta() {
        alert('teste')
      },
      valorInput (e){
        this.valor = e.target.value
      }
    }
})

