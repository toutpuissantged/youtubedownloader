

var btnDelete = document.getElementById('clear');
var inputFocus = document.getElementById('inputFocus');
btnDelete.addEventListener('click', function(e)
{
  e.preventDefault();
  inputFocus.value = ''
})
document.addEventListener('click', function(e)
{
  if (document.getElementById('first').contains(e.target))
  {
    inputFocus.classList.add('isFocus')
  }
  else
  {
    
    inputFocus.classList.remove('isFocus')
  }
});
