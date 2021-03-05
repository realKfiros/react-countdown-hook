import { useState } from 'react';
import { useCountdown } from '@kfiros/react-countdown-hook';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  AppBar,
  Container,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

function App() {
  const [finishTime, setFinishTime] = useState(new Date(2022, 2, 11));
  const [format, setFormat] = useState('{h} hours, {m} minutes, {s} seconds');
  const { countdown, formattedText } = useCountdown({
    finishTime,
    format,
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" anchor="start">
            react-countdown-hook
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <DateTimePicker
          value={finishTime}
          onChange={setFinishTime}
          ampm={false}
          label="Choose a date"
          fullWidth
        />
        <TextField
          value={format}
          onChange={(event) => setFormat(event.target.value)}
          label="Choose a format"
          fullWidth
        />
        <Input
          variant="outlined"
          label="Formatted text"
          value={formattedText}
          fullWidth
        />
        <Input
          multiline
          rows={8}
          variant="outlined"
          label="Countdown object"
          value={JSON.stringify(countdown, null, 4)}
          fullWidth
        />
      </Container>
    </MuiPickersUtilsProvider>
  );
}

const Input = styled(TextField)`
  margin-top: 20px;
`;

export default App;
