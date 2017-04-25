import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {

  }

  set = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  get = (key: string) => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  setToken = (token: string) => {
    this.set('token', token);
  };

  getToken = () => {
    return this.get('token');
  };

}
