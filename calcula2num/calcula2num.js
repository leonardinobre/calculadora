function calcular(){
    var fnum1 = window.document.getElementById('txtnum1')
    var fnum2 = window.document.querySelector('input#txtnum2')
    var res = window.document.getElementById('res')

    var num1 = Number(fnum1.value)
    var num2 = Number(fnum2.value)

    var fop = window.document.getElementsByName('operacao')
    
    var resultado = 0

    res.innerHTML = ' '

    if (fop[0].checked){
       
        resultado = num1 + num2
        res.innerHTML = `A soma entre ${num1} e ${num2} é ${resultado}`
       
       
    } else if (fop[1].checked){

        resultado = num1 * num2
        res.innerHTML = `O produto de ${num1} por ${num2} é ${resultado}`

    } else if (fop[2].checked){
        
        resultado = num1 - num2
        res.innerHTML = `A diferença entre ${num1} e ${num2} é ${resultado}`

    } else if (fop[3].checked){
  
        resultado = num1 / num2
        res.innerHTML = `O divisão de ${num1} por ${num2} resulta em ${resultado}`

    } else if (fop[4].checked){

        resultado = num1 % num2
        res.innerHTML = `O resto da divisão de ${num1} por ${num2} é ${resultado}`


    } else if (fop[5].checked){

        resultado = num1 ** num2
        res.innerHTML = `A ${num2}ª potência de ${num1} é ${resultado}`

    } else if (fop[6].checked){

        if (num1 >= 0 || num2 % 2 != 0){

            resultado = num1 ** (1 / num2)
            res.innerHTML = `A raiz ${num2}ª de ${num1} é ${resultado}`
    
        } else if (num1 < 0 && num2 % 2 == 0){

            window.alert(`Não existe raiz ${num2}ª REAL para ${num1}`)
        }

    } else if (fop[7].checked){ 
        
        if (num1 <= 0 || num2 <= 0){

            window.alert('Não há um triângulo nestas condições!')

        } else if (num1 > 0 && num2 > 0){
        
        resultado = ((num1 ** 2) + (num2 ** 2)) ** (1/2)
        res.innerHTML = `A hipotenusa de um triângulo retângulo com os catetos ${num1} e ${num2} é ${resultado}`
        }
        
    } else{
        window.alert('Digite os números e clique em Calcule para calcular!')
    }

   
}
