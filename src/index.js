module.exports = function toReadable(number) {
  let result = '';
  let num = number;
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num === 0) {
    return ones[0];
  }

  if (num >= 100) {
    const hundredPart = Math.floor(num / 100);
    result += `${ones[hundredPart]} hundred`;

    const remainder = num % 100;

    if (remainder !== 0) {
      result += ' ';
      num = remainder;
    } else {
      return result;
    }
  }

  if (num >= 20) {
    const tenPart = Math.floor(num / 10);
    const onePart = num % 10;

    result += tens[tenPart];

    if (onePart !== 0) {
      result += ` ${ones[onePart]}`;
    }
  } else if (num >= 10 && num <= 19) {
    result += teens[num - 10];
  } else if (num >= 1 && num <= 9) {
    result += ones[num];
  }

  return result;
};
