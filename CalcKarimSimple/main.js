    let num1;
    let num2;
    let netice;
    function netice_hesabla() 
    {
    document.getElementById("cavab_goster").value=netice;
    }
    
    document.getElementById("vurma").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    netice = num1 * num2;
}

    document.getElementById("bolme").onclick = function () {
    // document.getElementById("neticee").value = eded1 / eded2;
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    netice = num1 / num2;
}

    document.getElementById("toplama").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    netice = num1 + num2;
}

    document.getElementById("cixma").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    netice = num1 - num2;
}

