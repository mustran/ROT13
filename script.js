function rot13(str) {
    let regex = /^[a-zA-Z]/;
    let newString = "";

    str.split("").map(character => {
        if (character.match(regex)) {
            newString += String.fromCharCode((character.toUpperCase().charCodeAt() % 26) + 65);
        } else {
            newString += character;
        }
    });
    return newString;
}


console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));