import path from 'node:path';
import fs from 'node:fs';
import DataReaderFactory from './src/readers/DataReaderFactory.js';
import ReportGeneratorFactory from './src/reports/ReportGeneratorFactory.js';
import ReportService from './src/services/ReportService.js';
import CitiesReporter from './src/CitiesReporter.js';
import FormatterHTML from './src/formatters/FormatterHTML.js';
import FormatterTXT from './src/formatters/FormatterTXT.js';

// Script para geração de relatórios
const dataFilePath = path.join(process.cwd(), './data/cidades-2.json');
const outputFilePathHTML = path.join(process.cwd(), 'relatorio_cidades.html');
const outputFilePathTXT = path.join(process.cwd(), 'relatorio_cidades.txt');
const outputFilePathHTML2 = path.join(process.cwd(), 'relatorio_cidades2.html');

const dataReader = DataReaderFactory.createDataReader('json');

// Utilizando CitiesReporter para gerar relatórios HTML
const citiesReporterHTML = new CitiesReporter({ formatterStrategy: new FormatterHTML() });
const reportContentHTML = citiesReporterHTML.report(dataFilePath);
fs.writeFileSync(outputFilePathHTML, reportContentHTML, 'utf8');

// Utilizando CitiesReporter para gerar relatórios TXT
const citiesReporterTXT = new CitiesReporter({ formatterStrategy: new FormatterTXT() });
const reportContentTXT = citiesReporterTXT.report(dataFilePath);
fs.writeFileSync(outputFilePathTXT, reportContentTXT, 'utf8');

// Utilizando o ReportService para o segundo formato de relatório HTML
const reportGeneratorHTML2 = ReportGeneratorFactory.createReportGenerator('html2');
const reportServiceHTML2 = new ReportService(dataReader, reportGeneratorHTML2);
reportServiceHTML2.generateReport(dataFilePath, outputFilePathHTML2);
