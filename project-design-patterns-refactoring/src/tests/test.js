import assert from 'assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

// Função para ler o conteúdo de um arquivo
function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Configuração dos caminhos para os arquivos de saída gerados pelo relatório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFilePathHTML = path.join(__dirname, '../../relatorio_cidades.html');
const outputFilePathTXT = path.join(__dirname, '../../relatorio_cidades.txt');
const outputFilePathHTML2 = path.join(__dirname, '../../relatorio_cidades2.html');
const outputFilePers = path.join(__dirname, '../../relatorio_cidades_pers.html');

// Teste para o relatório HTML padrão
const expectedHTML = readFileContent(path.join(__dirname, 'expectedFile', 'relatoriohtml1.html'));
const actualHTML = readFileContent(outputFilePathHTML);
assert.strictEqual(actualHTML.trim(), expectedHTML.trim(), 'O relatório HTML padrão gerado está incorreto');

// Teste para o relatório TXT
const expectedTXT = readFileContent(path.join(__dirname, 'expectedFile', 'relatorio.txt'));
const actualTXT = readFileContent(outputFilePathTXT);
assert.strictEqual(actualTXT.trim(), expectedTXT.trim(), 'O relatório TXT gerado está incorreto');

// Teste para o segundo formato de relatório HTML
const expectedHTML2 = readFileContent(path.join(__dirname, 'expectedFile', 'relatoriohtml2.html'));
const actualHTML2 = readFileContent(outputFilePathHTML2);
assert.strictEqual(actualHTML2.trim(), expectedHTML2.trim(), 'O segundo formato de relatório HTML gerado está incorreto');

// Teste para o relatorio personalizado
const expectedPers = readFileContent(path.join(__dirname, 'expectedFile', 'relatoriopers.html'));
const actualPers= readFileContent(outputFilePers);
assert.strictEqual(actualPers.trim(), expectedPers.trim(), 'O segundo formato de relatório HTML gerado está incorreto');

console.log('Todos os testes passaram com sucesso!');
