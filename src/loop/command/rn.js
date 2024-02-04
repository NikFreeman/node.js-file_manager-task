import {stat,rename} from 'fs/promises';
import { join, parse } from 'path';
import { buildPath } from '../../helpers/buildPath.js';
import { checkFilename } from '../../helpers/checkFilename.js';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';
import { isFile } from '../../helpers/isFile.js';

export async function rn(params){
  const {firstParam, secondParam} = parseParamsString(params);

  if (isEmptyParam(firstParam)) throw new CustomError(ERROR.INPUT);
  const oldPath = firstParam;

  if (isEmptyParam(secondParam)) throw new CustomError(ERROR.INPUT);
  const newFileName = secondParam;
  
  const pathToFile = buildPath(oldPath); 
  const result = await isFile(pathToFile);
  
  if (!result) throw new CustomError(ERROR.OPERATION);
  if (!checkFilename(newFileName)) throw new CustomError(ERROR.OPERATION);
  
  try {
    const dir = parse(pathToFile).dir;
    await rename(pathToFile,join(dir,newFileName))     
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }
}   
