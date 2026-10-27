const likeBtn = document.getElementById("like-btn")
const mainEl = document.getElementById("main-el")
let content = ""


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts(){
    for (let i = 1; i < posts.length ; i++ ){
        content += `<section>
                        <hr class="seperator">
                        <div class="container-acct">
                            <img src="${posts[i]["avatar"]}" class="user-imgs">
                            <p class="name-loca"><span class="bold-text">${posts[i]["name"]}</span><br>${posts[i]["location"]}</p>
                        </div>
                        <img src="${posts[i]["post"]}" class="post-img">
                        <div class="container-3">
                            <div>
                                <button class="btn" id="like-btn"><img src="images/icon-heart.png" alt="a heart symbolising like button"></button>
                                <button class="btn"><img src="images/icon-comment.png" alt="a chat box symbolising comment section"></button>
                                <button class="btn"><img src="images/icon-dm.png" alt="a paper plane symbolising DM"></button>
                            </div>
                            <div>
                                <p class="bold-text"><span class="like-count">${posts[i]["likes"]}</span> likes</p>
                            </div>
                            <div>
                                <p><span class="bold-text">${posts[i]["username"]}</span> ${posts[i]["comment"]}</p>
                            </div>
                        </div>
                    </section>`
    }
    mainEl.innerHTML += content
}

renderPosts()

