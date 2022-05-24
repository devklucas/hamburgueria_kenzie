Componentes necessarios

> App: Responsável por centralizar os componentes e administrar o compartilhamento de informações por props;
> ProductsList: Responsável por renderizar a lista de produtos;
> Product: Responsável por apresentar as informações do produto: nome, categoria e preço, além de um button para adicionar ao carrinho;
> Cart: Responsável por apresentar os produtos inseridos no carrinho e o valor total da compra.

Funcoes
> showProducts: Responsável por filtrar (use o método filter) e mostrar apenas os produtos com o mesmo texto escrito no input de busca;
> handleClick: Esta função deve receber por parâmetro o id e usar o método find para encontrar o item no array com o mesmo id do produto e será responsável por adicionar o produto selecionado no state currentSale.