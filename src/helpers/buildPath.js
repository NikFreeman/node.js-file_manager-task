import {parse, isAbsolute,normalize, sep} from 'path';
import { currentDir } from './currentDir.js';

export function buildPath(params){
let tempPath;  
  if (isAbsolute(params)) 
    tempPath = parse(params)
  else
    tempPath=parse(normalize(`${currentDir()}${sep}${params}`));
  const pathTo = (tempPath.base !='' && tempPath.root != tempPath.dir) ?
    `${tempPath.dir}${sep}${tempPath.base}`:
    (tempPath.base !='' && tempPath.root == tempPath.dir)?
    `${tempPath.dir}${tempPath.base}`:
    `${tempPath.dir}`;    
    return pathTo;
  }