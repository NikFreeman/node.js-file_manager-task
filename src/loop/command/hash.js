import {open} from 'fs/promises';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';
import { EOL } from 'os';
import { parseParamsString } from '../../helpers/parseParamsString.js';
import { buildPath } from '../../helpers/buildPath.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';


export async function hash(params){
  const {firstParam } = parseParamsString(params);
  let fileToHash;

  if (firstParam !='')
  fileToHash = firstParam;
  else throw new CustomError(ERROR.INPUT);

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