import store from "../values/store.js"
import { CURRENT } from "../values/consts.js"


export function showCurrentDir(){
  console.log(CURRENT + store.currently_dir.join(store.sep));  
}