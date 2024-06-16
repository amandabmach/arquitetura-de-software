function calcularMedia(valores) {
    const soma = calcularSoma(valores);
    return (soma / valores.length).toFixed(2);
}

// Método de extração, tornando mais reutilizavel e compreensível
function calcularSoma(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma;
}

// Extração de variavel temporária, deixando menos repetitivo e melhorando a legibilidade.
// Método em linha, na utilização do método reduce que calcula o desvio padrao em uma linha tornando o código mais conciso e legível.
function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores);
    const n = valores.length;
    const somaDiferencasQuadradas = valores.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return Math.sqrt(somaDiferencasQuadradas / n).toFixed(2);
}

const valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));