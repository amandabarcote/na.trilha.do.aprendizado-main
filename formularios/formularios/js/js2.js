function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
        alert(nome.value+" agradecemos o seu contato")
    ok=true}
        else{
            alert("Digite um e-mail valido")
            ok=false
        }
    }
    else{
        alert("preencha o seu nome completo")
        ok=false
    }
    return ok
}