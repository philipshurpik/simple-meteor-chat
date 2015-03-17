Template.roomsList.helpers({
    rooms: function () {
        return Rooms.find({});
    }
});

Template.roomsList.events({
    'click .header-new-room': function() {
        Session.set('isCreateRoomVisible', true);
    }
});