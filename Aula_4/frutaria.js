function precoFruta(nome) {
    nome = nome.toLowerCase();  // Normaliza o nome da fruta para minúsculo
    if (nome === "maçã") {
        return "R$ 3,00";
    } else if (nome === "banana") {
        return "R$ 2,00";
    } else if (nome === "laranja") {
        return "R$ 2,50";
    } else {
        return "Fruta não disponível na frutaria Benites";
    }
}

console.log(precoFruta("Maçã"));            // Saída: R$ 3,00
console.log(precoFruta("Banana"));          // Saída: R$ 2,00
console.log(precoFruta("Laranja"));         // Saída: R$ 2,50
console.log(precoFruta("o mauri"));         // Saída: Fruta não disponível na frutaria Benites
