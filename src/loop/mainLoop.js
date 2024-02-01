import {stdin, stdout} from "node:process";
import { createInterface } from "node:readline/promises";
import { showByeBye } from "./showByeBye.js";
import { showCurrentDir } from "./showCurrentDir.js";
import { handleCommandLine } from "./handleCommandLine.js";


function exitApp(){
  showByeBye();
  process.exit(0)
}

export function mainLoop() {
  try {
    const rl=createInterface(stdin,stdout);
    stdout.write('> ')
    rl.on('line', (chunk)=> {
      if (chunk == '.exit') {
        exitApp();
      }
      else {
        if (chunk !='')
        handleCommandLine(chunk);
        showCurrentDir();
        stdout.write('> ');
      }
    })
    rl.on('close',()=>{
      exitApp();
    })
  }
  catch (e){
    console.error(e.message);
  }
}
