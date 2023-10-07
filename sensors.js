class Sensors{

    constructor(car){
        this.car = car;
        this.rayCount = 700 ;
        this.raySpread = Math.PI / 2  ;
        this.rayLength = 150; 
        this.rays = [];
        this.readings = [];
    }

    update( roadBorders ){
        
        for( let i =0 ; i<this.rayCount ; i++ ){
            const rayAngle = lerp(
                this.raySpread/2  , - this.raySpread/2 , i / Math.max ( 1 ,this.rayCount -1 )
            ) + this.car.angle ;
            if( this.rayCount == 1 ) rayAngle = this.car.angle ; 
            const start = { x : this.car.x , y : this.car.y };
            const end = { x : this.car.x - (Math.sin(rayAngle) * this.rayLength) , 
                y : this.car.y - (Math.cos(rayAngle) * this.rayLength)} ;
               
                this.rays.push( [start , end] );
        }
        
         
    }

    draw(ctx){
        
        for( let i = 0 ; i< this.rayCount ; i++ ){
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'yellow';

            let  rayAngle = lerp(
                this.raySpread/2  , - this.raySpread/2 , i / Math.max ( 1 ,this.rayCount -1 )
            ) + this.car.angle ;
            
            if( this.rayCount == 1 ) rayAngle = this.car.angle ;
             
            const start = { x : this.car.x , y : this.car.y };
            const end = { x : this.car.x - (Math.sin(rayAngle) * this.rayLength) , 
                y : this.car.y - (Math.cos(rayAngle) * this.rayLength)} ;
               
            ctx.moveTo( start.x  , start.y );
            ctx.lineTo( end.x , end.y );
            ctx.stroke();
        }
    }
}