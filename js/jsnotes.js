let contaItem = 0
function incluirItem() {
    contaItem++    
    let item = '<label for="item__title" class="item__title">ITEM ' + contaItem + '</label><input type="text" id="item__text" class="item__text"><i class="far fa-minus-square item__minus"></i>';
    document.getElementById('item').innerHTML += item;
}