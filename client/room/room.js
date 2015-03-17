Template.room.helpers({
    isRoomVisible: function() {
        return Session.get('isRoomVisible') && 'room-visible';
    },
    name: function() {
        var activeRoom = Session.get('activeRoom');
        return activeRoom.name;
    },
    roomMessages: function () {
        var activeRoom = Session.get('activeRoom');
        return Messages.find({
            roomId: activeRoom._id
        });
    }
});

Template.room.events({
    'click .header-close-room': function() {
       Session.set('isRoomVisible', false);
    },
    'submit .room-new-message': function(event) {
        var activeRoom = Session.get('activeRoom');
        var text = event.target.text.value;
        if (text.trim() !== "") {
            Messages.insert({
                text: text,
                createdAt: new Date(),
                roomId: activeRoom._id,
                author: Meteor.userId(),
                username: Meteor.user() ? Meteor.user().username : ""
            });
        }
        event.target.text.value = "";
        return false;
    }
});