async function getAnswer() {
  const question = document.getElementById('question').value;
  const response = await fetch('/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: question })
  });

  if (!response.ok) {
    alert('Network response was not ok');
    return;
  }

  const data = await response.json();
  document.getElementById('answer').innerHTML = data.answer;
}
