// Import the Backbone module and its dependencies
const Backbone = require('backbone');

// Declare our options we'll use to extend the base view
const viewOptions = {
    el: '#container',

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.text('Hello world!!!');
    }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);