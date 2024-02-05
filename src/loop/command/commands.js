import { up } from "./up.js"
import { cd } from "./cd.js"
import { ls } from "./ls.js"
import { cat } from "./cat.js"
import { add } from "./add.js"
import { rn } from "./rn.js"
import { cp } from "./cp.js"
import { mv } from "./mv.js"
import { rm } from "./rm.js"
import { os } from "./os.js"
import { hash } from "./hash.js"
import { compress } from "./compress.js"
import { decompress } from "./decompress.js"

export const commands ={
  'up': up,
  'cd': cd,
  'ls': ls,
  'cat': cat,
  'add': add,
  'rn': rn,
  'cp': cp,
  'mv': mv,
  'rm': rm,
  'os': os,
  'hash':hash,
  'compress': compress,
  'decompress': decompress
}