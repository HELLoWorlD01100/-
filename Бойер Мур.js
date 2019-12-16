let text = 'abcabcabcabqccabc'
let substring = "abc";
let entry = new Array();
let table = new Map();
for (let i = 0; i < substring.length; i ++){
    table.set(substring[i], i);
}
let start = new Date();
for (let i = 0; i < text.length; i ++){
    if (table.has(text[i + substring.length - 1])){
        i += substring.length - table.get(text[i + substring.length - 1]) - 1;
        if (text.substr(i, substring.length) == substring){
            entry.push(i);
        }
    }
    else{
        i += substring.length - 1;
    }
}
let finish = new Date();
console.log('Boyer-Moore!')
console.log(`Runtime: ${finish - start}`);
console.log(`Line item matching(first symbol!!!): ${entry.join(', ')}`);
console.log(`Number of entries: ${entry.length}`)

let startBF = new Date();
function BruteForce(text, substring){
	let count = 0;
    let arr = new Array();
    for (let i = 0; i < text.length; i++){
        let count = 0;
            for (let j = 0; j < substring.length; j++){
                if (text[i + j] === substring[j])
                    count++;
            }
        if (count === substring.length) arr.push(i)
        count = 0;
    }
    return arr;
}
let resBF = BruteForce(text, substring);
let finishBF = new Date(); 
console.log(`Brute Force!`)
console.log(`Runtime: ${finishBF - startBF}`);
console.log(`Line item matching(first symbol!!!): ${resBF.join(', ')}`);
console.log(`Number of entries: ${resBF.length}`)