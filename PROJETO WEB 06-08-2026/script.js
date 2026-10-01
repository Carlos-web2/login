function cadastrarNome(){
    let nome = document.getElementById('inputName').value 
    let idade = document.getElementById('numberIdade').value 
    let cidade = document.getElementById('cidadeId').value 
    let cpf = document.getElementById('cpfId').value
    let mae = document.getElementById('nomeMae').value 
    
    document.getElementById('exibidorTexto').innerHTML = "Seu nome é: " + nome + " E sua idade é: " + idade + " anos" + " Cidade Natal: " + cidade + "  Seu CPF: " + cpf + " Sua Mãe: " + mae 
    
    if (idade >= 18){
        document.getElementById('idadeTexto').innerHTML = "Você é maior de idade"
    }
    else{
        document.getElementById('idadeTexto').innerHTML = "Você é menor de idade"
    }
}