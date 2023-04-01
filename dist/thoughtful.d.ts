// Generated by dts-bundle v0.7.2

export class Matrix {
    data: number[][];
    constructor(data: number[][]);
    constructor(rows: number, columns: number);
    static rowVector(...components: number[]): Matrix;
    static columnVector(...components: number[]): Matrix;
    static rand(rows: number, columns: number): Matrix;
    static ones(rows: number, columns: number): Matrix;
    static eye(size: number): Matrix;
    apply(func: (number) => number): void;
    static join(m1: Matrix, m2: Matrix, pos?: 'top' | 'bottom' | 'left' | 'right'): Matrix;
    size(): number[];
    getNumberOfRows(): number;
    getNumberOfColumns(): number;
    getDimensions(): number[];
    set(row: number, column: number, val: number): void;
    get(row: number, column: number): number;
    getRowAsRowVector(row: number): Matrix;
    getColumnAsRowVector(column: number): Matrix;
    getAsScalar(): number;
    getArray(): number[][];
    copy(): Matrix;
    slice(startRow: number, endRow: number, startColumn: number, endColumn: number): Matrix;
    map(func: (val: number, row?: number, column?: number) => number): this;
    forEach(func: (val: number, row?: number, column?: number) => void): this;
    fill(newVal: number): this;
    scale(scl: number): this;
    add(tensor: Matrix): this;
    subtract(tensor: Matrix | Vector): this;
    multiply(tensor: Matrix | Vector): this;
    divide(tensor: Matrix | Vector): this;
    dot(tensor: Matrix | Vector): this;
    getVector(): void;
    transpose(): this;
    min(): Matrix;
    max(): Matrix;
    show(): this;
    getAsString(markup?: boolean, joinChar?: string, lineSpaceChar?: string, end?: string, fixed?: number): string;
}

export interface NumericDistanceFunction {
    (a: number[], b: number[]): number;
}
export class Distances {
    static EUCLIDEAN: NumericDistanceFunction;
    static TAXI: NumericDistanceFunction;
    static LEVENSHTEIN: (a: string, b: string) => any;
}

export namespace Normalization {
    class MinMaxNormalizer {
        constructor(data: number[][]);
        normalizeExampleData(): number[][];
        normalizeNewDataRow(row: number[]): number[];
        denormalize(row: number[]): number[];
    }
}

export namespace Maths {
    type Tensor = number[][];
    type Vector = number[][];
    type Matrix = number[][];
    function randomInt(min: number, max: number): number;
    function random(min: number, max: number): number;
    function argmax(args: number[]): number;
    function randomBool(): boolean;
    function round(value: number, decimals?: number): number;
    function sum(c: number[]): number;
    namespace Tensor2D {
        function getAsString(t: Tensor, markup?: boolean, joinChar?: string, lineSpaceChar?: string, end?: string, fixed?: number): string;
        namespace ElementWise {
            function add(...tensors: Tensor[]): number[][];
            function subtract(...tensors: Tensor[]): number[][];
            function multiply(...tensors: Tensor[]): number[][];
            function divide(...tensors: Tensor[]): number[][];
            function scale(t: Tensor, scl: number): number[][];
        }
        function dot(t1: Tensor, t2: Tensor): any[];
        function transpose(t: Tensor): number[][];
        function sameSize(...tensors: Tensor[]): boolean;
        /**
          *
          * @param size - Size of the 2D Tensor as an array with [#rows, #columns]
          * @param fill
          */
        function generate(size: number[], fillValue?: ((row?: number, column?: number) => number) | number): number[][];
        function fill(tensor: Tensor, fillValue: ((row?: number, column?: number) => number) | number): number[][];
        function getSize(t: Tensor): num