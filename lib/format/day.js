const day = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 'd') {
    return countdown.days;
  } else {
    if (countdown.days < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { day };
