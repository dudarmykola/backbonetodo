import AppView from './js/view/appView';
import './css/style.css';

$(() => {
    Backbone.$(function () {
        // Create an instance of our view
        new AppView();
    });
})