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