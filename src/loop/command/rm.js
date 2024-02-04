import {rm as remove} from 'fs/promises';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { buildPath } from '../../helpers/buildPath.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';


export async function rm(params){
  const {firstParam } = parseParamsString(params);
  
  if (isEmptyParam(firstParam)) throw new CustomError(ERROR.INPUT);
  const fileToRemove = firstParam;
  const pathToFile = buildPath(fileToRemove);
  try {
    await remove(pathToFile);
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }


}