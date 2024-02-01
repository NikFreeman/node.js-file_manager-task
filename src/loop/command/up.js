import store from '../../values/store.js';

export function up(){  
  if (process.platform =='win32') {
    if (store.currently_dir.length>1) store.currently_dir.pop()
  }
}