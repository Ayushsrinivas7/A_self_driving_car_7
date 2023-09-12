class Road{

    constructor( x , width , laneCount =3 ){
    
        this .x = x ;
        this.width = width;
        this.laneCount = laneCount;

        this.left = this.x - (this.width/2);
        this.right = this.x + (this.width/2);
        const infinite = 10000000;
        this.top = infinite;
        this.bottom = -infinite;

    }

    draw(ctx){
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;

        for( let i = 1 ; i<= this.laneCount - 1 ; i++ ){
          const x  = lerp( this.left , this.right  , i / this.laneCount );
          ctx.beginPath();
          ctx.moveTo(  x  , this.top );
          ctx.lineTo( x , this.bottom);
          ctx.stroke();

        }
        
        ctx.beginPath();
        ctx.moveTo( this.left , this.top );
        ctx.lineTo( this.left , this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right , this.top);
        ctx.lineTo( this.right , this.bottom);
        ctx.stroke();

    }

}

function lerp( A , B , t ){
     return A + ( ( B- A ) * t);
}