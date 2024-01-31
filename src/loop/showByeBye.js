import { BYEBYE } from "../values/consts.js";
import store from "../values/store.js";


export function showByeBye(){
  console.log(BYEBYE.replace('Username', store.username));
}