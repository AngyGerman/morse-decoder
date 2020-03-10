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
    let ten = expr.match(/.{1,10}/g),
        arr = [],
        result = [],
        answer = [];

    for (let i = 0; i < ten.length; i++) {
        if (ten[i] !== '**********') {
            arr.push(parseInt(ten[i], 10));
        } else {
            arr.push(' ');
        }
    }

    arr = arr
        .join(',')
        .replace(/10/gi, '.')
        .replace(/11/gi, '-')
        .split(',');

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] !== ' ') {
            result = MORSE_TABLE[arr[i]];
        } else {
            result = ' ';
        }

        answer.push(result);
    }

    return answer.join('');
}

module.exports = {
    decode
}