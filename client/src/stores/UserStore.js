import { EventEmitter } from "events";

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      id: null,
      email: null,
      token: null
    }
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(id, email, token) {
    this.user.id = id;
    this.user.email = email;
    this.user.token = token;
    return this.user;
  }

  getUser() {
    return this.user;
  }
}

const userStore = new UserStore;

export default userStore;