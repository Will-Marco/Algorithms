function compress(rawString) {
    let count = 0
    let compressString = ''
    for (let i = 0; i < rawString.length; i++) {
        let currentLatter = rawString[i]
        count++
        if (currentLatter !== rawString[i+1]) {
            compressString += currentLatter + count
            count = 0
        }
    }
    return compressString.length < rawString ? compressString : rawString
}

let rawString = "aabbccddf"
console.log(`Raw: ${rawString}`);
const compressed = compress(rawString)
console.log(`Compressed: ${compressed}`);