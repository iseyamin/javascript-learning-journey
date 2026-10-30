 document.getElementById('upd-ttl').addEventListener('click',
        function(){
            console.log('button clicked');
            const titleElement = document.getElementById('page-title');
            titleElement.innerText='Expert System';
        }
    )

//login button
document.getElementById('btn-lgn').addEventListener('click',
        function() {
            document.getElementById('user-info').innerText='Login successful';
        }
      )