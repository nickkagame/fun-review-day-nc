const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

const NCFruitBowl = require('../data/poll-data');


describe("", () => {
  test('returns an array', () =>{
    const input = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
      ]
    const result = removeAgents(input);
    expect(Array.isArray(result)).toBe(true);
})
test('removes one agent with the profession mole', () => {
    const input =  [{ name: "Sam", profession: "artist" }, 
                    { name: "Mitch", profession: "mole" }];
    const output = [{ name: "Sam", profession: "artist" }]
    const result = removeAgents(input);
    expect(result).toEqual(output);
})
test('removes multiple moles', () => {
    const input =  [{ name: "Sam", profession: "artist" }, 
                    { name: "Mitch", profession: "mole" },
                    { name: "Sarah", profession: "mole" }];
    const output = [{ name: "Sam", profession: "artist" }]
    const result = removeAgents(input);
    expect(result).toEqual(output);
})
test('removes multiple (more than two) moles', () => {
    const input =  [{ name: "Sam", profession: "artist" },
                    { name: "Eli", profession: "mole" },
                    { name: "Sharon", profession: "mole"},
                    { name: "Sally", profession: "chef" }, 
                    { name: "Mitch", profession: "mole" },
                    { name: "Sarah", profession: "mole" }];
    const output = [{ name: "Sam", profession: "artist"},
                    { name: "Sally", profession: "chef"}]
    const result = removeAgents(input);
    expect(result).toEqual(output);
})
test('test that array is new array', () => {
    const input =  [{ name: "Sam", profession: "artist" },
                    { name: "Eli", profession: "mole" },
                    { name: "Sharon", profession: "mole"},
                    { name: "Sally", profession: "chef" }, 
                    { name: "Mitch", profession: "mole" },
                    { name: "Sarah", profession: "mole" }];
    const result = removeAgents(input);
    expect(result).not.toBe(input);
})
test('test that input array is not mutated', () => {
    const input =  [{ name: "Sam", profession: "artist" },
                    { name: "Eli", profession: "mole" },
                    { name: "Sharon", profession: "mole"},
                    { name: "Sally", profession: "chef" }, 
                    { name: "Mitch", profession: "mole" },
                    { name: "Sarah", profession: "mole" }];
    removeAgents(input);
    expect(input).toEqual(input);
})
describe('make name tags', () => {
    test('returns an array', () =>{
        const input = [
            {
              title: "Mr",
              forename: "Sam",
              surname: "Caine",
              age: 30,
              company: "Northcoders",
            },
            {
              title: "Mr",
              forename: "Kermit",
              surname: "The Frog",
              age: 35,
              company: "Jim Henson Studios",
            },
          ]
        const result = makeNameTags(input);
        expect(Array.isArray(result)).toBe(true);
    })
    test('return array with single object returned as correct name tag', () => {
        const input = [{title: "Mr", forename: "Sam", surname: "Caine", company: "Northcoders"}];
        const output = ["Mr Sam Caine, Northcoders"];
        const result = makeNameTags(input);
        expect(result).toEqual(output);
    })
    test('return array with mutiple correct name tags', () => {
        const input = [{
            title: "Mr", 
            forename: "Sam", 
            surname: "Caine", 
            company: "Northcoders"},  
            {
            title: "Mr",
            forename: "Kermit",
            surname: "The Frog",
            age: 35,
            company: "Jim Henson Studios",}
        ];
        const output = ["Mr Sam Caine, Northcoders", 'Mr Kermit The Frog, Jim Henson Studios'];
        const result = makeNameTags(input);
        expect(result).toEqual(output);
    })
    test('returns array with mutiple (more than two) correct name tags', () => {
        const input = [{
            title: "Mr", 
            forename: "Sam", 
            surname: "Caine", 
            company: "Northcoders"},  
            {
            title: "Mr",
            forename: "Kermit",
            surname: "The Frog",
            age: 35,
            company: "Jim Henson Studios"},
            {
                title: "Mr",
                forename: "Vito",
                surname: "Spatafore",
                age: 35,
                company: "Di Meo Family",}
        ];
        const output = ["Mr Sam Caine, Northcoders", 'Mr Kermit The Frog, Jim Henson Studios', 'Mr Vito Spatafore, Di Meo Family'];
        const result = makeNameTags(input);
        expect(result).toEqual(output);
    })
    test('test that array is new array', () => {
        const input =  ('returns array with mutiple (more than two) correct name tags', () => {
            const input = [{
                title: "Mr", 
                forename: "Sam", 
                surname: "Caine", 
                company: "Northcoders"},  
                {
                title: "Mr",
                forename: "Kermit",
                surname: "The Frog",
                age: 35,
                company: "Jim Henson Studios"},
                {
                    title: "Mr",
                    forename: "Vito",
                    surname: "Spatafore",
                    age: 35,
                    company: "Di Meo Family",}
            ];
        const result = removeAgents(input);
        expect(result).not.toBe(input);
    })
    })
describe('createPoll', () => {
    test('function returns an object', () => {
        const input = ["cake", "biscuit", "biscuit"];
        const result = createPoll(input);
        expect(typeof result).toBe('object');
        expect(Array.isArray(result)).toBe(false);
        expect(result).not.toBe(null)
    })
    test('will return an object with the key of word, and no. of occurances', () => {
        const input = ["cake"];
        const output = {cake: 1}
        const result = createPoll(input)
        expect(result).toEqual(output)
    })
    test('will return an object with the 2s keys of word, and no. of occurances', () => {
        const input = ["cake", "biscuit"];
        const output = {cake: 1, biscuit: 1}
        const result = createPoll(input)
        expect(result).toEqual(output)
    })
    test('will return an object with 2 keys, and no. of mutiple occurances', () => {
        const input = ["cake", "biscuit", "biscuit"];
        const output = {cake: 1, biscuit: 2}
        const result = createPoll(input)
        expect(result).toEqual(output)
    })
    test('will return an object with 2 keys, and no. of mutiple occurances', () => {
        const input = ["cake", "cake", "biscuit", "biscuit"];
        const output = {cake: 2, biscuit: 2}
        const result = createPoll(input)
        expect(result).toEqual(output)
    })
    test('will return an object with 2 keys, and no. of mutiple occurances', () => {
        const input = ["cake", "cake", 'cake', "whale", "biscuit", "biscuit"];
        const output = {cake: 3, biscuit: 2, whale: 1}
        const result = createPoll(input)
        expect(result).toEqual(output)
    })
    test('final NC poll data test', () => {
        const input = NCFruitBowl;
        const output = {
            apple: 276,
            pear: 223,
            banana: 263,
            orange: 238,
            'lonesome plum': 1
          }
        const result = createPoll(input)
        expect(result).toEqual(output);
    })
})
})
});
