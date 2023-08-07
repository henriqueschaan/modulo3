function extrairVogais(str) {
    const vogais = str.match(/[aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ]/g);
    return vogais ? vogais.join('') : '';
  }
  