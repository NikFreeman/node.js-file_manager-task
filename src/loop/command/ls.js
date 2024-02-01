import { currentDir } from '../../helpers/currentDir.js';
import { readdir } from 'node:fs/promises';
import { TYPE_DIRECTORY,TYPE_FILE } from '../../values/consts.js';


export async function ls(){
  const result =[];
  const dirContent = await readdir(currentDir(),{withFileTypes:true});
  const directories = dirContent
    .filter((item)=>item.isDirectory())
    .sort()
    .forEach((item)=> result.push({name:item.name, type: TYPE_DIRECTORY}));  
  const files = dirContent
    .filter((item)=> item.isFile())
    .sort()
    .forEach((item)=> result.push({name:item.name, type: TYPE_FILE}));;
  console.table(result);  
}