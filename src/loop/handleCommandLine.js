import { ERROR } from "../values/consts.js";
import { CustomError } from "../values/errors.js";
import {commands} from "./command/commands.js"


export async function handleCommandLine(commandLine) {

  const command = commandLine.split(' ',1);

  if (command in commands) {
    const param = commandLine.slice(command[0].length).trim();
    try {
    await commands[command](param);
    }
    catch (e){ 
      if (e instanceof CustomError)
        console.log(e.message);
      else
        throw e;
    }     
  }
   else throw new CustomError(ERROR.INPUT)
}