import {stat} from 'fs/promises';
import { CustomError } from '../values/errors.js';
import { ERROR } from '../values/consts.js';


export async function isDirectory(pathToDirectory){
  try {
    return (await stat(pathToDirectory)).isDirectory();
  }
  catch {    
    throw new CustomError(ERROR.OPERATION);
  }
}