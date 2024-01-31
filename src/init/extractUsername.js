import { ARG_USERNAME, ERROR } from "../values/consts.js";


export function extractUsername(){
  try {  
    const argsApp = process.argv.slice(2).filter((arg) => arg.startsWith(ARG_USERNAME)); 
    
    if (argsApp.length == 0) 
      throw new Error(ERROR.NO_ARG);
    else if (argsApp.length >= 2) 
            throw new Error(ERROR.MANY_ARGS);
          else return argsApp[0].slice(ARG_USERNAME.length);
  }
  catch (e) {
    if (e.name !='Error')
      {throw e}
    else {
      console.error(`${e.name}: ${e.message}`);
      process.exit(1);
  }
}
}