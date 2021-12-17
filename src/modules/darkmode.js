// eslint-disable-next-line
import Darkmode from 'darkmode-js';

const options = {
  bottom: '64px',
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#fff',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: false,
  label: '🌓',
  autoMatchOsTheme: true,
};

function startDark(options) {
  new Darkmode(options).showWidget();
}

startDark(options);
