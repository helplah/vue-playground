new Vue({
  el: '#app',
  data: {
    // an array of objects
    services: [
			{ text: "Web Development",
        price: 300,
        active: false
      },
      { text: "Design",
        price: 400,
        active: false
      },
			{ text: "Integration",
        price: 250,
        active: false
      },
      { text: "Training",
        price: 220,
        active: false
      }
    ],
    total: 0
  },
  methods: {
    toggleActive: function(svc) {
      console.log(svc);
      svc.active = !svc.active;
      this.total += svc.price;
    }
  },
  filters: {
    currency: function(value) {
      return "$" + value.toFixed(2);
    }
  }
});
