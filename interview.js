sumEvens = (args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 !== 1) {
            sum += args[i]
        }
    }
    return sum
}
// console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

sumOdds = (args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 1) {
            sum += args[i]
        }
    }
    return sum
}


isPalindrome = (args) => {

    let arr1 = args.replace(/\s/g, '').split('');
    let arr2 = args.replace(/\s/g, '').split('').reverse()

    if (arr1.join() === arr2.join()) {
        return true
    }
}

printPalindroms = (args) => {

    for (let i = 0; i < args.length; i++) {
        if (isPalindrome(args[i])) {
            console.log(args[i])
        }
    }
}

printPalindroms(['11', '12', '131', 'racecar', 'faded af','ben', 'did'])
