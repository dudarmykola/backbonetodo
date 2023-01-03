// Import the Backbone module and its dependencies
const Backbone = require('backbone');

// Import our view
const AppView = require('./js/appView');
require('./css/style.css')
// Execute after the DOM has loaded
Backbone.$(function () {
    // Create an instance of our view
    new AppView();
});