let sbar=document.getElementById('sbar')

function req (){
     
    $.ajax({
       url : 'http://127.0.0.1:5000/search',
       data :'query=gedeon',
       dataType : 'json',
       success : function(reponse, statut){
           console.log('Done')
       },
    });
   
}

sbar.addEventListener('keydown',(e)=>{
    if (e.key==="Enter"){
        e.preventDefault()
        req()
    }
})



