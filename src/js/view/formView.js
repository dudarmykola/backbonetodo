import TodoItem from 'js/model/todoItem';
export default Backbone.View.extend({
    tagName: 'form',

    className: 'todo__form',

    initialize: function(options) {
        this.globalEvents = options.globalEvents;
    },

    events: {
        'submit': 'onClickAdd'
    },

    render: function() {
        this.$el.append(
            $('<input>',
                { type:'text',
                    autofocus: true,
                    placeholder:'Add TODO item',
                    name:'new',
                    id: 'newTodoItem'
                }
            )
        );

        this.$el.append(
            $('<input>',
                {
                    type:'submit',
                    value:'Add'
                }
            )
        );

        return this;
    },

    onClickAdd: function(e) {
        e.preventDefault();

        const input = this.$el.find('#newTodoItem');
        const inputValue = input.val();

        if (inputValue) {
            this.globalEvents.trigger('todo:add', new TodoItem({
                title: inputValue
            }));

            input.val('');
        }
    }
});
