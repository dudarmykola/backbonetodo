import TodoItemView from './todoItemView';

export default Backbone.View.extend({
    tagName: 'ul',

    className: 'todo__list',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.globalEvents = options.globalEvents;
        this.globalEvents.on('todo:add', this.onAddTodoItem, this);
        this.model.on('remove', this.onDeleteTodoItem, this);
    },

    onAddTodoItem: function(todoItem) {
        const newTodoItemView = new TodoItemView({
                model: todoItem
            });

        this.model.add(todoItem);
        this.$el.append(newTodoItemView.render().$el);
    },

    onDeleteTodoItem: function(model) {
        this.$('#' + model.cid).remove();
    },

    render: function() {
        const self = this;

        this.model.each(function(todoItem) {
            const view = new TodoItemView({ model: todoItem });

            self.$el.append(view.render().$el);
        })

        return this;
    }
});
