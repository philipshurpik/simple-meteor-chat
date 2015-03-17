Template.roomItem.events({
    'click .room-item-delete': function(event) {
        Rooms.remove(this._id);
        event.stopPropagation();
        return false;
    },
    'click .roomItem': function() {
        Session.set('activeRoom', this);
        Session.set('isRoomVisible', true);
    }
});