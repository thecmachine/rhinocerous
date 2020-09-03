const uuidv4 = require('uuid/v4');
let rhinoceroses = require('./data');
let species = require('./speciesData');

exports.getAll = () => {
  return rhinoceroses;
};

exports.getOne = data => {
  const rhinoPos = rhinoceroses.map(function(x) {return x.id; }).indexOf(data.id);
  const rhino = rhinoceroses[rhinoPos];
  return rhino;
};

exports.newRhinoceros = data => {
  const nameLength = data.name.length;
  if(nameLength > 0 && nameLength < 21 && species.includes(data.species)){
    const newRhino = {
      id: uuidv4(),
        name: data.name,
        species: data.species,
    }
    rhinoceroses.push(newRhino);
  }else{
    //return error with only certain keys
    return "Error: Name must be 1-20 characters with valid species"
  };
  return data;
};
