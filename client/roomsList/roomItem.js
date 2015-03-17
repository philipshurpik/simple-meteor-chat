Template.roomItem.events({
    'click .room-item-delete': function() {
        Rooms.remove(this._id);
    }
});