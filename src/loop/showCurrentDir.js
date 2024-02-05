import { CURRENT } from "../values/consts.js"
import { currentDir } from "../helpers/currentDir.js";


export function showCurrentDir(){
  console.log(CURRENT + currentDir());  
}