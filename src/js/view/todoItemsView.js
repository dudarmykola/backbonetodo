import TodoItemView from './todoItemView';
import TodoItem from 'js/model/todoItem';

export default Backbone.View.extend({
    tagName: 'ul',

    className: 'todo__list',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.model.on('add', this.onAddTodoItem, this);
    },

    events: {
        'submit': 'onClickAdd'
    },

    render: function() {
        const self = this;

        const form = $("<form/>",
            {
                action:'#',
                class: 'todo__form'
            }
        );

        form.append(
            $("<input>",
                { type:'text',
                    autofocus: true,
                    placeholder:'Add TODO item',
                    name:'new',
                    id: 'newTodoItem'
                }
            )
        );

        form.append(
            $("<input>",
                { type:'submit',
                    value:'Add'
                }
            )
        );

        this.$el.append(form);

        this.model.each(function(todoItem) {
            const view = new TodoItemView({ model: todoItem });

            self.$el.append(view.render().$el);
        })

        return this;
    },

    onClickAdd: function(e) {
        e.preventDefault();

        const $textInput = this.$('#newTodoItem');
        const newValue = $textInput.val();

        if (newValue) {
            const todoItem = new TodoItem({ description: $textInput.val() });

            this.model.add(todoItem);

            $textInput.val('')
        }
    },

    onAddTodoItem: function(todoItem) {
        const newTodoItemView = new TodoItemView({model: todoItem});

        this.$el.append(newTodoItemView.render().$el);
    }
});
