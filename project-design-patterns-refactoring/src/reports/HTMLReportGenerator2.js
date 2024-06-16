import ReportGenerator from './ReportGenerator.js';

// Implementação de outro formato de relatório HTML
export default class HTMLReportGenerator2 extends ReportGenerator {
  generateReport(data) {
    let htmlContent = `<!DOCTYPE HTML>
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
`;

    data.forEach(cidade => {
      htmlContent += `        <li><span class="cidade">${cidade}</span></li>\n`;
    });

    htmlContent += `      </ul>
    </main>
  </body>
</html>`;
    return htmlContent;
  }
}
