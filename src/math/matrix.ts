import { Vector } from "..";

export class Matrix{

    public data: number[][];

    constructor(data: number[][]);
    constructor(rows: number, columns: number);
    constructor(p1: number[][] | number, p2?: number){
        if(typeof p1 == 'object'){
            this.data = p1;
        }else{