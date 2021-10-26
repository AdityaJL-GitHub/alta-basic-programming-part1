function palindrome(string) {
  const kata = string.toLowerCase().match(/[a-z0-9]/ig);     
  return kata.join('') ===
      kata.reverse().join('');
}



console.log(palindrome("Eye"));
console.log(palindrome("kupu-kupu"));