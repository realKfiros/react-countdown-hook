import { day } from './day';
import { hour } from './hour';
import { minute } from './minute';
import { month } from './month';
import { second } from './second';
import { year } from './year';

const formatter = (countdown, format = 'yy') => {
  let formattedText = '';
  let doFormat = false;
  for (let i = 0; i < format.length; i++) {
    if (doFormat) {
      switch (format[i]) {
        case '}':
          formattedText += '';
          doFormat = false;
          break;
        case 'y':
          formattedText += year(countdown, format, i);
          break;
        case 'M':
          formattedText += month(countdown, format, i);
          break;
        case 'd':
          formattedText += day(countdown, format, i);
          break;
        case 'h':
          formattedText += hour(countdown, format, i);
          break;
        case 'm':
          formattedText += minute(countdown, format, i);
          break;
        case 's':
          formattedText += second(countdown, format, i);
          break;
        default:
          formattedText += format[i];
          break;
      }
    } else {
      if (format[i] === '{') {
        doFormat = true;
      } else {
        formattedText += format[i];
      }
    }
  }
  return formattedText;
};

export { formatter };
