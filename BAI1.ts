class Circle{
    private _r:number;
    private _color:string;

    constructor(r: number, color:string) {
        this._r = r;
        this._color = color;
    }

     public get_r(): number {
        return this._r;
    }

    set_r(r: number):void {
        this._r = r;
    }

    get_color(): string {
        return this._color;
    }

    set_color(color:string):void {
        this._color = color;
    }

    Area(r:number):number{
        return  Math.PI * r * r;

    }
}
let cercle1=new Circle(15,"red");
console.log(cercle1.Area(cercle1.get_r()));

class Cylinder extends Circle {
    private _height: number;

    constructor(r: number, color: string, height: number) {
        super(r, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    volume(): number {
        return Math.PI * this.get_r() * this.get_r() * this.height;
    }
}
let cylinder=new Cylinder(14,"blue",15);
console.log(cylinder.volume())