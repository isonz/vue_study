var app1 = new Vue({ 
    el: '#app-1',
});


Vue.component('google-map', {
    provide: function () {
      return {
        getMap: this.getMap
      }
    },
    data: function () {
        return {
          map: null
      }
    },
    mounted: function () {
        this.map = new google.maps.Map(this.$el, { 
          center: { lat: 0, lng: 0 },
        zoom: 1
      })
    },
    methods: {
      getMap: function (found) {
        var vm = this
        function checkForMap () {
          if (vm.map) {
            found(vm.map)
          } else {
            setTimeout(checkForMap, 50)
          }
        }
        checkForMap()
      }
    },
      template: '<div class="map"><slot></slot></div>'
});
Vue.component('google-map-marker', {
    inject: ['getMap'],
    props: ['places'],
    created: function () {
      var vm = this
      vm.getMap(function (map) {
        vm.places.forEach(function (place) {
          new google.maps.Marker({
            position: place.position,
            map: map
          })
        })
      })
    },
    render (h) {
      return null
    }
});
var app2 = new Vue({ 
    el: '#app-2',
    data: {
        vueConfCities: [
            {
                name: 'Wrocław',
                position: {
                    lat: 51.107885,
                    lng: 17.038538
                }
            },
            {
                name: 'New Orleans',
                position: {
                    lat: 29.951066,
                    lng: -90.071532
                }
            }
        ]
    }
});

var app3 = new Vue({
	el: '#app-3',
    data: {
        date: null
    },
    mounted: function () {
        this.attachDatepicker('startDateInput')
        this.attachDatepicker('endDateInput')
    },
    methods: {
        attachDatepicker: function (refName) {
          var picker = new Pikaday({
            field: this.$refs[refName],
            format: 'YYYY-MM-DD'
          });
          this.$once('hook:beforeDestroy', function () {
            picker.destroy()
          });
        }
    }
});

