//functions
//Q.return the numbers of vowels in a given string
/*function countVowels(str){
    let count=0;
    const vowels="aeiouAEIOU";
    for(let ch of str)
    {
        if(vowels.includes(ch))
        {
            count++;
        }
    }
    return count;
}
let text="SrilakshmiThirupathamma";
console.log(countVowels(text));
*/
// Arrow Function
// Return the number of vowels in a given string

const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
};

let text = "vijaya";
console.log("Number of vowels:", countVowels(text));