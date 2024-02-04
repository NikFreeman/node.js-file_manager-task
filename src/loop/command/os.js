import { ERROR, AMOUNT_OF_CPU} from "../../values/consts.js";
import {EOL, cpus,homedir,userInfo,arch} from 'os'
import { CustomError } from "../../values/errors.js";


export function os(params){ 
  if (params !=''){
  switch (params) {
    case "--EOL" :
      console.log(EOL);
      break;
    case "--cpus":
      const cpu = cpus();
      console.log(AMOUNT_OF_CPU+cpu.length);
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
  throw new CustomError(ERROR.OPERATION)
  } 
}
else {
  throw new CustomError(ERROR.INPUT);
}
}