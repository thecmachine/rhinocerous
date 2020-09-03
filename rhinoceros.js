const uuidv4 = require('uuid/v4');
let rhinoceroses = require('./data');

exports.getAll = () => {
  return rhinoceroses;
};

exports.getOne = data => {
  const rhinoPos = rhinoceroses.map(function(x) {return x.id; }).indexOf(data.id);
  const rhino = rhinoceroses[rhinoPos];
  return rhino;
};

exports.newRhinoceros = data => {
  const newRhino = {
    id: uuidv4(),
    // name: 'clint',
    // species: 'unicorn',
    name: data.name,
    species: data.species,
  };
  rhinoceroses.push(newRhino);
  return data;
};
