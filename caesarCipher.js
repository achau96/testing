const caesarCipher = function (string,shift=0){
  const numString = string.split('').map((e,i) => {
    if(e.match(/[a-z]/)){
      return String.fromCharCode((((string.charCodeAt(i)-97) + shift)%26)+97);
    }
    else if (e.match(/[A-Z]/)){
      return String.fromCharCode((((string.charCodeAt(i)-65) + shift)%26)+65);
    }
    else {
      return e;
    }
  })
  return numString.join('');
}

export default caesarCipher;
