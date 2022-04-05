getCristmasTreeString = function (height = 5, character = '*') {
    const space = ' '
    const treeWidth = 1 + 2 * (height - 1)
    let cristmasTreeString = ''

    for (let tire = 1; tire <= height; ++tire) {
        cristmasTreeString += space.repeat(height - tire)
        cristmasTreeString += character.repeat(treeWidth - 2 * (height - tire))
        cristmasTreeString += space.repeat(height - tire)
        cristmasTreeString += "\n"
    }

    return cristmasTreeString
}

console.log(getCristmasTreeString(10))
