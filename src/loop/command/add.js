import { open } from  'fs/promises';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { join } from 'path';
import { currentDir } from '../../helpers/currentDir.js';
import { checkFilename } from '../../helpers/checkFilename.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';
import { parseParamsString } from '../../helpers/parseParamsString.js';


export async function add(params){
  const {firstParam } = parseParamsString(params);
  if (isEmptyParam(firstParam)) throw new CustomError(ERROR.INPUT);
  if (!checkFilename(firstParam)) throw new CustomError(ERROR.OPERATION);

  try {
    const fileToCreate = await open(join(currentDir(),firstParam),"w");
    fileToCreate.close();
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }
}
  