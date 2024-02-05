/* variáveis 
espaço de memória para armazenar qualquer coisa
3 jeitos de criar:
-var / jeito antigo - NÃO USE
-let -> você pode alterar valor
-const -> constante, não pode alterar valor 
funções -> um trecho de codigo somente executado qdo chamado!
*/
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-350px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"

}






