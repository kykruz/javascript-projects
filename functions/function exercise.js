function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++ ) {
        line += '#';
    }
    return line
}



function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size)) + '\n';
    }
    return square
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width)) + '\n';
    }
    return rectangle.slice(0,-1)
}

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1)) + '\n';
    }
    return stairs.slice(0,-1)
}

function makeSpaceLines(numSpaces, numChars) {
    let spaceLines = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLines += (makeLine(numChars + numSpaces));
    }
    return makeSpaceLines
}

console.log(makeSpaceLines(3,3));