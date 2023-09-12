const canvas = document.getElementById("myCanvas");

canvas.width = 300 ;
const ctx = canvas.getContext("2d");
let road = new Road( canvas.width/2 , canvas.width * 0.92  );
let car = new Car( 100 , 100 , 30 , 50 );
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}



