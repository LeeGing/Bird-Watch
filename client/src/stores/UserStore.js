import { EventEmitter } from "events";

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      email: null,
      token: null
    }
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(email, token) {
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