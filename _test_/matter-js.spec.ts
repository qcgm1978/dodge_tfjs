import * as Matter from 'matter-js'
it(`The Matter.Render module is a simple HTML5 canvas based renderer for visualising instances of Matter.Engine`, () => {
    expect(Matter.Render).toBeInstanceOf(Object)
});