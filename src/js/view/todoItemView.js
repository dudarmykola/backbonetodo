export default Backbone.View.extend({
    tagName: 'li',

    className: 'todo__list__item',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.model.on('change', this.render, this);
    },

    events: {
        'change #check': 'onCheckboxChange'
    },

    onCheckboxChange: function(e) {
        e.preventDefault();

        this.model.toggle();
    },

    render: function() {
        const checked = this.model.get('isCompleted') ? 'checked' : '';
        const checkbox = $('<input>',
            {
                type:'checkbox',
                id: 'check',
                checked: !!checked
            }
        )

        this.$el.html('')
            .append($('<label>', { class: `label ${checked}` })
                .html(`<span class="title">${this.model.escape('description')}</span>`)
                .prepend(checkbox));

        return this;
    }
});
