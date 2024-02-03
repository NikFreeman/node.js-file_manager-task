import store from "../values/store.js";

export function currentDir() {
  if (process.platform == 'win32') 
    if (store.currently_dir.length>1) 
      return store.currently_dir.join(store.sep);
    else 
     return `${store.currently_dir[0]}${store.sep}`;
  else 
    if (store.currently_dir.length>1) 
      return store.currently_dir.join(store.sep)
    else 
      return `${store.sep}`    
}
