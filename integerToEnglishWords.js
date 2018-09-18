const numberToWords = (num) => {
  let numString = num.toString();
  let numArray = new Array(4);
  let result = [];

  if (numString.length <= 3) {
    return translate(numString);
  }

  let j = numArray.length - 1;
  for (let i = numString.length - 1; i > -1; i -= 3) {
    let string = '';
    if (numString[i - 2]) {
      string = string.concat(numString[i - 2], numString[i - 1], numString[i]);
    } else {
      string = numString.slice(0, i + 1);
    }

    numArray.splice(j, 1, string);
    j--;
  }

  for (let i = 0; i < numArray.length; i++) {
    let string;
    if (!numArray[i]) {
      continue;
    } else if (numArray[i] === '000') {
      numArray[i] = null;
    } else if (numArray[i] && i === 0) {
      string = translate(numArray[i]).concat(' Billion');
    } else if (numArray[i] && i === 1) {
      string = translate(numArray[i]).concat(' Million');
    } else if (numArray[i] && i === 2) {
      string = translate(numArray[i]).concat(' Thousand');
    } else if (numArray[i] && i === 3) {
      string = translate(numArray[i]);
    }

    numArray[i] = string;
    if (numArray[i]) {
      result.push(string);
    }
  }

  return result.join(' ');
};

const translate = (numString) => {
  let dictionary = {
    ones: {
      '0': 'Zero',
      '1': 'One',
      '2': 'Two',
      '3': 'Three',
      '4': 'Four',
      '5': 'Five',
      '6': 'Six',
      '7': 'Seven',
      '8': 'Eight',
      '9': 'Nine'
    },
    tens: {
      '10': 'Ten',
      '11': 'Eleven',
      '12': 'Twelve',
      '13': 'Thirteen',
      '14': 'Fourteen',
      '15': 'Fifteen',
      '16': 'Sixteen',
      '17': 'Seventeen',
      '18': 'Eighteen',
      '19': 'Nineteen'
    },
    tensPrefixes: {
      '2': 'Twenty',
      '3': 'Thirty',
      '4': 'Forty',
      '5': 'Fifty',
      '6': 'Sixty',
      '7': 'Seventy',
      '8': 'Eighty',
      '9': 'Ninety'
    }
  }

  if (numString.length === 1) {
    if (dictionary.ones[numString]) {
      return dictionary.ones[numString];
    }
  }

  if (numString.length === 2) {
    if (dictionary.tens[numString]) {
      return dictionary.tens[numString];
    } else if (numString[1] === '0') {
      return dictionary.tensPrefixes[numString[0]];
    } else {
      return (dictionary.tensPrefixes[numString[0]]).concat(' ', dictionary.ones[numString[1]]);
    }
  }

  if (numString.length === 3) {
    let hundred = numString.split('')[0];
    let tens = numString.split('').slice(1).join('');

    if (dictionary.tens[tens]) {
      tens = dictionary.tens[tens];
    } else if (tens === '00') {
      return `${dictionary.ones[hundred]} Hundred`;
    } else if (tens[1] === '0') {
      tens = dictionary.tensPrefixes[tens[0]];
    } else if (tens[0] === '0') {
      tens = dictionary.ones[tens[1]];
    } else {
      tens = (dictionary.tensPrefixes[tens[0]]).concat(' ', dictionary.ones[tens[1]]);
    }

    if (hundred === '0') {
      return tens;
    } else {
      return `${dictionary.ones[hundred]} Hundred ${tens}`;
    }
  }
}