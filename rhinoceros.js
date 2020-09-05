const uuidv4 = require('uuid/v4');
let rhinoceroses = require('./data');
let species = require('./speciesData');
const data = require('./data');

exports.getAll = data => {
  if(data.species){
    return rhinoceroses.map(data.species, value.species);
  }
  if(data.name){
    let namedRhinos = new Array();
    rhinoceroses.forEach(function(rhino){
      if(rhino.name === data.name){
        namedRhinos.push(rhino);
      }
    });
    return namedRhinos;
  }
  if(data.species){
    let speciesedRhinos = new Array();
    rhinoceroses.forEach(function(rhino){
      if(rhino.species === data.species){
        speciesedRhinos.push(rhino);
      }
    });
    return speciesedRhinos;
  }
  
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
