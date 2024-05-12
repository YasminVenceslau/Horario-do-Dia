


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sad = window.document.getElementById('saud')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são Exatamente ${hora}:${minuto} do dia`
    
    
    if (hora >= 0 && hora < 12 ){
        //bom dia
        sad.innerHTML=('bom dia')
        img.src=('imagens/manha.jpg')
        document.body.style.background = 'gold'
    }else if(hora < 18){ //boa tarde
        sad.innerHTML=('boa tarde')
        img.src=('imagens/tarde (2).jpg')
        document.body.style.background = 'orange'
    }else{ //boa noite
    sad.innerHTML=('Boa noite')
    img.src=('imagens/noite.jpg')
    document.body.style.background = 'black'
    }

}