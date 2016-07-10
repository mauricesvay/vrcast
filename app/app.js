var App = Backbone.Router.extend({

    currentView: null,

    routes: {
        "": "home",
        "room/:room": "room",
        "vr/:room": "vr"
    },

    renderView: function( view ) {
        if (this.currentView !== null) {
            console.log('Previous view unmounted');
            this.currentView.remove();
        }
        this.currentView = view;
        this.currentView.render();
        $('.app').append(this.currentView.el);
    },

    home: function() {
        var homeView = new HomeView();
        this.renderView(homeView);
    },

    room: function(room) {
        var roomView = new RoomView({
            room: room
        });
        this.renderView(roomView);
    },

    vr: function(room) {
        var vrView = new VrView({
            room: room
        });
        this.renderView(vrView);
    }

});

function getTemplate(name) {
    var scripts = $('script[data-name="' + name + '"]');
    if (scripts.length) {
        return scripts.html();
    } else {
        return false;
    }
}

var sketchfabSDK = new SketchfabSDK();
var app = new App();
Backbone.history.start();
