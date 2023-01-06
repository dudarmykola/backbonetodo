import AppView from './js/view/appView';
import './css/style.css';
import _ from 'underscore';

const globalEvents = _.extend({}, Backbone.Events);

$(() => {
    Backbone.$(function () {
        new AppView({globalEvents: globalEvents});
    });
})