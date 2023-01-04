const viewOptions = {
    el: '#root',

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.text('Hello world!!!');
    }
};

export default Backbone.View.extend(viewOptions);
