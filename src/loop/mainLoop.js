import {stdin, stdout} from "node:process";
import { createInterface } from "node:readline/promises";
import { showByeBye } from "./showByeBye.js";
import { showCurrentDir } from "./showCurrentDir.js";

export function mainLoop() {
  try {
    const rl=createInterface(stdin,stdout);
    stdout.write('> ')
    rl.on('line', (chunk)=> {
      if (chunk == '.exit') {
        showByeBye();
        process.exit(0)}
      else {
        console.log('process -->');
        showCurrentDir();
        stdout.write('> ')
      }
    })
    rl.on('close',()=>{
      showByeBye();
      process.exit(0)
    })
  }
  catch (e){
    console.error(e.message);
  }
}
