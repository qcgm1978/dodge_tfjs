import * as tf from '@tensorflow/tfjs';
import 'mocha';
import { expect } from 'chai';

describe(``, () => {

    it(`In Cartesian coordinates, if p = (p1, p2,..., pn) and q = (q1, q2,..., qn) are two points in Euclidean n-space, then the distance (d) from p to q, or from q to p is given by the Pythagorean formula`, () => {
        const p = [1, 2, 3], q = [4, 5, 6], length = 0;
        // expect()
        const x = tf.tensor1d([1, 2, 3]);
        expect({ a: 1 }).to.eql({ a: 1 }).but.not.equal({ a: 1 });
        expect([1]).to.eql([1])
        expect(x.sum().dataSync()).to.contains(new Uint8Array([6]))
    });
});