var div=[];
for (var i=1;i<=10;i++)
{
    div[i] = document.getElementById(("paso"+i));
}

/*funcion para los botones*/

function switching(enlace)
{
    for (var i=1;i<=10;i++)
    {
        if (enlace == i){
            div[i].style.display = "block";
        }else{
            div[i].style.display = "none";
        }
    }

}