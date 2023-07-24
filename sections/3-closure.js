function generateMultiples(num) {
    function makeMultiplesOfNum (howManyTimes) {
        const result = []
        for(let i = 1; i <= howManyTimes; i++){
            result.push(num * i)
        }
        return result
    }
    return makeMultiplesOfNum
}

function secureFunc(password, printSecret) {
    function passwordVerifier(passwordAttempt, ...args){
        if(passwordAttempt === password){
            return printSecret(...args)
        }
        return "Sorry your password is incorrect!"
    }
return passwordVerifier
}

module.exports = { generateMultiples, secureFunc };
