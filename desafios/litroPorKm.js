let lines = gets().split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = 0.92 /1;
const precoPorKmGasolina = 1.11 / 1;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

console.log(maisEconomico);