import store from "../values/store.js";

export function currentDir() {
  if (process.platform == 'win32' && store.currently_dir.length>1)
    return store.currently_dir.join(store.sep);
  else
    return `${store.currently_dir[0]}${store.sep}`
}
