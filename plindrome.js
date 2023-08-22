var isPalindrome = function (s) {
  let cleanStr = cleanup(s);
  return isPal(cleanStr);
};

function cleanup(str) {
  let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let lCase = str[i].toLowerCase();
    if (alphanumeric.indexOf(lCase) !== -1) {
      newStr += lCase;
    }
  }
  return newStr;
}

function isPal(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
