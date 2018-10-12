/* eslint-disable no-unused-vars */

export class Person{
    constructor(name, year, country, activity, planet){
    this.name = name;
    this.year = year;
    this.country = country;
    this.activity = activity;
    this.planet = planet;
    this.life = 78;
    this.age = 0;
    }

    getEarthAge() {
        let today = new Date();
        let todayYear = today.getFullYear();
        let personAge = todayYear - this.year;
        this.age = personAge;
    }
    mercuryAge() {
        let mercuryAge = this.age * .24;
        this.age = mercuryAge;
    }

    venusAge() {
        let venusAge = this.age * .62;
        this.age = venusAge;
    }

    marsAge() {
        let marsAge = this.age * 1.88;
        this.age = marsAge;
    }

    jupiterAge() {
        let marsAge = this.age * 11.86;
        this.age = marsAge;
    }

    getLife() {
        this.life = this.life - this.age;
    }

    checkLife() {
        if (this.age >= this.life) {
            this.life = this.age - this.life;
        }
    }
  

    earthLife() {

        if (this.country === "United States" && this.activity === "Moderate" && this.planet === "Earth"){
            this.life + 5 + 5 + 0;
        }
    }

}
