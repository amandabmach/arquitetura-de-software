import ReportGeneretor from './ReportGenerator.js';

// Implementação do relatório TXT
export default class TXTReportGenerator extends ReportGeneretor {
  generateReport(data) {
    let txtContent = `Relatório de Nomes de Cidades
=============================
`;

    data.forEach(cidade => {
      txtContent += `* ${cidade}\n`;
    });

    return txtContent;
  }
}
