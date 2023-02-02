function carregar(){
    window.alert("Esta pronto?")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //msg.innerHTML = `${hora}:${minutos}`
    if (hora <= 12){
        img.src ="bubasauro.png"
        msg.innerText = `<strong>${hora}:${minutos}<strong><br> Hora de Procurar Bubasauros`
        document.body.style.background = "#FAE586"
    }else if (hora <= 18){
        img.src = "charmander.png"
        msg.innerHTML = `<strong>${hora}:${minutos}</strong><br> Hora de Procurar Charmanders`
        document.body.style.background = "#C16B15"
    }else{
        img.src = "gengar.png"
        msg.innerHTML = `<strong>${hora}:${minutos}</strong><br> Hora de Procurar Gengars`
        document.body.style.background = "#343754"
    }
}