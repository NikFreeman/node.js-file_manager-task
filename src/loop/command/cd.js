import {parse, isAbsolute,normalize, sep} from 'path';
import { stat } from 'fs/promises';
import { ERROR } from '../../values/consts.js';
import store from '../../values/store.js';
import { currentDir } from '../../helpers/currentDir.js';

export async function cd(params){
  let tempPath;  
  if (isAbsolute(params.trim())) 
    tempPath = parse(params.trim())
  else
    tempPath=parse(normalize(`${currentDir()}${sep}${params.trim()}`));
  const pathToDir = (tempPath.base !='' && tempPath.root != tempPath.dir) ?
    `${tempPath.dir}${sep}${tempPath.base}`:
    (tempPath.base !='' && tempPath.root == tempPath.dir)?
    `${tempPath.dir}${tempPath.base}`:
    `${tempPath.dir}`;  
  try {
   const result = (await stat(pathToDir)).isDirectory();
   if (result) {
    store.currently_dir.length = 0;
    store.currently_dir = pathToDir.split(store.sep);
   } else {
    console.log(ERROR.OPERATION)
   }
  }
  catch {
    console.log(ERROR.OPERATION)
  }
}