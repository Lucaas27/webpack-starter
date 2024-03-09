import axios from 'axios';

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await axios.get('https://icanhazdadjoke.com/', config);
  return (document.getElementById('joke').innerHTML = res.data.joke);
}

export default generateJoke;
