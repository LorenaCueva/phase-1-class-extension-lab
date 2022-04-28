class Polygon{
    constructor(sidesArray){
        this.sides = sidesArray;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((sum, current) => sum + current, 0);
    }
}

class Triangle extends Polygon{

    get isValid(){
        if(this.countSides !== 3) return false;
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2] 
        if(side1 + side2 < side3 || 
           side1 + side3 < side2 || 
           side2 + side3 < side1)
           return false;
    return true;
    }
}

class Square extends Polygon{

    get isValid(){
        if(this.countSides !== 4) return false;
        const side1 = this.sides[0];
        if(side1 !== this.sides[1] ||
           side1 !== this.sides[2] ||
           side1 !== this.sides[3])
        return false;
    return true;
    }

    get area(){
        if(this.isValid) return this.sides[0] * this.sides[0];
        return;
    }

}