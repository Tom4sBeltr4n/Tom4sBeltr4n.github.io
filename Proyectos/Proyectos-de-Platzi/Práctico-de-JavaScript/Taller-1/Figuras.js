function perCua()
{
    var inpCua = document.getElementById("ladCua");
    var valLadCua = inpCua.value;
    let texResPerCua=document.getElementById("valPerCua");
    texResPerCua.innerHTML=(valLadCua*4);
};
function áreCua()
{
    var inpCua = document.getElementById("ladCua");
    var valLadCua = inpCua.value;
    let texResÁreCua=document.getElementById("valÁreCua");
    texResÁreCua.innerHTML=(valLadCua**2);
};

function altTri()
{
    var inpTri1 = document.getElementById("ladTri1");
    var valLadTri1 = parseFloat(inpTri1.value);
    var inpTri2 = document.getElementById("ladTri2");
    var valLadTri2 = parseFloat(inpTri2.value);
    var inpTri3 = document.getElementById("ladTri3");
    var valLadTri3 = parseFloat(inpTri3.value);
    if(valLadTri1!=valLadTri2 && valLadTri3!=valLadTri1 && valLadTri3!=valLadTri2)
    {
        alert("Este triángulo no es isósceles, es escaleno")
    } else if(valLadTri1==valLadTri2 && valLadTri2==valLadTri3 && valLadTri1 == valLadTri3)
    {
        alert("Este triángulo es equilátero, no operaré con él")
    } else
    {
        let texResAltTri=document.getElementById("valAltTri");
        let lados = [];
        lados.push(valLadTri1);
        lados.push(valLadTri2);
        lados.push(valLadTri3);
        lados.sort(function(a,b){return a-b});
        if(lados[0]==lados[1])
        {
            var altura = (Math.sqrt((lados[1]**2)-(((lados[2])/2)**2))).toFixed(2);
        }else
        {
            var altura = (Math.sqrt((lados[1]**2)-(((lados[0])/2)**2))).toFixed(2);
        }
        texResAltTri.innerHTML=altura;
    }
}