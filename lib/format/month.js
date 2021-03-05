const month = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 'M') {
    return countdown.months;
  } else {
    if (countdown.months < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { month };
