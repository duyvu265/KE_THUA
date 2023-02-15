class Shape{
    private name:string;
    private color:string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}

class Triangle extends Shape{
    private _side1:number;
    private _side2:number;
    private _side3:number;

    constructor(name: string, color: string, side1: number=4, side2: number=7, side3: number=9) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    get side2(): number {
        return this._side2;
    }

    get side3(): number {
        return this._side3;
    }

    getPerimeter():number{
        return (this._side3+this._side2+this._side3);

    }
    getCV():number{
        return (this._side3+this._side2+this._side3)/2
    }
    getArea():number{
        return Math.sqrt(this.getCV()*(this.getCV()-this._side1)*(this.getCV()-this._side2)*(this.getCV()-this._side3))

    }
}
let tamgiac=new Triangle("tam giac","red",4,6,9);

console.log(tamgiac.getPerimeter())
console.log(tamgiac.getArea());