import assert from 'assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

// Função para ler o conteúdo de um arquivo
function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8').trim();
}

// Configuração dos caminhos para os arquivos de saída gerados pelo relatório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFilePathHTML = path.join(__dirname, '../../relatorio_cidades.html');
const outputFilePathTXT = path.join(__dirname, '../../relatorio_cidades.txt');
const outputFilePathHTML2 = path.join(__dirname, '../../relatorio_cidades2.html');
const outputFilePathPers = path.join(__dirname, '../../relatorio_cidades_personalizado.html');

describe('Testes de geração de relatórios', () => {
  it('Deve gerar corretamente o relatório HTML padrão', () => {
    const expectedHTML = readFileContent(path.join(__dirname, 'expectedFile', 'relatoriohtml1.html'));
    const actualHTML = readFileContent(outputFilePathHTML);
    assert.strictEqual(actualHTML, expectedHTML, 'O relatório HTML padrão gerado está incorreto');
  });

  it('Deve gerar corretamente o relatório TXT', () => {
    const expectedTXT = readFileContent(path.join(__dirname, 'expectedFile', 'relatorio.txt'));
    const actualTXT = readFileContent(outputFilePathTXT);
    assert.strictEqual(actualTXT, expectedTXT, 'O relatório TXT gerado está incorreto');
  });

  it('Deve gerar corretamente o segundo formato de relatório HTML', () => {
    const expectedHTML2 = readFileContent(path.join(__dirname, 'expectedFile', 'relatoriohtml2.html'));
    const actualHTML2 = readFileContent(outputFilePathHTML2);
    assert.strictEqual(actualHTML2, expectedHTML2, 'O segundo formato de relatório HTML gerado está incorreto');
  });
});

