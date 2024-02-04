import {open} from 'fs/promises';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';
import { EOL } from 'os';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { buildPath } from '../../helpers/buildPath.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';
import { isEmptyParam } from '../../helpers/isEmptyParam.js';


export async function hash(params){
  const {firstParam } = parseParamsString(params);
  
  if (isEmptyParam(firstParam)) throw new CustomError(ERROR.INPUT);
  const fileToHash = firstParam;

  const pathToFile = buildPath(fileToHash);
  
  try {
    const fd = open(pathToFile,'r');
    const readibleStream = (await fd).createReadStream();
    const hash = createHash('sha256');
    await pipeline(readibleStream,hash.setEncoding('hex'),stdout,{end:false});
    stdout.write(EOL);
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }  
}