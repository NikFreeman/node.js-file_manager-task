import { currentDir } from '../../helpers/currentDir.js';
import { readdir } from 'node:fs/promises';
import { TYPE_DIRECTORY,TYPE_FILE } from '../../values/consts.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';


export async function ls(){
  try {
  const result =[];
  const dirContent = await readdir(currentDir(),{withFileTypes:true});
  dirContent
    .filter((item)=>item.isDirectory())
    .sort()
    .forEach((item)=> result.push({name:item.name, type: TYPE_DIRECTORY}));  
  dirContent
    .filter((item)=> item.isFile())
    .sort()
    .forEach((item)=> result.push({name:item.name, type: TYPE_FILE}));;
  console.table(result);  
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }
}
