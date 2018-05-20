import * as Matter from 'matter-js'
let Common = {};
Common._seed = 0;
it(`The Matter.Events module contains methods to fire and listen to events on other objects`, (done) => {
    const Events = Matter.Events;
    expect(Events).toBeInstanceOf(Object)
    expect(Events.on).toBeInstanceOf(Function)
    const engine = Matter.Engine.create();
    Events.on(engine, 'collisionStart', evt => {
        expect(evt).toBeInstanceOf(Object)
        done()
    })
    Events.trigger(engine, 'collisionStart')
});
it(`The Matter.Engine module contains methods for creating and manipulating engines. An engine is a controller that manages updating the simulation of the world. `, () => {
    expect(Matter.Engine).toBeInstanceOf(Object)
    expect(Matter.Engine.create).toBeInstanceOf(Function)
    expect(Matter.Engine.update).toBeInstanceOf(Function)
    expect(Matter.Engine.update(Matter.Engine.create())).toBeInstanceOf(Object)
});
it(`Matter.Body.setVelocity(body, velocity)
Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. `, () => {

    });
it(`matter-dev.js`, () => {
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function (min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };
    var _seededRandom = function () {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };
    expect(Common.random(0, 1)).toBeLessThan(1)
});
it(`The Matter.Render module is a simple HTML5 canvas based renderer for visualising instances of Matter.Engine`, () => {
    expect(Matter.Render).toBeInstanceOf(Object)
    expect(Matter.Render.create).toBeInstanceOf(Function)
});
it(`The Matter.Bodies module contains factory methods for creating rigid body models with commonly used body configurations (such as rectangles, circles and other polygons).`, () => {
    expect(Matter.Bodies).toBeInstanceOf(Object)
    expect(Matter.Bodies.rectangle).toBeInstanceOf(Function)
    expect(Matter.Bodies.rectangle()).toBeInstanceOf(Object)
    const rectangle = Matter.Bodies.rectangle(-500, 600, (500 + 800) * 2, 20, { isStatic: true });
    expect(rectangle).toBeInstanceOf(Object)
});
it(`The Matter.World module contains methods for creating and manipulating the world composite`, () => {
    expect(Matter.World).toBeInstanceOf(Object)
    expect(Matter.World.add).toBeInstanceOf(Function)
});
describe(`Linear congruential generator`, () => {
    it(`The generator is defined by recurrence relation:`, () => {
        // python:
        // def lcg(modulus, a, c, seed):
        // while True:
        //     seed = (a * seed + c) % modulus
        // yield seed
        let i = 0;
        function* lcg(modulus, a, c, seed) {
            while (i < 10) {

                seed = (a * seed + c) % modulus;
                i++
            }
            yield seed;
        }
        const ret = lcg(1, 2, 3, 4)
        expect(ret).toBeInstanceOf(Object)
        expect(ret.next).toBeInstanceOf(Function)

        expect(ret.next()).toEqual({ "done": false, "value": 0 })
        expect(ret.next()).toEqual({ "done": true, "value": undefined })
        expect(ret.return).toBeInstanceOf(Function)
        expect(ret.return()).toEqual({ "done": true, "value": undefined })
    });
});