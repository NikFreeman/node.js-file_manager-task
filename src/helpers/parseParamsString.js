import {removeQuotes} from './removeQuotes.js'


export function parseParamsString(params){

  const lastChar = params.at(params.length-1);
  const regEx =/['"]/;
  let firstParam;
  let secondParam;
  console.log(regEx.test(lastChar))
  if (regEx.test(lastChar)) {
    firstParam = (params.slice(0,(params.lastIndexOf(lastChar,-1))-2))
    secondParam = (params.slice(params.lastIndexOf(lastChar,-1)))
  }
  else {
    firstParam = (params.slice(0,(params.lastIndexOf(' '))))
    secondParam = (params.slice(params.lastIndexOf(' ')+1))
}
console.log(`!${firstParam}!${secondParam}`)
return {firstParam, secondParam};
}