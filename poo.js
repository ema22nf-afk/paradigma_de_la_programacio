class Pizza{
     constructor(masa, tamano, ingredientes) {
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
     };

     preparar() {
        console.log(`Preparando una pizza de ${this.tamano} con masa ${this.masa} y los
            siguientes ingredientes: ${this.ingredientes}.`)
            return this;
     };

     hornear() {
        console.log("La pizza esta en el horno...");
        return this;
     };

     empacar() {
        console.log("Empacando la pizza...");
        return this;
     };
};

const pizzaHawaina = new Pizza("delgada", "mediana", ["jamon", "piña", "queso"])

console.log(pizzaHawaina.preparar());
console.log(pizzaHawaina.hornear());
console.log(pizzaHawaina.empacar());
