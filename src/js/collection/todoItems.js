import TodoItem from 'js/model/todoItem';

export default Backbone.Collection.extend({
    model: TodoItem,

    url: 'https://jsonplaceholder.typicode.com/todos'
});
