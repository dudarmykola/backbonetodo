import Form from 'js/model/form';
import TodoItems from 'js/collection/todoItems';
import TodoItemsView from './todoItemsView';
import FormView from './formView';

const viewOptions = {
    el: '#root',

    initialize: function (options) {
        this.globalEvents = options.globalEvents;

        this.render();
    },

    render: function () {
        const todoItems = new TodoItems();
        const formModel = new Form();

        todoItems.fetch();

        const todoItemsView = new TodoItemsView({
            model: todoItems,
            globalEvents: this.globalEvents
        });
        const formView = new FormView({
            model: formModel,
            globalEvents: this.globalEvents
        });

        this.$el.append($('<div>', {
            class: 'todo__wrapper'
        }).append(formView.render().$el).append(todoItemsView.render().$el));
    }
};

export default Backbone.View.extend(viewOptions);
