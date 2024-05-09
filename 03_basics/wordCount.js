function countCharacters(paragraph) {

    paragraph = paragraph.trim();

    return paragraph.length;
}


let paragraph = "It invlves breaking down a until aee base case is reached, which is a terminating condition that doesn't require further recursive calls. Thiswwwwwwwwwww process allows for solving complex problems by breaking them down into smaller, more manageable subproblems";
let characterCount = countCharacters(paragraph);
console.log("Character count:", characterCount);
