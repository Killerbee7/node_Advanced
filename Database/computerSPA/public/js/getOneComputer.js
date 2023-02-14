'use strict';

(function(){
    let resultarea;
    let messagearea;
    let computerId;

    document.addEventListener('DOMContentLoaded',init);

    function init(){
        resultarea=document.getElementById('resultarea');
        computerId=document.getElementById('computerId');
        messagearea=document.getElementById('messagearea');
        document.getElementById('submit')
            .addEventListener('click', send);
    }

    async function send(){
        try{

            const data = 
                await fetch(`http://localhost:4000/api/computers/${computerId.value}`{mode:'cors'})
        }
        catch(error){

        }
    }


})();