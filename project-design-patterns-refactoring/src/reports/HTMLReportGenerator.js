import ReportGenerator from './ReportGenerator.js';

// Implementação do relatório HTML
export default class HTMLReportGenerator extends ReportGenerator {
  generateReport(data) {
    let htmlContent = `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
`;

    data.forEach(cidade => {
      htmlContent += `      <li>${cidade.Nome}</li>\n`;
    });

    htmlContent += `    </ul>
  </body>
</html>`;
    return htmlContent;
  }
}
