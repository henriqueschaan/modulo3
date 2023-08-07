function calcularFrete(peso, distancia) {
    var valorPeso = peso * 0.08;
    var valorDistancia = distancia * 0.45;
    var valorFrete = valorPeso + valorDistancia;
  
    if (distancia > 300) {
      valorFrete += valorFrete * 0.1362;
    } else if (distancia > 100) {
      valorFrete += valorFrete * 0.0697;
    }
  
    return valorFrete;
  }
  