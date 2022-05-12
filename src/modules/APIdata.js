export class DataAPI {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NIsz8fkt26lmn27CsIOPQ/scores/';
    this.scoreList = document.querySelector('.scores-content');
  }

  getData = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    this.displayData(data.result);
  }

  setData = async (player, newScore) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        user: player,
        score: newScore,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.getMsg(data);
      });
  }

  getMsg = (Msgdata) => Msgdata;

  displayData = (data) => {
    data.sort((a, b) => b.score - a.score);
    data.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'score';
      const span = document.createElement('span');
      span.className = 'player';
      span.textContent = item.user;
      li.appendChild(span);
      const span2 = document.createElement('span');
      span2.className = 'scoreValue';
      span2.textContent = item.score;
      li.appendChild(span2);
      this.scoreList.appendChild(li);
    });
  }
}

export const data = new DataAPI();