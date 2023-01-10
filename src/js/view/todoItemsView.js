import TodoItemView from './todoItemView';

export default Backbone.View.extend({
    tagName: 'ul',

    className: 'todo__list',

    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.globalEvents = options.globalEvents;
        this.globalEvents.on('todo:add', this.onAddFromInput, this);
        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onDeleteTodoItem, this);
    },

    onAddFromInput: function(todoItem) {
        this.model.create(todoItem);

        // is the same as:
        // todoItem.save()
        // this.model.add(todoItem);
    },

    onAddTodoItem: function(todoItem) {
        const newTodoItemView = new TodoItemView({
                model: todoItem
            });

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
