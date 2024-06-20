import ReportGenerator from './ReportGenerator.js';

//Aplicação do Decorator
export default class StyledHTMLReportDecorator extends ReportGenerator {
  constructor(reportGenerator) {
    super();
    this.reportGenerator = reportGenerator;
  }

  generateReport(data) {
    let htmlContent = this.reportGenerator.generateReport(data);

    // Adiciona cabeçalho personalizado antes do título principal
    const headerContent = `<header style="background-color: #007bff; color: white; text-align: center; padding: 10px;">
        <h1>Aplicando o Padrão Decorator nesse Relatório</h1>
    </header>
    `;
    htmlContent = htmlContent.replace('<h1>Relatório de Nomes de Cidades</h1>', headerContent + '<h1>Cidades do Brasil!!</h1>');

    return htmlContent;
  }
}