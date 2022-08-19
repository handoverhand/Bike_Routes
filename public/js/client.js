const NewFormAdded111 = document.querySelector('.NewFormAdded111');
const Idforserver = document.querySelector('#Idforserver');
const commentBox = document.querySelector('.commentBox');
const coomentMessageNew = document.querySelector('.coomentMessageNew');

if (NewFormAdded111) {
    NewFormAdded111.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.commentInput.value)
    console.log(Idforserver.value)
    const id = 1;
    // if (commentInput && gradeInput) {
      const response = await fetch(`/bikeroutes/${id}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          comment: event.target.commentInput.value,
          grade: event.target.gradeInput.value,
        }),
      });
      console.log('response', response);
      const data = await response.text();
      console.log('data', data);
      NewFormAdded111.reset();
      document.body.insertAdjacentHTML('beforeend', data);
    // } else {
    //     coomentMessageNew.innerHTML = 'Заполните все поля';
    // }
  });
}
