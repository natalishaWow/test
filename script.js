
var filesExt = ['jpg', 'gif', 'png']; 
$('input[type=file]').change(function(){
    var parts = $(this).val().split('.');
    if(filesExt.join().search(parts[parts.length - 1]) != -1){ 
        var btn = document.querySelector('#button');
          btn.addEventListener('click', function (event) {
            let forminfo = {     
            animation: document.getElementById("animation").value, 
            image: document.getElementById("uploadImage").files[0],
            url: document.getElementById("url").value       
          }; 
          var a = document.createElement("a");
        var img = document.createElement("img"); 
            a.href=  forminfo.url;
            var oFReader = new FileReader();
            oFReader.readAsDataURL(forminfo.image);
            oFReader.onload = function (oFREvent) {
                img.src = oFREvent.target.result; 
                a.innerHTML=img.outerHTML;  
                if(forminfo.animation=="normal"){
                    a.classList.add("right");
                }
                else
                {
                    a.classList.add("left"); 
                }
            }; 
            var form = document.getElementById("form");
            lastElement = form.lastElementChild;
            form.insertBefore(a, lastElement.nextSibling);
          
        });
     
           
       
    } else {
        alert('select a picture!');
       
    }
});   

