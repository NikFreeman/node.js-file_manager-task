import {createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { EOL } from 'node:os';
import { buildPath } from '../../helpers/buildPath.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';
import { isFile } from '../../helpers/isFile.js';


export async function cat(params){
  if (isEmptyParam(params)) throw new CustomError(ERROR.INPUT);
  const pathToFile = buildPath(params); 
  const result = await isFile(pathToFile);
  if (!result) throw new CustomError(ERROR.OPERATION);

  try {
    const rs = createReadStream(pathToFile, {encoding: 'utf8'});
    await pipeline(rs,stdout,{end:false})
    stdout.write(EOL);
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }  
}
