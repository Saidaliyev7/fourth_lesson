const formElement = document.querySelector('#modal .modal-content form');

formElement.addEventListener('submit',function(event){
    event.preventDefault();
    const inputHolder=document.querySelectorAll('.input-holder');
    [...inputHolder].map(inputClass=>{

        !inputClass.classList.contains('invalid')?inputClass.classList.add('invalid'):inputClass.classList.remove('invalid');
   
    })
})