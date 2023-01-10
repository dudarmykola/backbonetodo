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
        'change #check': 'onCheckboxChange',
        'click #delete': 'onClickDelete'
    },

    onCheckboxChange: function(e) {
        e.preventDefault();

        this.model.toggle();
        this.model.save();
    },

    onClickDelete: function() {
        this.model.destroy();
    },

    render: function() {
        const checked = this.model.get('completed') ? 'checked' : '';
        const checkbox = $('<input>',
            {
                type:'checkbox',
                id: 'check',
                checked: !!checked
            });
        const deleteButton = $('<button>',
            {
                class: 'delete',
                id: 'delete',
                text: 'Delete'
            });

        this.$el.attr('id', this.model.cid);

        this.$el.html('')
            .append($('<label>', { class: `label ${checked}` })
                .html(`<span class="title">${this.model.escape('title')}</span>`)
                .prepend(checkbox)
                .append(deleteButton)
            );

        return this;
    }
});
