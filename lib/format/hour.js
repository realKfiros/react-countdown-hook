const hour = (countdown, format, index) => {
  if (!format[index + 1] || format[index + 1] !== 'h') {
    return countdown.hours;
  } else {
    if (countdown.hours < 10) {
      return '0';
    } else {
      return '';
    }
  }
};

export { hour };
