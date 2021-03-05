const second = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 's') {
    return countdown.seconds;
  } else {
    if (countdown.seconds < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { second };
