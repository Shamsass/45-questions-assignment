var guest_List = ['Nabeera', 'Areesha', 'Azfia'];
var absent_Guest = 'Azfia';
var new_Guest = 'Tooba';
guest_List[2] = new_Guest;
console.log('Dear Girls. ' + absent_Guest + 'is not coming to the party.');
console.log('Good News!we find  big table so we are inviting 3 more guests.');
guest_List.unshift('Honey');
guest_List.splice(2, 0, ' Saira');
guest_List.push('shaista');
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Girls ' + guest_List[i]
        + ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('\nsorry we can not arrange big table,only two peoples will be invited.');
while (guest_List.length > 2) {
    var remove_Guest = guest_List.pop();
    console.log('sorry girls.' + remove_Guest + ',you are not invited for dinner.');
}
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Girls ' + guest_List[i] + ',\n\n you are still invited.\n\nThank you!\n\n');
}
guest_List.splice(0, 2);
console.log(guest_List);
