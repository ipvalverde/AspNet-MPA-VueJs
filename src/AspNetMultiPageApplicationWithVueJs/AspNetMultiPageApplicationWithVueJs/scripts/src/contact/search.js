let Vue = require('Vue');
let VueResource = require('vue-resource');

Vue.use(VueResource);

new Vue({
    el: '#app',
    data: {},
    methods: {
        remove: function(id) {
            // GET /someUrl
            this.$http.get('Contact/Delete/'+id).then((response) => {
                // success callback
            }, (response) => {
                // error callback
            });
        }
    }
});