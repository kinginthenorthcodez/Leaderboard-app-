import './style.css';
import { data } from './modules/APIdata.js';
import { newData } from './modules/sendData.js';

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  console.log('click');
  window.location.reload();
});

window.onload = () => {
  data.getData();
  newData.addData();
};
