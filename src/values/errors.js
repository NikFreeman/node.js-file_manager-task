import { ERROR } from "./consts.js";

export class WrongUsernameError extends Error {
  constructor(message) {
    super(message); 
    this.name = "WrongUsernameError";     
  }
}

export class InvalidOperationError extends Error{
  constructor() {
    super(); 
    this.name = "InvalidOperationError"; 
    this.message = ERROR.OPERATION;
 }
}