import _ from 'underscore';
import tpl from '../../template/todoItem.html';

export default Backbone.View.extend({
    template: _.template(tpl),

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

        this.$el.attr('id', this.model.cid);

        const templateSettings = this.template({
            checked: checked,
            title: this.model.get('title')
        });

        this.$el.html(templateSettings);

        return this;
    }
});
