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
    const writableStream = process.stdout; // Standard output (console)

// Use the pipeline to connect the streams
await pipeline(rs, writableStream, (err) => {
    if (err) {
        console.error('Pipeline failed:', err.message);
    } else {
        console.log('File content printed successfully!');
    }
});

   }
  }
  catch (e) {
    console.error(e.name, e.message)
    console.log(ERROR.OPERATION)
  }
  
}