import {open} from  'fs/promises';
import { InvalidOperationError } from '../../values/errors.js';
import {join} from 'path';
import { currentDir } from '../../helpers/currentDir.js';
import {checkFilename} from '../../helpers/checkFilename.js'


export async function add(params){
  
  const tempFilename = params;
  try {
    if(checkFilename(tempFilename)) {
      try {
        const fileToCreate = await open(join(currentDir(),tempFilename),"w");
        fileToCreate.close();
      }
      catch {
        throw new InvalidOperationError();
      }
    }
    else {
      throw new InvalidOperationError();
    }
  }
  catch (e){
    if (e instanceof InvalidOperationError)
    console.log(e.message);
  }
}