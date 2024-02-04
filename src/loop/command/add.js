import {open} from  'fs/promises';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { join } from 'path';
import { currentDir } from '../../helpers/currentDir.js';
import {checkFilename} from '../../helpers/checkFilename.js'


export async function add(params){
  
  const tempFilename = params;
  if(checkFilename(tempFilename)) {
      try {
        const fileToCreate = await open(join(currentDir(),tempFilename),"w");
        fileToCreate.close();
      }
      catch {
        throw new CustomError(ERROR.OPERATION);
      }
    }
    else {
      throw new CustomError(ERROR.OPERATION);
    }    
}