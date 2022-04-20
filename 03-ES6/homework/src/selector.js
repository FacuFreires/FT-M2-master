var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  if(matchFunc(startEl)) resultSet.push(startEl); //En resultSet guardo los elementos de startEl

  // Recorrer los hijos

  for (let i = 0; i < startEl.children.length; i++) {
    var result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    // concatenando 
    resultSet = [...resultSet, ...result]
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id'; // si en la posicion 0 hay numeral
  if (selector[0] === '.') return 'class'; // si en la posicion 0 hay un punto
  for (let i = 0; i < selector.length; i++) { 
    if (selector[i] === '.') return 'tag.class'; // recorro el selector y si encuentro un '.' en la posicion de i
  }
  return 'tag'; // 
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el){ // recibe como parametro el elemento html -- // <div id = myId>
     return '#' + el.id === selector; 
   }

  } else if (selectorType === "class") {
    matchFunction = function (el) {
      for (let i = 0; i < el.classList.length; i++) { // si tengo varias clases para un elemento puedo tratarlo con un arreglo con .classList y recorrerlo 
        if ( '.' + el.classList[i] === selector ) return true;
      }
      return false;
    } 

  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      let [t, c] = selector.split('.'); // Destructuring -- [tag, class] --> t = tag, c = class
      // Uso recursion

      return matchFunctionMaker(t)(el) && matchFunctionMaker('.'+ c)(el);
      // Ejecuto matchFunctionMaker(tag) que en este caso recibe tag y entra en el if correspondiente y devuelve matchFunction que es una funcion
      // matchFunctionMaker devuelve siempre una funcion --> matchFunction
      // matchFunction(el) recibe un elemento que le estoy pasando por parametro y devuelve true o false
    }

  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return el.tagName === selector.toUpperCase()
    } //.tagName retorna el elemento pero con mayuscula 'DIV' -- el.tagName.toLowerCase() === selector
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
