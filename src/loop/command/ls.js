import store from "../../values/store.js";
import { readdir } from 'node:fs/promises';
import { TYPE_DIRECTORY,TYPE_FILE } from "../../values/consts.js";


export async function ls(){
  const result =[];
  const dirContent = await readdir(store.currently_dir.join(store.sep),{withFileTypes:true});
  const directories = dirContent.filter((item)=>item.isDirectory());
  console.log(directories)
  directories.forEach((item)=> result.push({name:item.name, type: TYPE_DIRECTORY}));
  const files = dirContent.filter((item)=> item.isFile()).sort();
  files.forEach((item)=> result.push({name:item.name, type: TYPE_FILE}));;
  console.table(result);  
}