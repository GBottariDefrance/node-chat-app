class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        this.users.push({ id, name, room });
        return this;
    }

    removeUser(id) {
        let user = this.getUser(id);
        this.users = this.users.filter((user) => user.id !== id);
        return user;
    }

    getUser(id) {
        return this.users.find((user) => user.id === id);
    }

    getUsersList(room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {
    Users
};