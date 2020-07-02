// export function addClass(el, className) {
//   console.log('引入了吗')
//   if (hadClass(el, className)) {
//     return
//   }
//   let newClass = el.className.split(' ')
//   newClass.push(className)
//   el.className = newClass.join(' ')
// }
// export function hadClass(el, className) {
//   let reg = new RegExp('^|\\s' + className + '(\\s|$)')
//   return reg.test(el.className)
// }

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}