new Vue({
  el: '#app',
  data: {
    running: false,
    playerLife: 30,
    monsterLife: 10,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    restart() {
      this.playerLife = 100
      this.monsterLife = 100
      this.running = true
    },
    attack() {
      this.playerLife = this.playerLife - Math.random()
      this.monsterLife = this.monsterLife - Math.random()
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
    }
  },
  watch: {
    checkGame() {
      if (this.playerLife == 0 || this.monsterLife == 0) {
        this.running = false
      }
    }
  },
})