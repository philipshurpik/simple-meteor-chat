Rooms = new Mongo.Collection("rooms");

if (Meteor.isClient) {
    Template.body.helpers({
        rooms: function () {
            return Rooms.find({});
        }
    });

    Template.body.events({
        'click .header-new-room': function() {
            Session.set('isCreateRoomVisible', true);
        }
    });

    Template.createRoom.helpers({
        isCreateRoomVisible: function() {
            return Session.get('isCreateRoomVisible') && 'create-room-visible';
        }
    });
    Template.createRoom.events({
        'submit .new-room': function(event) {
            var text = event.target.text.value;
            Rooms.insert({
                text: text,
                createdAt: new Date()
            });
            // Clear form
            event.target.text.value = "";
            Session.set('isCreateRoomVisible', false);
            // Prevent default form submit
            return false;
        }
    });


    setTimeout(function() {
        if (Rooms.find({}).count() === 0) {
            Rooms.insert({text: "Demo room!"});
        }
    }, 1000);
}