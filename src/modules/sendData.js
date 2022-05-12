import { data } from './APIdata.js';

export class Board {
  constructor() {
    this.inputName = document.querySelector('#userName');
    this.userScore = document.querySelector('#userScore');
    this.submit = document.querySelector('#submit');
    this.form = document.querySelector('.score-form');
  }

  addData = () => {
    this.submit.addEventListener('click', () => {
      if (this.inputName.value && this.userScore.value) {
        if (/^\d+$/.test(this.userScore.value)) {
          this.userScore.style = 'outline: 1px solid green;';
          data.setData(this.inputName.value, this.userScore.value);
          this.form.reset();
          this.removeMessege();
        } else {
          this.userScore.style = 'outline: 1px solid red;';
        }
      }
    });
  }

  getMessage = (msg) => {
    const p = document.createElement('p');
    p.className = 'successMsg';
    p.textContent = msg.result;
    this.userScore.parentNode.appendChild(p);
  }

  removeMessege = () => {
    setTimeout(() => {
      const successMsg = document.querySelector('.successMsg');
      this.userScore.parentNode.removeChild(successMsg);
    }, 3000);
  }
}

const message = data.getMsg;
export const newData = new Board();
newData.getMessage(message);
