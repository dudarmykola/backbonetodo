export default Backbone.View.extend({
    tagName: 'li',

    className: 'todo__list__item',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }
    },

    render: function() {
        const checkbox = $('<input>',
            { type:'checkbox'}
        )

        this.$el
            .append($('<label>', { class: 'label' })
                .html(`<span class="title">${this.model.escape('description')}</span>`)
                .prepend(checkbox));

        return this;
    }
});
