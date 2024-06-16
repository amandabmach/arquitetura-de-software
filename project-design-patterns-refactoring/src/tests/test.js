import assert from 'assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para ler o conteúdo de um arquivo
function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Teste para o relatório HTML
const expectedHTML = `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
      <li>Abatiá</li>
      <li>Abacaxibe</li>
      <li>...</li>
    </ul>
  </body>
</html>`;

const actualHTML = readFileContent(path.join(__dirname, '../../relatorio_cidades.html'));
assert.strictEqual(actualHTML.trim(), expectedHTML.trim(), 'O relatório HTML gerado está incorreto');

// Teste para o relatório TXT
const expectedTXT = `Relatório de Nomes de Cidades
=============================
* Abatiá
* Abacaxibe
* ...
`;

const actualTXT = readFileContent(path.join(__dirname, '../../relatorio_cidades.txt'));
assert.strictEqual(actualTXT.trim(), expectedTXT.trim(), 'O relatório TXT gerado está incorreto');

// Teste para o segundo formato de relatório HTML
const expectedHTML2 = `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <header>
      <h1>Relatório de Nomes de Cidades</h1>
    </header>
    <main>
      <ul>
        <li><span class="cidade">Abatiá</span></li>
        <li><span class="cidade">Abacaxibe</span></li>
        <li><span class="cidade">...</span></li>
      </ul>
    </main>
  </body>
</html>`;

const actualHTML2 = readFileContent(path.join(__dirname, '../../relatorio_cidades2.html'));
assert.strictEqual(actualHTML2.trim(), expectedHTML2.trim(), 'O segundo formato de relatório HTML gerado está incorreto');

console.log('Todos os testes passaram com sucesso!');