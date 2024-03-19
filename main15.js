var guest_List = ['Nabeera', 'Areesha', 'Azfia'];
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Girls ' + guest_List[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!');
}
var absent_Guest = ' Azfia ';
var new_Guest = 'Tooba';
guest_List[2] = new_Guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log('Dear Girls ' + guest_List[i]
        + ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('Dear Miss $ {absent_Guest}  is not coming to the party.');
