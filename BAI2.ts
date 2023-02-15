class Point2D {
    private _x: number;
    private _y: number

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get_x(): number {
        return this._x;
    }


    get x(): number {
        return this._x;
    }

    set_x(x: number): void {
        this._x = x;
    }

    get_y(): number {
        return this._y;
    }

    set_y(y: number): void {
        this._y = y;
    }

    getxy(x: number, y: number): object {
        return {x: this._x, y: this._y}
    }

    setxy(x: number, y: number): void {

        this.set_y(y);
        this.set_y(y);
    }

}

let a1 = new Point2D(12, 15);
console.log(a1.getxy(a1.get_x(), a1.get_y()));


class Point3D extends Point2D {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }


    get_z(): number {
        return this._z;
    }

    set_z(z: number) {
        this._z = z;
    }


    getXYZ():object{
        return {
            x:this.get_x(),
            y:this.get_y(),
            z:this.get_z()
        }
    }

    setXYZ(x: number, y: number, z: number): void {
        return this.set_x(x)
        this.set_y(y)
        this.set_z(z)
    }
}

let point3D1 = new Point3D(12, 5, 9);
console.log(point3D1.getXYZ())