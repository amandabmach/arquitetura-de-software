import HTMLReportGenerator from './HTMLReportGenerator.js';
import TXTReportGenerator from './TXTReportGenerator.js';
import HTMLReportGenerator2 from './HTMLReportGenerator2.js';

// Factory para criação de geradores de relatórios
export default class ReportGeneratorFactory {
  static createReportGenerator(reportType) {
    switch (reportType) {
      case 'html':
        return new HTMLReportGenerator();
      case 'txt':
        return new TXTReportGenerator();
      case 'html2':
        return new HTMLReportGenerator2();
      default:
        throw new Error("Unsupported report type");
    }
  }
}
