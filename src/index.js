const isGoodDog = true; // Example value, replace with your own logic

function handleClick() {
  // Implement your logic for handling the click event here
}

const buttons = document.querySelector('#good-dog-button');
button.addEventListener('click', handleClick);
fetch('http://localhost:3000/pups', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(isGoodDog)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
const button = document.querySelector('#good-dog-button');
button.addEventListener('click', handleClick);
