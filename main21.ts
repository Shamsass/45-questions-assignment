function Height(height:number){

    for(let   i=1; i<=height; i++){
 
      for(let j=1; j<=height-i;j++){
 
         process.stdout.write("   ")
    }
      for(let k=1;k<=2*i-1;k++){
 
         process.stdout.write(" * ")
         }
         console.log(  )
      }
 }
 Height(50)