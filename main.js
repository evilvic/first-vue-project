const app = new Vue ({
  el: '#app',
  data: {
    title: 'First Vue Project',
    fruits: [
      { name: 'Watermelon', quantity: 1 },
      { name: 'Pinaple', quantity: 2 },
      { name: 'Orange', quantity: 0 },
    ],
    fruit: '',
    total: 0
  },
  methods: {
    addFruit () {
      this.fruits.push({
        name: this.fruit,
        quantity: 0
      })
      this.fruit = ''
    }
  },
  computed: {
    calculateTotal () {
      this.total = 0
      for (fruit of this.fruits) {
        this.total += fruit.quantity
      }
      return this.total
    }
  }
})