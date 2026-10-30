console.log('hekko')


document.getElementById('comment-btn').addEventListener('click',
        function(event){
             event.preventDefault();   // stops page reload

            //which will post
            console.log('click')
            const newCommentBox=document.getElementById('new-comment');
            const newComment=newCommentBox.value;
            console.log(newComment)
            //where will post
            const commentContainer = document.getElementById('comment-container');
            //which will add
            const newc=document.createElement('p');
            newc.classList.add('comment') //comment class add for style applying
            newc.innerText=newComment;
            commentContainer.appendChild(newc);

             newCommentBox.value = '';        // clear the textarea

        }
    )