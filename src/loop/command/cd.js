
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { store } from '../../values/store.js';
import { buildPath } from '../../helpers/buildPath.js';
import { isDirectory } from '../../helpers/isDirectory.js';


export async function cd(params){
  const pathToDir = buildPath(params); 
  const result = await isDirectory(pathToDir); 
  if (!result) throw new CustomError(ERROR.OPERATION);

  store.currently_dir.length = 0;
  store.currently_dir = pathToDir.split(store.sep);  
}