# categories_and_products-nodejs

## Descrição:

Nesse projeto foi desenvolvido um serviço de back-end responsável por gerenciar produtos e suas categorias.

## Tecnologias utilizadas:

- NodeJS
- ExpressJS
- Jest
- bcrypt
- supertest
- sucrase

## Endpoints do serviço:

<table>
    <thead>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Responsabilidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/categories</td>
            <td>Criação de categorias</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/categories</td>
            <td>Lista todas as categorias</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/categories/:id</td>
            <td>Retorna os dados de uma categoria</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/categories/:id</td>
            <td>Atualiza os dados de uma categoria</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/categories/:id</td>
            <td>Deleta categorias do banco</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/products</td>
            <td>Criação de produtos</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/products</td>
            <td>Lista todos os produtos</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/products/:id</td>
            <td>Retorna os dados de um produto</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/products/:id</td>
            <td>Atualiza os dados de um produto</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/products/:id</td>
            <td>Deleta produtos do banco</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/products/category/:category_id</td>
            <td>Retorna os dados dos produtos pertencentes a categoria dona do id</td>
        </tr>
    </tbody>
</table>

## Para inicializar a aplicação:

````
yarn dev
````
