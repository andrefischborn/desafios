// Função para extrair informações de um produto de uma página web
function scrapeProductInfo(url) {
    let productInfo = {}; // Objeto onde armazenaremos as informações extraídas
    
    // Extrai as informações do produto usando seletor CSS específico
    let produtoElement = document.querySelector("#product > div > div > div.card-section > div > div.medium-8.small-12.columns > h2");
    productInfo['Produto'] = produtoElement ? produtoElement.innerText : "Informação não disponível";

    let marcaElement = document.querySelector("#field_brands_value");
    productInfo['Marca'] = marcaElement ? marcaElement.innerText : "Informação não disponível";

    let quantidadeElement = document.querySelector("#field_quantity_value");
    productInfo['Quantidade'] = quantidadeElement ? quantidadeElement.innerText : "Informação não disponível";

    let categoriasElement = document.querySelector("#field_categories_value");
    productInfo['Categorias'] = categoriasElement ? categoriasElement.innerText : "Informação não disponível";

    let paisesElement = document.querySelector("#field_countries_value");
    productInfo['Países onde vende'] = paisesElement ? paisesElement.innerText : "Informação não disponível";

    let ingredientesElement = document.querySelector("#panel_ingredients_content");
    productInfo['Ingredientes'] = ingredientesElement ? ingredientesElement.innerText : "Informação não disponível";

    return productInfo; // Retorna o objeto contendo as informações extraídas
}

// Função para extrair informações de pontuação de um produto de uma página web
function scrapeScores(url) {
    let scores = {}; // Objeto onde armazenaremos as informações de pontuação extraídas
    
    // Extrai informações de pontuação usando seletor CSS específico
    let nutriScoreElement = document.querySelector("#attributes_grid > li:nth-child(1) > a > div > div > div.attr_text > h4");
    scores['Nutri Score'] = nutriScoreElement ? nutriScoreElement.innerText : "Informação não disponível";

    let novaElement = document.querySelector("#attributes_grid > li:nth-child(2) > a > div > div > div.attr_text > h4");
    scores['Nova'] = novaElement ? novaElement.innerText : "Informação não disponível";

    let ecoScoreElement = document.querySelector("#attributes_grid > li:nth-child(3) > a > div > div > div.attr_text > h4");
    scores['Eco Score'] = ecoScoreElement ? ecoScoreElement.innerText : "Informação não disponível";

    return scores;
}

// URL da página da qual serão extraídas as informações do produto:
var url = "https://br.openfoodfacts.org/";

// Chama a função 'scrapeProductInfo' passando o URL como argumento e armazena o resultado em 'info'
var info = scrapeProductInfo(url);
// Chama a função 'scrapeScores' passando o URL como argumento e armazena o resultado em 'scoresData'
var scoresData = scrapeScores(url);

// Exibe as informações extraídas no console
console.log(info);
console.log(scoresData);
