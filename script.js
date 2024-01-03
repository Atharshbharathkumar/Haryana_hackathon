// Helper function to create a new reply form
function createReplyForm(comment) {
    const form = document.createElement('form');
    form.className = 'reply-form';
   
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'reply';
    input.placeholder = 'Write a reply...';
   
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Reply';
   
    form.appendChild(input);
    form.appendChild(button);
   
    form.addEventListener('submit', (e) => {
       e.preventDefault();
       const replyInput = form.querySelector('input[name="reply"]');
       const replyText = replyInput.value.trim();
   
       if (replyText) {
         const replyListItem = document.createElement('li');
         replyListItem.textContent = replyText;
         comment.appendChild(replyListItem);
         replyInput.value = '';
       }
    });
   
    return form;
   }
   
   // Helper function to create a new comment element
   function createComment(text) {
    const comment = document.createElement('li');
    comment.textContent = text;
   
    const replyForm = createReplyForm(comment);
    comment.appendChild(replyForm);
   
    return comment;
   }
   
   // Helper function to create a new comment list item
   function createCommentListItem(text) {
    const listItem = document.createElement('li');
    listItem.appendChild(createComment(text));
    return listItem;
   }
   
   // Get the list element where the comments will be added
   const commentsList = document.querySelector('.comments-list');
   
   // Get the form where new comments can be submitted
   const commentForm = document.querySelector('.comment-form');
   
   // Add a submit event listener to the comment form
   commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.querySelector('input[name="comment"]');
    const commentText = commentInput.value.trim();
   
    if (commentText) {
       const commentListItem = createCommentListItem(commentText);
       commentsList.appendChild(commentListItem);
       commentInput.value = '';
    }
   });