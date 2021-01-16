// Given a rectangular matrix of characters, add a border of asterisks(*) to it.


function addBorder(picture) {
    const length = picture[0].length + 2;
    const bordered = [];
    
    bordered.push("*".repeat(length));
    
    for (let chars of picture) {
        bordered.push("*" + chars + "*");
    }
    
    bordered.push("*".repeat(length));
    
    return bordered;
}