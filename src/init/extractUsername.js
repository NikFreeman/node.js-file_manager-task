import { ARG_USERNAME } from "../values/consts.js";
import {CustomError } from '../values/errors.js'
import { ERROR } from "../values/consts.js";


export function extractUsername(){
  try {  
    const argsApp = process.argv.slice(2).filter((arg) => arg.startsWith(ARG_USERNAME)); 
    
    if (argsApp.length == 0) 
      throw new CustomError(ERROR.NO_ARG);
    else if (argsApp.length >= 2) 
           throw new CustomError(ERROR.MANY_ARGS);
         else return argsApp[0].slice(ARG_USERNAME.length);
  }
  catch (e) {
    if (e instanceof CustomError)
      {console.error(e.message);
      process.exit(1);
        }
    else {
      throw e
  }
}
}