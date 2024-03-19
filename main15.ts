let guest_List :string[ ]=['Nabeera','Areesha','Azfia'];

for(let i=0;i<guest_List.length;i++){
console.log('Dear Girls '+guest_List[i]+',\n\n It is our pleasure to invite you in our party.\n\n Thank You!')
}
let absent_Guest:string=' Azfia ';
let new_Guest:string ='Tooba';

guest_List[2]=new_Guest ;

for(let i=0;i<guest_List.length;i++){
console.log('Dear Girls ' + guest_List[i]
+',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log('Dear Miss $ {absent_Guest}  is not coming to the party.') 