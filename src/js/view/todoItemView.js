export default Backbone.View.extend({
    tagName: 'li',

    className: 'todo__list__item',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }
    },

    render: function() {
        this.$el.html(this.model.get('description'));

        return this;
    }
});
