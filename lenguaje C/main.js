var div=[];
for (var i=0;i<8;i++)
{
    div[i] = document.getElementById(("link"+i));
}

/*funcion para los botones*/

function switching(enlace)
{
    for (var i=0;i<8;i++)
    {
        if (enlace == i){
            div[i].style.display = "block";
        }else{
            div[i].style.display = "none";
        }
    }

}

var drop = document.getElementsByClassName("dropdown-btn");
    
    for (i = 0; i <drop.length; i++)
    {   //comprueba que boton es el que se le ha hecho click
        drop[i].addEventListener("click", function() 
        {
            //this.classList.toggle("active");// lo cambia a la clase active
            var dropContent = this.nextElementSibling;
            if (dropContent.style.display === "block"){
                dropContent.style.display = "none";
            }else{
                dropContent.style.display = "block";
            }
        });
        
    }