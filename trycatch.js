// const nome ="Lizeth"; // define a variável

// try{ // identifica um bloqueo
//     nome = "Silva";
// } catch (erro) { // ela e una otra variável
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. veja o error:" + erro); // se manda un mensaje de error.
// }

// console.log("teste");

// nome = "lizeth"; //cuando voce tenta com codigo ilegal el pone un restrinção

// console.log(Teste2);

function FazerLogin(){
    let usuario = document.getElementById("txtlogin"); // declaraçõa do usuario
    let senha = document.getElementById("txtSenha"); // declaração da senha
    try{ // algoritmo tenta 
        if (usuario.value !== "usuario123") { // verifica el valor que fue digitado por o usuario. cuando hay esclamacion hace referencia que es diferete.
            usuario.focus();
            throw new Error("Erro: Usuários inválido."); // throw new Error es generico 
        }
        if (senha.value !== "senha123") { // !== significa que es totalmente diferente, != es diferente pero comperte algo en comun.
            senha.focus();
            throw new Error("Erro: Senha incorreta."); // relizar un login con sucesso
        }
        console.log("login realizado com sucesso.");
    } catch(erro) { // captura los errores y los envia a la variavel "erro"
        console.error(erro.message);
  }
}    // fecha chave bloque de codigos para fazer login