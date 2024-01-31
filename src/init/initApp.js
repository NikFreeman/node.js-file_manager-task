import { extractUsername } from "./extractUsername.js";
import store from "../values/store.js";
import {homedir} from 'os';
import { sep } from "path";
import {WELCOME} from '../values/consts.js'

export function initApp(){
  store.username = extractUsername();
  store.sep = sep;
  store.currently_dir = homedir().split(store.sep);
  console.log(WELCOME.replace("Username",store.username))
}