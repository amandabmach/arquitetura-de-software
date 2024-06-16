import fs from 'node:fs';
import DataReader from './DataReader.js';

// Implementação da leitura de dados JSON
export default class JSONDataReader extends DataReader {
  readData(filePath) {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  }
}

