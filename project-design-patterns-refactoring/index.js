import FormaterHTML from './src/formatters/FormatterHTML.js';
import FormaterTXT from './src/formatters/FormatterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, param1] = process.argv,
      filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

let reporter = new CitiesReporter({
      formaterStrategy: formaterStrategies[param1]
    }),
    output = reporter.report(filename);

console.log(output);






