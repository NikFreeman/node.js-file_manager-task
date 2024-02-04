import {createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { EOL } from 'node:os';
import { buildPath } from '../../helpers/buildPath.js';
import { CustomError } from '../../values/errors.js';
import { ERROR } from '../../values/consts.js';


export async function cat(params){
  if (params == '') throw new CustomError(ERROR.INPUT);
  const pathToFile = buildPath(params); 
  try {
    const result = (await stat(pathToFile)).isFile();
    if (result) {
      const rs = createReadStream(pathToFile, {encoding: 'utf8'});
      await pipeline(rs,stdout,{end:false})
      stdout.write(EOL);
    }
    else {
      throw new CustomError(ERROR.OPERATION);
    }
  }
  catch {
    throw new CustomError(ERROR.OPERATION);
  }
}
