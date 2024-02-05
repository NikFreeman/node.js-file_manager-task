import {stat} from 'fs/promises';
import { CustomError } from '../values/errors.js';
import { ERROR } from '../values/consts.js';


export async function isFile(pathToFile){
  try {
    return (await stat(pathToFile)).isFile();
  }
  catch {    
    throw new CustomError(ERROR.OPERATION);
  }
}