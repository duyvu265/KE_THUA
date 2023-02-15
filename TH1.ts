class Shape {
    private _color: string;
    private _filler: boolean;

    constructor(color: string, filler: boolean) {
        this._color = color;
        this._filler = filler;
    }

    get_color(): string {
        return this._color;
    }

    set_color(color: string): void {
        this._color = color;
    }

    get_filler(): boolean {
        return this._filler;
    }

    set_filler(filler: boolean): void {
        this._filler = filler;
    }

    public toString(): string {
        if (this._filler == true) {
            return `A Shape with color ${this._color} and filled `
        } else {
            return `A Shape with color ${this._color} and  not filled `
        }
    }

}

class Circle extends Shape {
    private _r: number;

    constructor(color: string, filler: boolean, r: number) {
        super(color, filler);
        this._r = r;
    }


    getr(): number {
        return this._r;
    }

    setr(value: number) {
        this._r = value;
    }

    getArea(r: number): number {
        return Math.PI * r * r;

    }

    getPerimeter(r: number): number {
        return Math.PI * 2 * r;
    }

    public toString(): string {
        return `A Circle with radius=${this._r}, which is a subclass of${super.toString()}`
    }
}

let a = new Circle("red", true, 13);
console.log(a.getPerimeter(a.getr()))
console.log(a.toString());


class Rectangle extends Shape {
    private _width: number;
    private _length: number;

    constructor(color: string, filler: boolean, width: number, length: number) {
        super(color, filler);
        this._width = width;
        this._length = length;
    }

    get_width(): number {
        return this._width;
    }

    set_width(width: number) {
        this._width = width;
    }

    get_length(): number {
        return this._length;
    }

    set_length(length: number) {
        this._length = length;
    }
    getArea():number{
        return this._length*this._width;
    }
    getPerimeter():number{
        return (this._width+this._length)*2;
    }public toString(): string {
        return `A Rectangle with width=${this._width}and ${this._length},which is a subclass of
        ${super.toString()}`;
    }
}
let b=new Rectangle("black",false,15,7);
console.log(b.toString())


class Square extends Rectangle{


}