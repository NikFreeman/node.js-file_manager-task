import { extractUsername } from "./extractUsername.js";
import store from "../values/store.js";

export function initApp(){
  store.username = extractUsername();
  store.currently_dir = process.env.HOME;
}