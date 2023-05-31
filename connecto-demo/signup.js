const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // display the data
  const result = document.getElementById('result');
  result.innerHTML = `Name: ${data.name}<br>Email: ${data.email}`;
});
