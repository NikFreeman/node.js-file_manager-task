import {rm, stat } from 'fs/promises';
import { join, parse } from 'path';
import { pipeline } from 'stream/promises';
import { buildPath } from '../../helpers/buildPath.js';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { createReadStream, createWriteStream } from 'fs';


export async function mv(params){
  const {firstParam, secondParam } = parseParamsString(params);
  let sourcePath;
  let destionationPath;
  
  if (firstParam !='')
    sourcePath = firstParam;
  else throw new CustomError(ERROR.INPUT);
  
  if (secondParam !='')
    destionationPath = secondParam;
  else throw new CustomError(ERROR.INPUT);
  
  const pathToFile = buildPath(sourcePath);
  let checkSource;
  try {
    checkSource = (await stat(pathToFile)).isFile();
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }
  
  const pathToDestionation = buildPath(destionationPath);  
  let checkDistionation; 
  try {
    checkDistionation = (await stat(pathToDestionation)).isDirectory();
  }
  catch { 
    throw new CustomError(ERROR.OPERATION);
  }
  
  if (checkSource && checkDistionation) {
  const filename = parse(pathToFile).base;
  try {
  await pipeline(createReadStream(pathToFile),createWriteStream(join(pathToDestionation,filename)))
  await rm(pathToFile);
  }
  catch
  {
    throw new CustomError(ERROR.OPERATION)
  }
  }
  else
  throw new CustomError(ERROR.OPERATION)
}