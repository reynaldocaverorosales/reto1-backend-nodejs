var faker = require('faker');

var generarUsuario = function(){

  
  var randomId = faker.random.uuid();
  var randomName = faker.name.firstName();
  var randomProduct = faker.commerce.productName();
  var randomDate = faker.date.recent();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();

  return {
    id: randomId,
    nombre: randomName,
    producto:randomProduct,
    fecha:randomDate,
    email: randomEmail,
    imagen: randomImage
  } 

}

var generarIp = function(){

  
  var randomIp = faker.internet.ip();
  var randomUser = faker.internet.userName();
  var randomPass = faker.internet.password();
  var randomProto = faker.internet.protocol();
  var randomEmail = faker.internet.email();
  var randomDominio = faker.internet.domainWord();

  return {
    ip: randomIp,
    usuario: randomUser,
    password:randomPass,
    protocolo:randomProto,
    email: randomEmail,
    dominio: randomDominio
  } 

}

module.exports.generarUsuario=generarUsuario;

module.exports.generarIp=generarIp;