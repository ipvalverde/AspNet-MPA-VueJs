let Vue = require('Vue');

new Vue({
    el: '#app',
    data: {},
    computed: {
        fullName: function () {

            if (this.FirstName) {
                return this.FirstName + (this.LastName ? ' ' + this.LastName : '');
            }
        }
    }
});