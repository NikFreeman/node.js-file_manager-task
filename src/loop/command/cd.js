
import { stat } from 'fs/promises';
import { InvalidOperationError } from '../../values/errors.js';
import { store } from '../../values/store.js';
import { buildPath } from '../../helpers/buildPath.js';


export async function cd(params){
  const pathToDir = buildPath(params);  
  try {
    try {
      const result = (await stat(pathToDir)).isDirectory();
      if (result) {
        store.currently_dir.length = 0;
        store.currently_dir = pathToDir.split(store.sep);
   } 
   else {
    throw new InvalidOperationError();
   }
  }
  catch {
    throw new InvalidOperationError();
  }
}
catch (e){
  if (e instanceof InvalidOperationError)
    console.log(e.message);
}
}