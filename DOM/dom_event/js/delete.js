//when mouse enter to the button box 
 // document.getElementById('btn-delete').addEventListener('mouseenter',
    //     function(){
    //         console.log('triggered')
    //     }
    // )

//when mouse move on the button area
// document.getElementById('btn-delete').addEventListener('mousemove',
//         function(){
//             console.log('triggered')
//         }
//     )

//when mouse out from box
document.getElementById('btn-delete').addEventListener('mouseout',
        function(){
            console.log('triggered')
        }
    )

//input field
document.getElementById('user-name').addEventListener('focus',
        function(){
            console.log('user about to write name')
        }
    )
    document.getElementById('user-email').addEventListener('focus',
        function(){
            console.log('user about to write email')
        }
    )
    //when blur(done write)
    document.getElementById('user-name').addEventListener('blur',
        function(){
            console.log('user about to done name')
        }
    )
    document.getElementById('user-email').addEventListener('blur',
        function(){
            console.log('user about to done email')
        }
    )


//it can seen what is typing
 document.getElementById('user-name').addEventListener('keyup',
        function(event){
            console.log('user about to write name',event.target.value)
        }
    )