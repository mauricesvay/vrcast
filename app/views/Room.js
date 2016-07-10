var RoomView = Backbone.View.extend({
    className: 'room',

    events: {
        'submit form': 'onFormSubmit'
    },

    initialize: function(options) {
        var roomId = options.room;
        this.roomModel = new RoomModel({
            id: roomId
        });
        this.state = new Backbone.Model({
            shortUrl: ''
        });

        this.listenTo(this.roomModel, 'change:currentModel', this.onCurrentModelUpdate.bind(this));
        this.listenTo(this.state, 'change:shortUrl', this.onShortUrlUpdate.bind(this));
        this.initializeShortUrl();
    },

    initializeShortUrl: function() {
        var currentUrl = window.location.href.replace('#room/','#vr/');
        this.getShortUrl(currentUrl, '649dbc9b58588e829253b02406d539280823356b', 'mauricesvay', 'R_d94e9a770bfb4c33b41fff2b0ac3397f', function(data){
            if (data.status_code === 200) {
                this.state.set('shortUrl', data.data.url);
            }
        }.bind(this));
    },

    onShortUrlUpdate: function() {
        var $shortUrl = this.$el.find('.shortUrl');
        var url = this.state.get('shortUrl');
        console.log(url, this.state.toJSON());
        $shortUrl.attr('href', url).text(url);
    },

    render: function() {
        var tpl = _.template(getTemplate('room.html'));
        this.$el.html(tpl(this.roomModel.toJSON()));
        return this;
    },

    renderCurrentModel: function() {
        var $currentModel = this.$el.find('.currentModel');
        var tpl = _.template(getTemplate('model.html'));

        if (this.currentModel) {
            $currentModel.html(tpl({
                model: this.currentModel
            }));
        }
    },

    onFormSubmit: function( e ) {
        e.preventDefault();
        var uid = $.trim(this.$el.find('input[name="modeluid"]').val());

        if (uid === '') {
            return;
        }

        this.roomModel.set('currentModel', uid).save();
    },

    onCurrentModelUpdate: function() {
        var uid = this.roomModel.get('currentModel');
        sketchfabSDK.Model.byId(uid).then(
            function onSuccess( model ) {
                this.currentModel = model;
                this.currentModel.preview = this.getThumbnail(model, 320);
                this.renderCurrentModel();
            }.bind(this),
            function onError(error) {
                console.log(error);
            }.bind(this)
        );
    },

    getShortUrl: function(longUrl, accessToken, login, apiKey, callback) {
        console.log(longUrl);
        $.getJSON({
            url: 'https://api-ssl.bitly.com/v3/shorten?callback=?',
            data: {
                'format': 'json',
                'domain': 'j.mp',
                'access_token': accessToken,
                'longUrl': longUrl,
                'apiKey': apiKey
            }
        }).then(callback);
    },

    getThumbnail: function(model, size) {
        var images = _.sortBy(model.thumbnails.images, 'width');
        var thumb;
        for (var j=0; j<images.length; j++) {
            thumb = images[j].url;
            if ( images[j].width >= 32 ) {
                break;
            }
        }
        return thumb;
    }

});
