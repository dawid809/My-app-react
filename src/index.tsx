import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/mainPage/MainPage';
import {Reset} from 'styled-reset';



ReactDOM.render(
  <>
  <Reset></Reset>
  <MainPage></MainPage>
  </>,
  document.getElementById('root')
);

