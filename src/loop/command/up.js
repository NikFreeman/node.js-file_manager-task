import store from '../../values/store.js';

export function up(){  

  if (store.currently_dir.length>1) store.currently_dir.pop();

}