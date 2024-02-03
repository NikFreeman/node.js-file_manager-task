import {createReadStream, createWriteStream} from 'node:fs';
import { stat } from 'node:fs/promises';
import { buildPath } from '../../helpers/buildPath.js';
import { ERROR } from '../../values/consts.js';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';


export async function cat(params){
  const pathToFile = buildPath(params); 

  try {
   const result = (await stat(pathToFile)).isFile();
   if (result) {
    const rs = createReadStream(pathToFile, {encoding: 'utf8'});
    await pipeline(rs,stdout,{end:false})
   }
  }
  catch (e) {
    console.log(ERROR.OPERATION)
  }
  
}