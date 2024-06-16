import JSONDataReader from './JSONDataReader.js';

// Factory para criação de leitores de dados
export default class DataReaderFactory {
  static createDataReader(fileType) {
    switch (fileType) {
      case 'json':
        return new JSONDataReader();
      default:
        throw new Error("Unsupported file type");
    }
  }
}
