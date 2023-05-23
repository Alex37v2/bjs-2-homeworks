﻿function parseCount(parseNumber) {
    if (Number.isNaN(Number.parseFloat(parseNumber))) {
        throw new Error('Невалидное значение');
    } else {
    return Number.parseFloat(parseNumber); 
    }
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch(err) {
        return err;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    
    }

    get perimeter () {
        return  this.a +  this.b +  this.c;
    }
    get area() {
        let p = (this.a +  this.b +  this.c) / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }

}


function getTriangle(a, b, c){
    try { 
        return new Triangle(a, b, c);
    }
    catch {
       return { 
            get perimeter () {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}