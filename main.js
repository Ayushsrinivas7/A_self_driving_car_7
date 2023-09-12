const canvas = document.getElementById("myCanvas");

canvas.width = 300 ;
const ctx = canvas.getContext("2d");
let car = new Car( 100 , 100 , 30 , 50 );
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}


