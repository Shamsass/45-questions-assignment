// question31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 let usersNames2 :string [] = ["Azfia ",  "Nabeera", "Laiba"];


//  to remove all members
    // usersNames2 =[];
//  console.log(usersNames2);

if(usersNames2.length > 0){

    for(let i=0; i < usersNames2.length; i++){
         if(usersNames2[i] == "Admin"){
            console.log(`\n Hello ${usersNames2[i]} would you like to see a status report?\n`);
        }else{
            console.log(`Hello ${usersNames2[i]} thank you for logging in again!`)
        }
     }

    }else{
        console.log('we need to find some users!')
    }

// if(users_list == "Azfia ","Nabeera ","Laiba" ){
// console.log("user_list"+"the list of users is not empty")
//  }else{ }

//  }

// • If the list is empty, print the message We need to find some users!     
// var current_user = ["Azfia ","Nabeera ","Laiba"];
// console.log(' we need to find some user');

//  Remove all of the usernames from your array, and make sure the correct message is printed.
// var current_user = ["  ","  "," "]; 
// console.log(' we need to find some user');
