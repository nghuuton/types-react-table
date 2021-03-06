import Matter = require('matter-js');
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Query = Matter.Query,
    Plugin = Matter.Plugin,
    Render = Matter.Render,
    SAT = Matter.SAT,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

Matter.use('matter-attractors');
Plugin.use(Matter, ['matter-wrap']);

var engine = Engine.create();

//Bodies
var box1 = Bodies.rectangle(400, 200, 80, 80);
var box2 = Bodies.rectangle(400, 610, 810, 60, {
    angle: 10,
    angularSpeed: 11,
    angularVelocity: 1,
    density: 4,
    isStatic: true,
});

var circle1 = Bodies.circle(100, 100, 50, {
    plugin: {
        wrap: {
            min: {
                x: 0,
                y: 0,
            },
            max: {
                x: 1024,
                y: 1024,
            },
        },
    },
});
var radius = circle1.circleRadius;
Body.setCentre(circle1, Matter.Vector.create(10, 10), true);

World.addBody(engine.world, box1);
World.add(engine.world, [box2, circle1]);

// Body - collision filter
var box3 = Bodies.rectangle(400, 200, 80, 80, {
    collisionFilter: {
        category: 1, // Allows only one option to be defined
    },
});

var box4 = Bodies.rectangle(400, 200, 80, 80, {
    collisionFilter: {}, // Or none
});

// Composites
var stack = Composites.stack(0, 100, 5, 1, 20, 0, function (x: number, y: number, column: number, row: number) {
    return Bodies.circle(x, y, 75, { restitution: 0.9 });
});

const cradle = Composites.newtonsCradle(200, 50, 5, 20, 250);

World.add(engine.world, [stack, cradle]);

// Constraints
var constraint1 = Constraint.create({
    bodyA: box1,
    bodyB: box2,
    stiffness: 0.02,
    damping: 0.01,
});

World.addConstraint(engine.world, constraint1);

// Query
var collisions = Query.ray([box1, box2, circle1], { x: 1, y: 2 }, { x: 3, y: 4 });

collisions = Query.collides(box1, [box2, circle1]);

// events
Events.on(engine, 'beforeTick', (e: Matter.IEventTimestamped<Matter.Engine>) => {});

Engine.run(engine);

// Renderer
var render = Render.create({
    engine: engine,
    bounds: {
        min: {
            x: -500,
            y: -500,
        },
        max: {
            x: 500,
            y: 500,
        },
    },
    // Renderer options
    options: {
      showAxes: true,
      showCollisions: true,
      showConvexHulls: true,
    },
});

// Runner
const runner1 = Matter.Runner.create({
    delta: 1000 / 60,
    isFixed: false,
    enabled: true,
});
const runner2 = Matter.Runner.create({});
const runner3 = Matter.Runner.create();

// Mouse
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, { mouse });

render.mouse = mouse;

Events.on(mouseConstraint, 'mousemove', (e: Matter.IMouseEvent<Matter.MouseConstraint>) => {});

// Composite
// $ExpectType Composite
var composite1 = Composite.create();
// $ExpectType Composite
var composite2 = Composite.create();
// $ExpectType Composite
var composite3 = Composite.create();
// $ExpectType Composite
Composite.add(composite1, box1);
// $ExpectType Composite
Composite.add(composite2, composite1);
// $ExpectType Composite
Composite.add(composite1, constraint1);
// $ExpectType Composite
Composite.add(composite1, mouseConstraint);
// $ExpectType Composite
Composite.add(composite3, [box1, composite2, constraint1, mouseConstraint]);

// SAT
// $ExpectType ICollision
var collision = SAT.collides(box1, box2);
// $ExpectType ICollision
SAT.collides(box3, box4, collision);
