let pessoas = []
let registroNovapessoa = "Sujeto"
let contador = 0;

while(registroNovapessoa==="Sujeto"){
    alert(`Registro da pessoa ${contador+1}`)
    let nome = prompt("Nome da pessoa")
    let idade = Number(prompt("Idade da pessoa"))

    let registrando = new pessoa(nome, idade)

    pessoas.push(registrando)

    registroNovapessoa = prompt("Deseja registrar uma nova pessoa? (S/N)")

    contador +=1
}

PessoaMaior(pessoas)

function PessoaMaior(pessoas){
    ordenar(pessoas)
    console.log(` A pessoa com maior idade é  ${pessoas[0].nome} e tem ${pessoas[0].idade} anos`)
}


function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

function ordenar(pessoas){
    pessoas.sort((a,b)=>{

        if(a.idade < b.idade){
            return 1
        }else if(a.idade > b.idade){
            return -1
        }else{
            return 0
        }

    })

    console.log(pessoas)

}