import {stat,rename} from 'fs/promises';
import { join, parse } from 'path';
import { buildPath } from '../../helpers/buildPath.js';
import { checkFilename } from '../../helpers/checkFilename.js';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';

export async function rn(params){
  const {firstParam, secondParam} = parseParamsString(params);
  const oldPath = firstParam;
  const newFileName = secondParam;
  const pathToFile = buildPath(oldPath); 
  let result;
    try {
    result = (await stat(pathToFile)).isFile();
    }
    catch {
      throw new CustomError(ERROR.OPERATION);
    }
    if (result) {
      const dir = parse(pathToFile).dir;
      if (checkFilename(newFileName)) {
        try {
          await rename(pathToFile,join(dir,newFileName))     
        }
        catch {
          throw new CustomError(ERROR.OPERATION);
        }
      }  
      else throw new CustomError(ERROR.OPERATION);
    }
  else throw new CustomError(ERROR.OPERATION);
}   
