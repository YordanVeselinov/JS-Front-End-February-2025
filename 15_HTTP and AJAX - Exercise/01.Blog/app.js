function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let postsSelect = document.getElementById('posts');
    let postTitleH1 = document.getElementById('post-title');
    let postBodyP = document.getElementById('post-body');
    let postCommentsUl = document.getElementById('post-comments');

    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    let allPosts = {}; 

    btnLoadPosts.addEventListener('click', loadPostsHandler);
    btnViewPost.addEventListener('click', viewPostHandler);

    async function loadPostsHandler() {
        try {
            postsSelect.innerHTML = '';
            allPosts = {}; 

            let response = await fetch(postsUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let postsData = await response.json();

            for (let postId in postsData) {
                if (Object.hasOwnProperty.call(postsData, postId)) {
                    let post = postsData[postId];
                    // Store the entire post object using postId as the key
                    allPosts[postId] = post; 

                    let option = document.createElement('option');
                    option.value = postId; 
                    option.textContent = post.title;
                    postsSelect.appendChild(option);
                }
            }
        } catch (error) {
            console.error("Error loading posts:", error);
            postTitleH1.textContent = "Error loading posts";
            postBodyP.textContent = "";
            postCommentsUl.innerHTML = "";
        }
    }

    async function viewPostHandler() {
        let selectedPostId = postsSelect.value;

        if (!selectedPostId) {
            console.log("No post selected.");
            return;
        }

        postTitleH1.textContent = 'Loading Post...'; 
        postBodyP.textContent = '';
        postCommentsUl.innerHTML = '';

        try {
            
            let postData = allPosts[selectedPostId]; 
            
            if (!postData) {
                 throw new Error(`Post data not found locally for ID: ${selectedPostId}`);
            }
            let commentsResponse = await fetch(commentsUrl);


            if (!commentsResponse.ok) {
                throw new Error(`Error fetching comments: ${commentsResponse.status}`);
            }

            let allCommentsData = await commentsResponse.json();

            postTitleH1.textContent = postData.title;
            postBodyP.textContent = postData.body;

            let filteredComments = Object.values(allCommentsData).filter(comment => comment.postId === selectedPostId);

            
            if (filteredComments.length > 0) {
                filteredComments.forEach(comment => {
                    let li = document.createElement('li');
                    li.textContent = comment.text;
                    li.id = comment.id; 
                    postCommentsUl.appendChild(li);
                });
            } else {
                let li = document.createElement('li');
                li.id = comment.id; 
                li.textContent = "No comments for this post yet.";
                postCommentsUl.appendChild(li);
            }

        } catch (error) {
            console.error("Error viewing post:", error);
            postTitleH1.textContent = "Error loading post details";
            postBodyP.textContent = error.message; 
            postCommentsUl.innerHTML = "";
        }
    }
}

attachEvents();