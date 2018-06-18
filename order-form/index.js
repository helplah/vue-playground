new Vue({
  el: '#app',
  data: {
    // an array of objects
    services: [
			{ text: "Web Development",
        price: 300,
        active: true
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
    ]
  },
  methods: {
    toggleActive: function(svc) {
      svc.active = !svc.active;
    },
    total: function() {
      let total = 0;
      this.services.forEach(function(svc) {
        if (svc.active) {
          total += svc.price;
        }  
      })
      return total;
    }
  },
  filters: {
    currency: function(value) {
      return "$" + value.toFixed(2);
    }
  }
});
