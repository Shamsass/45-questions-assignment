// Question37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt
//  and a medium shirt with the default message, 
//  and a shirt of any size with a different message.
//  function makeshirt(size: string,  label: string ) {
// return size  + label 
//  }
//  let myFunction =   makeshirt("large ", "I love typescript");
//  console.log(myFunction);
//  making large as default
// function make_shirt(label: string ,size: string = "large " ) {
//     return size  + label 
//      }
//      let my_Function =   make_shirt( "I love typescript");
//      console.log(my_Function);
// making medium as default 
//  function make_shirt(label: string ,size: string = "medium " ) {
//     return size  + label 
//      }
//      let my_Function =   make_shirt( "I love typescript");
//      console.log(my_Function);
// making shirt of any size 
function make_shirt(label, size) {
    return size + label;
}
var my_Function = make_shirt("any size", "I love typescript");
console.log(my_Function);
