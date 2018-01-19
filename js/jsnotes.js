var item = []
var contaItem = 0

function incluirCampo() {
    item.push('<label for="item__title" class="item__title">ITEM ' + (contaItem + 1) + '</label><input type="text" id="item__text" class="item__text"><i class="far fa-minus-square item__minus" onclick="excluirCampo(' + contaItem + ')"></i>');
    listarCampos();
}


function listarCampos() {
    // document.getElementById('item').innerHTML = item;
    // contaItem++;
    // console.log(item);
    document.getElementById('item').innerHTML = null;
    for (contaItem = 0; contaItem < item.length; contaItem++) {
        document.getElementById('item').innerHTML += item[contaItem];
    }
    console.log(item);
};
function excluirCampo(contaItem) {
    document.getElementById('item').innerHTML = null;
    item.splice(contaItem, 1);
    listarCampos();
};