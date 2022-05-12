import { data } from './APIdata.js';

export class Board {
  constructor() {
    this.inputName = document.querySelector('#userName');
    this.userScore = document.querySelector('#userScore');
    this.submit = document.querySelector('#submit');
  }

  addData = () => {
    this.submit.addEventListener('click', () => {
      if (this.inputName.value && this.userScore.value) {
        data.setData(this.inputName.value, this.userScore.value);
        this.inputName.value = '';
        this.userScore.value = '';
      }
    });
  }
}

export const newData = new Board();
