var HomeView = Backbone.View.extend({
    className: 'room',

    events: {
        'submit form': 'onFormSubmit'
    },

    initialize: function() {
        this.suggestedRoomName = generateRoomName();
    },

    render: function() {
        var tpl = _.template(getTemplate('home.html'));
        this.$el.html(tpl({
            suggestedRoomName: this.suggestedRoomName
        }));
        return this;
    },

    onFormSubmit: function(e) {
        e.preventDefault();
        var room = $.trim(this.$el.find('input[name="room"]').val());
        if (room !== '') {
            app.navigate('room/' + room, {trigger: true});
        }
    }
});
