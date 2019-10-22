export class Truck {
    constructor(manufacturer, model, year){
        this.manufacturer = manufactuer;
        this.model = model;
        this.year = year;
    }

    get manufactuer(){
        return this.manufactuer;
    }

    get model(){
        return this.model;
    }

    get year(){
        return this.year;
    }

    get truck(){
        return this;
    }
}