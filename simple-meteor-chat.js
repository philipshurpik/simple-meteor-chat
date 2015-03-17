if (Meteor.isClient) {
    Template.body.helpers({
        rooms: [
            { text: "Room 1" },
            { text: "Room 2" },
            { text: "Room 3" }
        ]
    });
}