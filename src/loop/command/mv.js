import { rm } from 'fs/promises';
import { join, parse } from 'path';
import { pipeline } from 'stream/promises';
import { buildPath } from '../../helpers/buildPath.js';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { createReadStream, createWriteStream } from 'fs';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';
import { isFile } from '../../helpers/isFile.js';
import { isDirectory } from '../../helpers/isDirectory.js';


export async function mv(params){
  const {firstParam, secondParam } = parseParamsString(params);

  if (isEmptyParam(firstParam)) throw new CustomError(ERROR.INPUT);
  const sourcePath = firstParam;
    
  if (isEmptyParam(secondParam)) throw new CustomError(ERROR.INPUT);
  const destionationPath = secondParam;
  
  const pathToFile = buildPath(sourcePath);
  const checkSource = await isFile(pathToFile)
  
  const pathToDestionation = buildPath(destionationPath);  
  const checkDistionation = await isDirectory(pathToDestionation); 
  
  if (checkSource && checkDistionation) {
  const filename = parse(pathToFile).base;
    try {
      await pipeline(createReadStream(pathToFile),createWriteStream(join(pathToDestionation,filename)))
      await rm(pathToFile);
    }
    catch {
      throw new CustomError(ERROR.OPERATION)
    }
  }
  else
  throw new CustomError(ERROR.OPERATION)
}