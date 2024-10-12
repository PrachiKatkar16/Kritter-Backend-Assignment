function normalizeString(inputString) {
    let trimmedString = inputString.trim();
    let cleanedString = trimmedString.replace(/[^a-zA-Z0-9 ]/g, '');
    let singleSpacedString = cleanedString.replace(/\s+/g, ' ');
    let words = singleSpacedString.split(' ');
    let camelCaseString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return camelCaseString;
}


const inputString = " Hello! World@ This is a Test!. ";
const outputString = normalizeString(inputString);
console.log(outputString);  