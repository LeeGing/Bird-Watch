import { EventEmitter } from "events";

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      id: null,
      username: null,
      token: null
    }
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(id, username, token) {
    this.user.id = id;
    this.user.username = username;
    this.user.token = token;
    return this.user;
  }

  getUser() {
    return this.user;
  }
}

const userStore = new UserStore();

export default userStore;