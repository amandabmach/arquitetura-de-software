import path from 'node:path';
import DataReaderFactory from './src/readers/DataReaderFactory.js';
import ReportGeneratorFactory from './src/reports/ReportGeneratorFactory.js';
import ReportService from './src/services/ReportService.js';

// Script para geração de relatórios
const dataFilePath = path.join(process.cwd(), './data/cidades-2.json');
const outputFilePathHTML = path.join(process.cwd(), 'relatorio_cidades.html');
const outputFilePathTXT = path.join(process.cwd(), 'relatorio_cidades.txt');
const outputFilePathHTML2 = path.join(process.cwd(), 'relatorio_cidades2.html');

const dataReader = DataReaderFactory.createDataReader('json');

// Utilizando o ReportService para o formato de relatório TXT
const reportGeneratorTXT= ReportGeneratorFactory.createReportGenerator('txt');
const reportServiceTXT = new ReportService(dataReader, reportGeneratorTXT);
reportServiceTXT.generateReport(dataFilePath, outputFilePathTXT);

// Utilizando o ReportService para o formato de relatório HTML
const reportGeneratorHTML= ReportGeneratorFactory.createReportGenerator('html');
const reportServiceHTML = new ReportService(dataReader, reportGeneratorHTML);
reportServiceHTML.generateReport(dataFilePath, outputFilePathHTML);

// Utilizando o ReportService para o segundo formato de relatório HTML
const reportGeneratorHTML2 = ReportGeneratorFactory.createReportGenerator('html2');
const reportServiceHTML2 = new ReportService(dataReader, reportGeneratorHTML2);
reportServiceHTML2.generateReport(dataFilePath, outputFilePathHTML2);
