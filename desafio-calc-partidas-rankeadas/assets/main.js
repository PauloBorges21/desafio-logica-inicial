function calcularNivel()
{
    const vitorias = document.getElementById('vitorias').value;
    const derrotas = document.getElementById('derrotas').value;

    let nivel ="";
    let saldo ="";

   campoValida = validaCampo(vitorias , derrotas);

   console.log(vitorias);
   console.log(derrotas);

   console.log(campoValida);
   
if(campoValida){
   saldo = calculadoraRankeada (vitorias , derrotas);
   nivel = verificaNivel(saldo);
   Totalporcentagem = porcentagem(vitorias , derrotas).toFixed(2);
    alert("O Herói tem de saldo de ** "+saldo+ " ** está no nível de ** "+nivel +" ** , Sua Porcentagem de Vitórias é ** " + Totalporcentagem + " % **")
}
   
}
function validaCampo(vitorias ,derrotas )
{
    if(vitorias.length <= 0 || derrotas.length <= 0)
    {
        alert("Digite nos campos um valor válido")
        return false;
    }

    return true;
}

function porcentagem (vitorias , derrotas)
{
    let total = calculadoraRankeada (vitorias , derrotas);
    return (total * 100  )  / vitorias;
}

function calculadoraRankeada (vitorias , derrotas)
{
    return vitorias - derrotas;
}

function verificaNivel(vitorias)
{
    if(vitorias <= 10)
    {
        nivel = "Ferro" ;

    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze" ;

    }else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata" ;
        
    }else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro" ;
        
    }else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante" ;
        
    }else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário" ;
    } else {
        nivel = "Imortal" ;
    }

    return nivel;
}

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal