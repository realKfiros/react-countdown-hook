const year = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 'y') {
    return countdown.years;
  } else {
    if (countdown.years < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { year };
