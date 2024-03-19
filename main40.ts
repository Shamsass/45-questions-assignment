// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. 
//  Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//  Make at least one new function call that includes the number of tracks on an album.

// function myAlbum(artistName :string , albumTitle:string ){
//     return{artistName ,albumTitle }

// }

// let album1 =myAlbum("David","universal love");

// let album2 =myAlbum("John"," Eve");

// let album3 =myAlbum("Thomson","  world isolation");

// let album4 =myAlbum("Michael","Elated ");

// console.log(album1);

// console.log(album2);

// console.log(album3);

// console.log(album4);

// number of tracks
function myAlbum2(artistName :string , albumTitle:string , numberoftracks ? : number  ){
    return{artistName ,albumTitle , numberoftracks}

}

let album5 =myAlbum2("David","universal love",30);

let album6 =myAlbum2("John"," Eve",55);

let album7 =myAlbum2("Thomson"," World Isolation");

let album8 =myAlbum2("Michael","Elated ");

console.log(album5);

console.log(album6);

console.log(album7);

console.log(album8);

