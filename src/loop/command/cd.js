
import { stat } from 'fs/promises';
import { ERROR } from '../../values/consts.js';
import store from '../../values/store.js';
import { buildPath } from '../../helpers/buildPath.js';


export async function cd(params){
  const pathToDir = buildPath(params);  
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