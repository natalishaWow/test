var filesExt = ['jpg', 'gif', 'png']; 
$('input[type=file]').change(function(){
    var parts = $(this).val().split('.');
    if(filesExt.join().search(parts[parts.length - 1]) != -1){ 
       document.getElementById("button").click(function(){ 
           var a = document.createElement("a");
        var img = document.createElement("img"); 
            a.href= document.getElementById("url").value;
            var oFReader = new FileReader();
            oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
            oFReader.onload = function (oFREvent) {
                img.src = oFREvent.target.result; 
                a.innerHTML=img.outerHTML;  
            }; 
            var form = document.getElementById("form")
            lastElement = form.lastElementChild;
            form.insertBefore(a, lastElement.nextSibling);
            });
    } else {
        alert('select a picture!');
    }
});   

