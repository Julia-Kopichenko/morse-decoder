const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i = i + 10) {
      result += decodingSymbol(expr.slice(i, i + 10), MORSE_TABLE);
    }

    function decodingSymbol(cipher, table) {
      let morseCode = [];
      for (let i = cipher.length - 2; i >= 0; i = i - 2) {
        if (cipher[i] + cipher[i + 1] === '**') {
          return ' ';
        } else if (cipher[i] + cipher[i + 1] === '10') {
          morseCode.unshift('.');
        } else if (cipher[i] + cipher[i + 1] === '11') {
          morseCode.unshift('-');
        } else {
          break;
        }
      }
      morseCode = morseCode.join('');

      return Object.entries(table).find((element) => element[0] === morseCode)[1];
    }

    return result;
  }


module.exports = {
    decode
}
