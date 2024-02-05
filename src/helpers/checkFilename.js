
export function checkFilename(params) {
  
  const regEx = /[\<\>\:\?\"\/\\\|\*]/g
  return  !regEx.test(params)
}