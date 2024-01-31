import { ERROR } from "../values/consts.js";
import {commands} from "./command/commands.js"


export function handleCommandLine(commandLine) {

  const command = commandLine.split(' ',1);

  if (command in commands) {
    const param = commandLine.slice(command[0].length)
    commands[command](param);
  }
   else console.log(ERROR.INPUT)
}