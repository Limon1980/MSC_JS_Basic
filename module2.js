var many = parseFloat(prompt('сколько у вас с собой есть денег?'))
var aple = parseFloat(prompt('сколько кг вы купили яблок?'))
var baton = parseFloat(prompt('сколько вы купили батонов хлеба?'))
var all_aple = aple*parseFloat(prompt('сколько   стоит один кг яблок  ?'))
var all_baton = baton*parseFloat(prompt('сколько стоит один батон ?'))
many = many - (all_aple+all_baton)
var raz = many > 0
document.body.innerHTML = raz