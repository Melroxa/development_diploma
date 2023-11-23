document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click',
        function() {
            document.querySelector('.header-section').classList.toggle('open')
        })
})

    document.getElementById('hider').onclick = function() {
      document.getElementById('messages').hidden = true;
      document.getElementById('hider').hidden = true;
    }

   /* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionUser() {
  document.getElementById("myDropdownUser").classList.toggle("show");
}

