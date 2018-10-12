/* eslint-disable no-unused-vars */

import { Person } from "../src/calculator.js";

describe('Person', function () {
    it('should identify a Person class and its properties', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Earth");
        expect(Kenneth.name).toEqual("Kenneth")
        expect(Kenneth.year).toEqual(1997);
        expect(Kenneth.country).toEqual("United States");
        expect(Kenneth.activity).toEqual("Moderate");
        expect(Kenneth.planet).toEqual("Earth");
    });
});

describe('Person', function () {
    it('should check the age of the Person object', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Earth");
        Kenneth.getEarthAge();
        expect(Kenneth.age).toEqual(21);
    });
});

describe('Person age for Mercury', function () {
    it('should calculate the Person object Mercury Age', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Mercury");
        Kenneth.getEarthAge();
        Kenneth.mercuryAge();
        expect(Kenneth.age).toEqual(5.04);

    });
});

describe('Person age for Venus', function () {
    it('should calculate the Person object Venus Age', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Venus");
        Kenneth.getEarthAge();
        Kenneth.venusAge();
        expect(Kenneth.age).toEqual(13.02);
    });
});

describe('PlanetAge for Mars', function () {
    it('should calculate the Person object Mars Age', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Mars");
        Kenneth.getEarthAge();
        Kenneth.marsAge();
        expect(Kenneth.age).toEqual(39.48);
    });
});

describe('PlanetAge for Jupiter', function () {
    it('should calculate the Person object Jupiter Age', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Jupiter");
        Kenneth.getEarthAge();
        Kenneth.jupiterAge();
        expect(Kenneth.age).toEqual(249.06);
    });
});

describe('PlanetLife for Earth', function () {
    it('should calculate the Person object life expectancy on Earth', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Earth");
        let earthLife = Kenneth.getLife();
        expect(Kenneth.life).toEqual(57);
    });
});

describe('PlanetLife for Earth', function () {
    it('should calculate how much longer a person lives beyond their life expanctacy if they have', function () {
        let Kenneth = new Person("Kenneth", 1800, "United States", "Moderate", "Earth");
        let lifeRollover = Kenneth.checkLife();
        expect(Kenneth.life).toEqual(140);
    });
});

describe('PlanetLife for Earth', function(){
    it('should calculate the Person object life expectancy depending on certain object properties', function(){
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Earth");
        let earthLife = Kenneth.earthLife();
        expect(Kenneth.life).toEqual(67);
    });
});

describe('PlanetLife for Mercury', function () {
    it('should calculate the Person object life expectancy on Mercury', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Mercury");
        Kenneth.mercuryLife();
        expect(Kenneth.life).toEqual(13.68);
    });
});

describe('PlanetLife for Venus', function () {
    it('should calculate the Person object life expectancy on Venus', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Venus");
        Kenneth.venusLife();
        expect(Kenneth.life).toEqual(35.339999999999996);
    });
});

describe('PlanetLife for Mars', function () {
    it('should calculate the Person object life expectancy on Mars', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Mars");
        Kenneth.marsLife();
        expect(Kenneth.life).toEqual(107.16);
    });
});

describe('PlanetLife for Jupiter', function () {
    it('should calculate the Person object life expectancy on Jupiter', function () {
        let Kenneth = new Person("Kenneth", 1997, "United States", "Moderate", "Jupiter");
        Kenneth.jupiterLife();
        expect(Kenneth.life).toEqual(676.02);
    });
});