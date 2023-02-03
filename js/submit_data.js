document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {};
  
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  console.log(JSON.stringify(data));
  const response = await fetch('https://www.wikipedia.org/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('Form data was sent successfully.');
  } else {
    console.error('Failed to send form data.');
  }
});