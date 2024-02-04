import {stdin, stdout} from "node:process";
import { createInterface } from "node:readline/promises";
import { showByeBye } from "./showByeBye.js";
import { showCurrentDir } from "./showCurrentDir.js";
import { handleCommandLine } from "./handleCommandLine.js";


function exitApp(){
  showByeBye();
  process.exit(0)
}

export async function mainLoop() {
  try {
    const rl=createInterface(stdin,stdout);
    stdout.write('> ')
    rl.on('line', async (chunk)=> {
      if (chunk == '.exit') {
        exitApp();
      }
      else {
        if (chunk !='')
        await handleCommandLine(chunk);
        showCurrentDir();
        stdout.write('> ');
      }
    })
    rl.on('close',()=>{
      exitApp();
    })
  }
  catch (e){ 
    if (e instanceof CustomError)
      console.log(e.message);
    else
      throw e;
  }     
}
