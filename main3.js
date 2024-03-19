var myTeacher = 'zia kHaN';
var lowerCaseName = myTeacher.toLowerCase();
var upperCaseName = myTeacher.toUpperCase();
var titleCaseName = lowerCaseName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);
