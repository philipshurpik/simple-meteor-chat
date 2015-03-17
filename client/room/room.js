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
   }
});