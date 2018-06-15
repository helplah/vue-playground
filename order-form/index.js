Vue.filter("currency", function(value) {
  return "$" + value.toFixed(2);
})

const app = new Vue({
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
      { text: "testing",
        price: 220,
        active: false
      }
    ],
    methods: {
      toggleActive: function(svc) {
        svc.active = !svc.active;
      },
      total: function() {
        if svc
      }
    }
  }
});
