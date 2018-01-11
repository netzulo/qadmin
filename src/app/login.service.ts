import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AppModule } from './app.module';

@Injectable()
export class LoginService {

  private isAuthtenticated;
  private user: User;

  constructor() {
    this.isAuthtenticated = false;
  }

  getUser() {
    return this.user;
  }

  setIsAuthtenticated() {
    this.isAuthtenticated = true;
  }

  getIsAuthtenticated() {
    return this.isAuthtenticated;
  }

  singIn(user_name: String, user_pass: String) {
    // TODO: improve this login auth with REST API call
    const admin_user = environment.admins.forEach((admin) => {
      if (user_name === admin.name && user_pass === admin.pass) {
        this.user = new User(
          admin.id,
          admin.name,
          admin.pass
        );
        this.setIsAuthtenticated();
      }
    });
    return this.getIsAuthtenticated();
  }

  singOut() {
    if (!this.isAuthtenticated) {
      console.log('Trying to logout when isAuthenticated its false');
    }
    this.isAuthtenticated = false;
    this.user = undefined;
  }
}

export class User {
  id: Number;
  name: string;
  pass: string;

  constructor(id: Number, name: string, pass: string) {
    this.id = id;
    this.name = name;
    this.pass = pass;
  }
}
