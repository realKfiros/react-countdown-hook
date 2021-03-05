# react-countdown-hook

[![npm latest](https://img.shields.io/npm/v/@kfiros/react-countdown-hook?style=flat-square](https://www.npmjs.com/package/@kfiros/react-countdown-hook)]  
A React hook that gets a date object and returns a countdown to that date.

## Install

```sh
npm i @kfiros/react-countdown-hook
```

## Features

- Format the countdown however you want
- Get an object that includes all the data of the countdown
- Run a function when the countdown ends
- Uses [date-fns](https://date-fns.org/)

## Props

| Name       | Description                                  | Type     | Default      | Example              |
| ---------- | -------------------------------------------- | -------- | ------------ | -------------------- |
| finishTime | The time that we should count to             | Date     | **required** | [example](#function) |
| format     | The format of the formatted string           | String   | ''           | [example](#format)   |
| onFinish   | A function that runs when the count finishes | function | () => {}     | [example](#function) |

## Examples

### Getting formatted countdown string<a name="format"></a>

You can get a formatted countdown string in a given format.  
Only characters inside curly brackets will be formatted, if you want to add regular English - do it outside of the curly brackets.

#### Examples of valid formats

- `{hh:mm:ss}`
- `{y} years, {M} months, {d} days, {h} hours, {m} minutes, {d} days`

#### Format patterns

| Unit   | Pattern | Result examples |
| ------ | ------- | --------------- |
| Second | s       | 0, 6, 9, 42     |
|        | ss      | 00, 06, 09, 42  |
| Minute | m       | 0, 6, 9, 42     |
|        | mm      | 00, 06, 09, 42  |
| Hour   | h       | 0, 6, 9, 42     |
|        | hh      | 00, 06, 09, 42  |
| Day    | d       | 0, 6, 9, 42     |
|        | dd      | 00, 06, 09, 42  |
| Month  | M       | 0, 6, 9, 42     |
|        | MM      | 00, 06, 09, 42  |
| Year   | y       | 0, 6, 9, 42     |
|        | yy      | 00, 06, 09, 42  |

#### Example usage

```javascript
import React from 'react';
import { useCountdown } from '@kfiros/react-countdown-hook';

const App() {
  const { formattedText } = useCountdown({
    finishTime: new Date(2022, 2, 11),
    format: "{hh:mm:ss}"
  });

  return (
    <span>{formattedText}</span>
  );
}

export default { App };
```

### Getting an object

You can also get a [date-fns duration object](https://date-fns.org/v2.19.0/docs/Duration) that includes all the data of the countdown.

#### Example usage

```javascript
import React from 'react';
import { useCountdown } from '@kfiros/react-countdown-hook';

const App() {
  const { countdown } = useCountdown({
    finishTime: new Date(2022, 2, 11)
  });

  return (
    <span>{JSON.stringify(countdown)}</span>
  );
}

export default { App };
```

### Invoke a function on finish<a name="function"></a>

```javascript
import React, { useRef } from 'react';
import { Text } from 'react-native';
import Confetti from 'react-native-confetti';
import { useCountdown } from '@kfiros/react-countdown-hook';

const App() {
  const confetti = useRef(null);
  const { countdown } = useCountdown({
    finishTime: new Date(2022, 2, 11),
    onFinish: () => confetti.startConfetti();
  });

  return (
    <Confetti ref={confetti}>
      <Text>{JSON.stringify(countdown)}</Text>
    </Confetti>
  );
}

export default { App };
```

## [Demo](https://realkfiros.github.io/react-countdown-hook/)

## About me

[![Follow on Twitter](https://img.shields.io/twitter/follow/realKfiros?style=social)](https://twitter.com/realKfiros)  
Feel free to DM me on Twitter.

## License

```
Copyright (c) 2021 Kfir Nevo
```

This project is licensed under the terms of the MIT license. See the [license](LICENSE) file.
