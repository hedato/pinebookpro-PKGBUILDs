import { ActivationFunction, ErrorFunction } from '..';
export interface ANNOptions {
    learningRate: number;
    layers: number[];
    activationFunction: ActivationFunction;
    errorFunction: ErrorFunction;
    momentum: number;
}
export declare class FeedForwardNeuralNetwork {
    private options;
    private layers;
    constructor(options: ANNOptions);
    /**
     * Creates new network wi