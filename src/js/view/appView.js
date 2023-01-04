import TodoItem from '../model/todoItem';
import TodoItems from '../collection/todoItems';
import TodoItemsView from './todoItemsView';

const viewOptions = {
    el: '#root',

    initialize: function () {
        this.render();
    },

    render: function () {
        const todoItems = new TodoItems([
            new TodoItem({
                description: 'Todo 1'
            }),
            new TodoItem({
                description: 'Todo 2'
            }),
            new TodoItem({
                description: 'Todo 3'
            })
        ]);

        const todoItemsView = new TodoItemsView({model: todoItems});

        this.$el.html(todoItemsView.render().$el);
    }
};

export default Backbone.View.extend(viewOptions);
