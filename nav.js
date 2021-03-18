
        
        function mostra(){
            let menu = document.getElementById('lista-nav');
          if(menu.classList.contains('esconder')){
            menu.classList.remove('esconder')
            menu.classList.add('mostra');
          }
            else{
            menu.classList.remove('mostrar');
            menu.classList.add('esconder'); 
            }
            console.log(menu);
        }