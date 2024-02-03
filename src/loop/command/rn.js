import {stat,rename} from 'fs/promises';
import { join, parse } from 'path';
import { buildPath } from '../../helpers/buildPath.js';
import { removeQuotes } from '../../helpers/removeQuotes.js';
import { checkFilename } from '../../helpers/checkFilename.js';
import { ERROR } from '../../values/consts.js';

export async function rn(params){
  let oldPath;
  let newFileName;
  const tempParams = params.trim();
  const lastChar = tempParams.at(params.length-1)
  const regEx =/['"]/
  if (regEx.test(lastChar)) {
    oldPath = removeQuotes(tempParams.slice(0,(tempParams.lastIndexOf(lastChar,-1))-2))
    newFileName = removeQuotes(tempParams.slice(tempParams.lastIndexOf(lastChar,-1)))
  }
  else {
    oldPath = removeQuotes(tempParams.slice(0,(tempParams.lastIndexOf(' '))))
    newFileName = removeQuotes(tempParams.slice(tempParams.lastIndexOf(' ')+1))
}
console.log(`!${oldPath}!${newFileName}!`)
console.log(buildPath(oldPath))
const pathToFile = buildPath(oldPath); 

  try {
  const result = (await stat(pathToFile)).isFile();
  if (result) {
   const dir = parse(pathToFile).dir;
   if (checkFilename(newFileName)) {
    await rename(pathToFile,join(dir,newFileName))
   } 
   else (console.log(ERROR.OPERATION))
  }
  }
  catch (e) {
    console.log(e.message)
    console.log(ERROR.OPERATION)
  }
}