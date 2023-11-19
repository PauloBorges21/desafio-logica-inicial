function verificarNivel()
{
    let xp = document.getElementById('xp').value;

    let nome = document.getElementById('nome').value;

    let nivel ="";
    let nomeValido ="";

   nomeValido = validaNome(nome);
   console.log(nomeValido)
if(nomeValido){
    if(xp <= 1000)
    {
        nivel = "Ferro" ;

    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze" ;

    }else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata" ;
        
    }else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro" ;
        
    }else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina" ;
        
    }else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente" ;
        
    }else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal" ;
        
    } else {
        nivel = "Radiante" ;
    }
    alert("Nosso Herói "+nome +" " +"Seu Ranking é "+ nivel)
}
   
}
function validaNome(string)
{
    if(string.length < 3)
    {
        alert("Digite seu nome Herói")
        return false;
    }

    return true;
}

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante