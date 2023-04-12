import { Maths } from "..";

export class Vector{
    constructor(private components: number[]){

    }

    public static rand(size: number){
        return new Vector(new Array(size).fill(0).map(v => Math.random()));
    }

    public copy(){
        return new Vector(this.components.slice());
    }

    public getArray(){
        return this.components;
    }

    public append(vec: Vector){
        this.components.push(...vec.components);
        return this;
    }
    public prepend(vec: Vector){
        this.components.unshift(...vec.components);
        return this;
    }

    public get size(){
        return this.components.length;
    }

    public get magnitude(){
        return Math.sqrt(this.components.reduce((s, c) => s + (c * c), 0));
    }

    public get(component: number){
        return this.components[component];
    }
    public set(component: number, value: number){
        this.components[component] = value;
        return this;
    }

    public add(vec: Vector){
        this.assertSameSize(vec);
        this.components.map((c, i) => c + vec.get(i));
        return this;
    }
    public subtract(vec: Vector){
        this.assertSameSize(vec);
        this.components.map((c, i) => c - vec.get(i));
        return this;
    }
    public multiply(vec: Vector){
        this.assertSameSize(vec);
        this.components.map((c, i) => c * vec.get(i));
        return this;
    }
    public divide(vec: Vector){
        this.assertSameSize(vec);
        this.components.map((c, i) => c / vec.get(i));
        return this;
    }
    public pow(exponent: number ){
       