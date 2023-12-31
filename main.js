const canvas = document.getElementById("myCanvas");

canvas.width = 300 ;
const ctx = canvas.getContext("2d");
let road = new Road(canvas.width/2 , canvas.width);
let car = new Car(  road.getLaneCenter(1) , 100 , 30 , 50 );
// car.draw(ctx);

animate();

function animate(){
    car.update(road.borders );
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0 , -car.y + canvas.height * 0.90);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
    
}
