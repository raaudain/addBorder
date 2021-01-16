// Given a rectangular matrix of characters, add a border of asterisks(*) to it.


function addBorder(picture) {
    const charsLength = picture[0];
    const bordered = [];
    
    for (let chars of picture) {
        bordered.push("*" + chars + "*");
    }
    
    bordered.unshift("*".repeat(charsLength.length + 2));
    bordered.push("*".repeat(charsLength.length + 2));
    
    return bordered;
}
