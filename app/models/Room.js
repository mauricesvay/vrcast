var RoomModel = Backbone.Model.extend({
    defaults: {
        'id':  '',
        'currentModel': '',
        // 'clients': []
    },

    initialize: function(options) {

        if (!options || !options.id) {
            throw new Error("Room is missing id");
        }

        this.initializeFirebase({
            onSuccess: function() {
                this.fetch();
            }.bind(this)
        });
    },

    initializeFirebase: function(params) {
        this.snapshot = {};

        var id = this.get('id');
        var roomRef = 'rooms/' + id;
        firebase.database().ref(roomRef).on('value', function(snapshot) {
            this.snapshot = snapshot.val();
            if (params.onSuccess) {
                params.onSuccess();
            }
        }.bind(this));
    },

    sync: function(method, model, options) {
        switch (method) {
            case 'read':
                if (this.snapshot) {
                    this.onReceivedData();
                }
                break;
            case 'update':
                this.saveToFirebase();
                break;
        }
    },

    onReceivedData: function( data ) {
        console.log('Received data', this.snapshot);
        this.set(this.snapshot);
    },

    saveToFirebase: function() {
        var id = this.get('id');
        var roomRef = 'rooms/' + id;
        var roomData = this.toJSON();
        console.log('Saving ' + roomRef, roomData);
        firebase.database().ref(roomRef).set(roomData);

        return this;
    }
});
