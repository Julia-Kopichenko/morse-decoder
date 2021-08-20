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
    let symbol2Morse = '';
    function val2key(val,obj) {
        for (let key in obj) {
          if (obj[key] === val) {
            return key;
          }
        }
        return false;
    };

    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === ' ') {
        result += '**********';
        continue;
      }

      symbol2Morse = val2key(expr[i], MORSE_TABLE);

      result += symbol2Morse.replace(/\-/g, '11').replace(/\./g, '10').padStart(10, '0');
    }
    return result;
}


module.exports = {
    decode
}
