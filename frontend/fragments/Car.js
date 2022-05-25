export class Car {
    constructor(name, year) {
            this.name = name;
            this.year = year;
            this.el = 
            `
                <div>
                    <h1>${name}</h1>
                    <h5>${year}</h5>
                </div>
            `
        }
}

