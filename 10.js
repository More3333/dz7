const words = ['бегемот', 'белка', 'верблюд']
const vopros = ['У него огромный рот,\n' +
'Он зовется …', 'По деревьям скок-скок,\n' +
'А орешки щёлк-щёлк.', 'Зверь я горбатый,\n' +
'А нравлюсь ребятам.']
let word = []
let secret = []
$(document).ready(start)
function start(){
    let r = Math.floor(Math.random() * 3)
    word = words[r].split('')
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        secret.push('*')
    }
    console.log(secret)
    $('#vopros').text(vopros[r])
    $('#slovo').text(secret.join(' '))

}

$('#but').click(quess)

function quess(){
    let bukva = $('input').val()
    for (w in word){
        if (bukva === word[w]){
            console.log('est')
            secret[w] = bukva
        }
    }
 $('#slovo').text(secret.join(' '))
   console.log(word)
   console.log(secret)
    proverka()
}
    function proverka(){
        if (secret.indexOf('*') == -1){
            console.log('win')
            $('input').prop('disabled', true)
        }
    }
    function f1(x){
    $('#but1').html('<h2>'+ x +'</h2> <img src="avto.jpg" width="600px">')
    //alert(x)
}
$('#but1').click(function () {
    f1('Твой приз: Автомобиль ')
})

