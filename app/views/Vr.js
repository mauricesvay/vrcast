var VrView = Backbone.View.extend({
    className: 'vr',

    initialize: function(options) {
        var roomId = options.room;
        this.roomModel = new RoomModel({
            id: roomId
        });
        this.listenTo(this.roomModel, 'change:currentModel', this.onModelChange.bind(this));
    },

    render: function() {
        var tpl = _.template(getTemplate('vr.html'));
        this.$el.html(tpl());
        return this;
    },

    onModelChange: function() {
        console.log('onModelChange', this.roomModel);
        var $viewer = this.$el.find('.viewer');
        var currentModel = this.roomModel.get('currentModel');
        if (currentModel) {
            var url = this.getEmbedUrl(this.roomModel.get('currentModel'));
            console.log(url);
            $viewer.addClass('active');
            $viewer.attr('src', url);
        } else {
            $viewer.removeClass('active');
            $viewer.attr('src', 'about:blank');
        }
    },

    getEmbedUrl: function( uid ) {
        var tplUrl = 'http://sketchfab.com/models/{{UID}}/embed';
        var params = {
            'cardboard': 1,
            'autostart': 1,
            // 'ui_infos': 0,
            // 'ui_controls': 0
        }
        return tplUrl.replace('{{UID}}', uid) + '?' + $.param(params);
    }
});
