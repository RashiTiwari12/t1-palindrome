
function findpalindrome(string){
   
    let len=string.length
    for(i=0; i<len/2; i++){
    if(string[i]!==string[len-1-i]){
    return 'not palindromic';
    }
}                                             
    return 'A palindromic';
}
let output=findpalindrome(prompt("Check whether a word is palindromic or not!!"))
alert(output)



