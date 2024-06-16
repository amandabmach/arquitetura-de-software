import fs from 'node:fs';

// Classe principal para geração de relatórios
export default class ReportService {
  constructor(dataReader, reportGenerator) {
    this.dataReader = dataReader;
    this.reportGenerator = reportGenerator;
  }

  generateReport(dataFilePath, outputFilePath) {
    const data = this.dataReader.readData(dataFilePath);
    const reportContent = this.reportGenerator.generateReport(data);
    fs.writeFileSync(outputFilePath, reportContent, 'utf8');
    console.log('Relatório gerado com sucesso:', outputFilePath);
  }
}
