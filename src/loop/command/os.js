import { ERROR, amountOfCPU} from "../../values/consts.js";
import {EOL, cpus,homedir,userInfo,arch} from 'os'


export function os(params){
  switch (params) {
    case "--EOL" :
      console.log(EOL);
      break;
    case "--cpus":
      const cpu = cpus();
      console.log(amountOfCPU+cpu.length);
      cpu.forEach((item) =>{
        console.log(`model: ${item.model} speed: ${item.speed}`);
      })
      break;
    case "--homedir":
      console.log(homedir());      
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
console.log(ERROR.OPERATION);
  } 
}