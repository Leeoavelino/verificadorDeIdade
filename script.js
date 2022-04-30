function verificar(){
    
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('ERRO')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade < 18){

                img.setAttribute('src', 'menino.jpg')

            }
            else if(idade < 50){
                img.setAttribute('src', 'adulto.jpg')
            

            }

            else{
                img.setAttribute('src', 'idoso.png')

            }

        }
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade < 18){
                img.setAttribute('src', 'menina.jpg')

            }
            else if(idade < 50){
                img.setAttribute('src', 'adulta.png')

            }

            else{
                img.setAttribute('src', 'idosa.jpg')
                
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }





}