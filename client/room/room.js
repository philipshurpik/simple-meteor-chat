Template.room.helpers({
    isRoomVisible: function() {
        return Session.get('isRoomVisible') && 'room-visible';
    },
    name: function() {
        var activeRoom = Session.get('activeRoom');
        return activeRoom.name;
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
                createdAt: new Date()
            });
        }
        event.target.text.value = "";
        Session.set('isRoomVisible', false);
        return false;
    }
});