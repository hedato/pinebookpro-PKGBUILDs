import * as tf from "..";
import * as fs from "fs";
import { resolve } from "path";

let l2v = new tf.LabelToValue();
l2v.toValue('negative');
l2v.toValue('positive');

const RAW = fs.readFileSync(resolve(__dirname, 'data', 'sentiment.txt'), 'utf8');
const DATA = RAW.trim().split('\n').map(e => {
 