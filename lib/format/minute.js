const minute = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 'm') {
    return countdown.minutes;
  } else {
    if (countdown.minutes < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { minute };
