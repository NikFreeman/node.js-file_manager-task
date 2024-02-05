import { createBrotliCompress } from 'node:zlib';
import { parse, join } from 'path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { buildPath } from '../../helpers/buildPath.js'
import { isFile } from '../../helpers/isFile.js';
import { isDirectory } from '../../helpers/isDirectory.js';


export async function compress(params){
  const {firstParam, secondParam } = parseParamsString(params);

  if (isEmptyParam(firstParam)) {throw new CustomError(ERROR.INPUT)}
  const sourcePath = firstParam;

  if (isEmptyParam(secondParam)) {throw new CustomError(ERROR.INPUT)}
  const destionationPath=secondParam;
  
  const pathToCompress = buildPath(sourcePath);
  const checkSource = await isFile(pathToCompress)
  
  const pathFromCompress = buildPath(destionationPath);
  const checkDistionation = await isDirectory(pathFromCompress); 
  
  if (checkSource && checkDistionation) {
  const filename = parse(pathToCompress).base+'.br';
  try {
  await pipeline(createReadStream(pathToCompress),createBrotliCompress(), createWriteStream(join(pathFromCompress,filename)))
  }
  catch 
  {    
    throw new CustomError(ERROR.OPERATION)
  }
  }
  else
  throw new CustomError(ERROR.OPERATION)  
 }
