function removeAgents(arr) {
    const result = arr.filter(obj => obj.profession !== 'mole');
    return result
}

function makeNameTags(arr) {
    const result = arr.map(obj => `${obj.title} ${obj.forename} ${obj.surname}, ${obj.company}`)
    return result
}

function createPoll(arr) {
    const obj = {};
    arr.forEach(element => {
        if(!obj[element]){
        obj[element] = 1
        } else {
        obj[element]++
        }
    });
    return obj
}

module.exports = { removeAgents, makeNameTags, createPoll };
