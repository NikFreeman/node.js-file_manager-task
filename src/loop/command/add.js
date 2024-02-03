import {open} from  'fs/promises';
import { ERROR } from '../../values/consts.js';
import {join} from 'path';
import { currentDir } from '../../helpers/currentDir.js';
import {checkFilename} from '../../helpers/checkFilename.js'


export async function add(params){
  
 
  if(checkFilename(params)) {
    try {
    const fileToCreate = await open(join(currentDir(),params),"w");
    fileToCreate.close();
    }
    catch {
      console.log(ERROR.OPERATION);
    }
  }
  else {
    console.log(ERROR.OPERATION)
}
}