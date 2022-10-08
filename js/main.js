const getAdvices = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data;
};

function generateAdvice() {
  const dice = document.querySelector('.dice-container');

  dice.classList.add('dice-loading');

  const h1 = document.getElementById('advice-id');
  const p = document.getElementById('advice-text');

  h1.innerText = '';
  p.innerText = '';

  getAdvices()
    .then(data => {
      h1.innerText = `ADVICE #${data.slip.id}`;
      p.innerText = `"${data.slip.advice}"`;
    })
    .then(none => dice.classList.remove('dice-loading'))
    .catch(err => console.log('could not fetch:', err.message));
}
