let myTeacher = 'zia kHaN';
let lowerCaseName = myTeacher.toLowerCase();
let upperCaseName = myTeacher.toUpperCase();
 let titleCaseName = lowerCaseName.replace(/\b\w/g, (char)=>{
  return char.toUpperCase();
})
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);