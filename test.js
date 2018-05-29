const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([2, 2, 2]);
const ret = a.equal(a).print(), ret1 = a.equal(b).print()
console.assert(a.equal(b).dataSync().length == 3, { "message": "a is not equal to b", data: a.equal(b).dataSync(), target: new Uint8Array([0, 1, 0]) })