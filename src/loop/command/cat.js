import {createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { buildPath } from '../../helpers/buildPath.js';
import { InvalidOperationError } from '../../values/errors.js';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { EOL } from 'node:os';


export async function cat(params){
  const pathToFile = buildPath(params); 
try{
  try {
    const result = (await stat(pathToFile)).isFile();
    if (result) {
      const rs = createReadStream(pathToFile, {encoding: 'utf8'});
      await pipeline(rs,stdout,{end:false})
      stdout.write(EOL);
    }
    else {
      throw new InvalidOperationError();
    }
  }
  catch {
    throw new InvalidOperationError();
  }
}
catch (e){
  if (e instanceof InvalidOperationError)
    console.log(e.message);
}  
}