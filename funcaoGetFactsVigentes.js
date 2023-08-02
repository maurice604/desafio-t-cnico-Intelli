const list = require('./list');

let facts = list.facts;
let schema = list.schema;

function getFactsVigentes(facts, schema) {
    let factsVigentes = [];
    let entity = '';
    let attribute = '';
    let cardinality = '';
  
    schema.forEach(s => {
      attribute = s[0];
      cardinality = s[2];
      facts.forEach(f => {
        if (f[1] === attribute && f[3] === true) {
          entity = f[0];
          if (cardinality === 'one') {
            factsVigentes.splice(1, 1, f)// Substitui 1 elemento no índice 1
          } else if (cardinality === 'many') {
            factsVigentes.push(f);
          }
        }
      });
    });


    let res = JSON.stringify(factsVigentes, null, 2);

    return res;
  }
  
  console.log(getFactsVigentes(facts, schema));
  
  module.exports = getFactsVigentes;
  