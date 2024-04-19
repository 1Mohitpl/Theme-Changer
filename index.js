const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
        case 'green':
          body.style.backgroundColor = e.target.id;
          break;
        case 'Blue':
          body.style.backgroundColor = e.target.id;
          break;
        case 'purple':
          body.style.backgroundColor = e.target.id;
          break;
        case 'yellow':
          body.style.backgroundColor = e.target.id;
          break;
        default:

          break;
      }


  });

});