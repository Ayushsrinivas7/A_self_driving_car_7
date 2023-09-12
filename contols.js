class Controls{
    constructor(){
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;
        this.#addKeyboardListeners();
    }
    
    #addKeyboardListeners(){
         
        document.onkeydown = (event) => {
            let name  = event.key;
            if( name === "ArrowUp"){
                this.forward = true;
            }
            if( name === "ArrowDown"){
                this.reverse = true;
            }
            if( name === "ArrowLeft"){
                this.left = true;
            }
            if( name === "ArrowRight"){
                this.right = true;
            }
            
        }

        document.onkeyup = (event) => {
            let name  = event.key;
            if( name === "ArrowUp"){
                this.forward = false ;
            }
            if( name === "ArrowDown"){
                this.reverse = false ;
            }
            if( name === "ArrowLeft"){
                this.left = false ;
            }
            if( name === "ArrowRight"){
                this.right = false ;
            }
            
        }


    }

}