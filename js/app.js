let totGeral;
limpar();

function adicionar () {
    let produto=document.getElementById('produto').value;
    let nomeProduto=produto.split('-')[0];
    let valorUnid=produto.split('R$')[1];
    let quantidade=document.getElementById('quantidade').value;
    let preco=quantidade*valorUnid;

    if (!produto || produto.trim()==='') {
        alert('Selecione um Produto Válido!');
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Escolha uma quantidade de produtos antes de adicionar ao carrinho!');
        return;
    }

    let carrinho=document.getElementById('lista-produtos');
    carrinho.innerHTML=carrinho.innerHTML+`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    totGeral=totGeral+preco;
    let total=document.getElementById('valor-total');
    total.textContent=`R$ ${totGeral}`;
    quantidade=document.getElementById('quantidade').value='';
}

function limpar () {
    totGeral = 0;
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}