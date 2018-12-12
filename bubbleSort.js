var n = document.getElementById("cantidad_numeros");
var contenedor = document.getElementById("principal");
var arrayL, p, p_titulo, input;
var arreglo = [];
var boton = document.getElementById("botoncito");
boton.addEventListener("click", organizar)


n.addEventListener("keyup", evento);

function evento(cosa)
{
    if(cosa.keyCode == 13)
    {
        arrayL = n.value;
        if(arrayL.match(/^\d{1,5}$/)) //Expresion regular para validar 5 digitos como maximo
        {
            alert('Pusiste ' + arrayL + ' digitos!');
            p = document.createElement("p");
            p.textContent = "Por favor ingresa los numeros a organizar:";
            contenedor.appendChild(p);
            for(var i = 0; i < arrayL; i++)
            {
                p_titulo = document.createElement("p");
                p_titulo.textContent = "Elemento " + (i + 1);
                contenedor.appendChild(p_titulo);
                input = document.createElement("input");
                input.type = "text";
                input.id = "Elemento" + i;
                contenedor.appendChild(input);
            }
            contenedor.appendChild(document.createElement("p"));
            contenedor.appendChild(document.createElement("br"));
            boton.hidden = false;
        }
        else
        {
            alert("Hey! No pusiste digitos! >:c");
        }
    }
}

function organizar()
{

    for(var i = 0; i < arrayL; i++)
    {
        var c = document.getElementById("Elemento" + i);
        var d = c.value;
        arreglo[i] = d;
    }

    for (var i = 0; i < arreglo.length -1; i++)
    {
        for(var j = 0; j < arreglo.length -1; j++)
        {
            if(parseInt(arreglo[j]) > parseInt(arreglo[j+1]))
            {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;
            }
        }
    }

    console.log("el arreglo ordenado es: " + arreglo);

    let p = document.createElement("p");
    p.textContent = "El arreglo ordenado es: " + arreglo;
    document.body.appendChild(p);
    boton.hidden = true;
}