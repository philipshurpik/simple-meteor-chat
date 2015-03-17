Rooms = new Mongo.Collection("rooms");

if (Meteor.isClient) {
    Template.body.helpers({
        rooms: function () {
            return Rooms.find({});
        }
    });
    setTimeout(function() {
        if (Rooms.find({}).count() === 0) {
            Rooms.insert({text: "Demo room!"});
        }
    }, 1000);
}