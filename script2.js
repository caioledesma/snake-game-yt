
        
    document.getElementById("comeca").onclick = function(){
            var stage = document.getElementById("stage");
            var ctx = stage.getContext("2d");

            document.addEventListener("keydown", keyPush);

            setInterval(game, 60);

            const vel = 1;

            var vx = vy = 0;
            var px = 10;  //posição cabeça da cobra
            var py = 15; //onde a cobra irá iniciar
            var tp = 20; // tamanho de cada quadradinho no tabuleiro
            var qp = 20; // quantidade de peças no tabuleiro
            var ax=ay=15; // ponto da primeira maça 

            var trail = []; // rastro da cobra
            tail = 5; // tamanho da cobrinha

            function game(){

                px += vx;
                py += vy;
                if ( px < 0 ) {
                    px = qp-1;
                }
                if (px > qp-1) {
                    px = 0;
                }
                if (py < 0) {
                    py = qp-1;
                }
                if (py > qp-1){
                    py = 0;
                }


            ctx.fillStyle = "lightgreen";
            ctx.fillRect(0,0, stage.width, stage.height);

            ctx.fillStyle = "red";
            ctx.fillRect(ax*tp, ay*tp, tp, tp);

            
            ctx.fillStyle = "blue";
            for (var i = 0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
                if (trail[i].x == px && trail[i].y == py){
                    vx = vy=0;
                    tail =5;
                }
                    
            }

            
            trail.push({x:px, y:py})
                while (trail.length > tail){
                    trail.shift();
                }

                if ( ax == px && ay == py){
                tail++;
                ax = Math.floor(Math.random()*qp);
                ay = Math.floor(Math.random()*qp);
                }

            }

            function keyPush(event){

                switch (event.keyCode) {
                    case 37: // tecla left
                        vx = -vel;
                        vy = 0;
                        break;
                    case 38: // tecla up
                        vx = 0;
                        vy = -vel;
                        break;
                    case 39: // tecla right
                        vx = vel;
                        vy = 0;
                        break;
                    case 40: // tecla down
                        vx = 0;
                        vy = vel;
                        break;
                    default:

                        break;
                }


            }
       
       
       
       
        }

    
    
        