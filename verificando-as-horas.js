function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA! 
        img.src = 'https://i.postimg.cc/WhrPYLM8/Beige-Simple-Round-Photo-Valentines-Card-20250518-122318-0000.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'https://i.postimg.cc/XZt8zhKK/Beige-Simple-Round-Photo-Valentines-Card-20250518-122353-0000.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'https://i.postimg.cc/q6TGk35z/Beige-Simple-Round-Photo-Valentines-Card-20250518-122425-0000.png'
        document.body.style.background = '#515154'
    }
}
