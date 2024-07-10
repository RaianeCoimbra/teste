function mappingValues(oldBody, mapping) {
    if (oldBody === undefined) return;
  
    if (oldBody.length) {
      return oldBody.map((item) => mappingSingleValue(item, mapping));
    } else {
      return mappingSingleValue(oldBody, mapping);
    }
  }
  
  function mappingSingleValue(oldBody, mapping) {
    let newBody = {};
    mapping?.forEach((item) => {
      newBody[item.mapTo] = oldBody[item.name];
    });
    return newBody;
  }
  module.exports = { mappingValues };
  