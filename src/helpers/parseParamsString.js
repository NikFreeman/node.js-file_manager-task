import {removeQuotes} from './removeQuotes.js'


export function parseParamsString(params){

  const firstChar = params.at(0);
  const regEx =/['"]/;
  
  let firstParam ='';
  let secondParam ='';
  
  if (regEx.test(firstChar)) {
    firstParam = (params.slice(0,(params.indexOf(firstChar,1)+1)))
    if (params.at(params.indexOf(firstChar,1)+1) ==' ')
    secondParam = (params.slice(params.indexOf(firstChar,(params.indexOf(firstChar,1)))+2)) 
  }
  else {
    firstParam = (params.slice(0,(params.indexOf(' '))))
    secondParam = (params.slice(params.indexOf(' ')+1))
}
firstParam = removeQuotes(firstParam);
secondParam = removeQuotes(secondParam);
return {firstParam, secondParam};
}