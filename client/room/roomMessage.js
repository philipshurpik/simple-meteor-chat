Template.roomMessage.helpers({
    createdAt: function () {
        return this.createdAt.toLocaleTimeString();
    },
    username: function() {
        return this.username || "Unknown";
    }
});