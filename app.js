document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const themeToggle =
        document.getElementById("themeToggle");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const notificationPanel =
        document.querySelector(".notification-panel");

    const createBtn =
        document.getElementById("createBtn");

    const createModal =
        document.querySelector(".create-modal");

    const closeCreate =
        document.querySelector(".close-create");

    const commentModal =
        document.querySelector(".modal");

    const closeModal =
        document.querySelector(".close-modal");

    const profileBtn =
        document.getElementById("profileBtn");

    const profilePopup =
        document.querySelector(".profile-popup");

    const closeProfile =
        document.querySelector(".close-profile");

    const mobileThemeToggle =
        document.getElementById("mobileThemeToggle");

    const mobileProfileBtn =
        document.getElementById("mobileProfileBtn");

    if (localStorage.getItem("theme") === "dark") {

        body.classList.add("dark");

    }

    function toggleTheme() {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    }

    themeToggle.addEventListener("click", toggleTheme);

    if (mobileThemeToggle) {

        mobileThemeToggle.addEventListener(
            "click",
            toggleTheme
        );

    }

    notificationBtn.addEventListener("click", (e) => {

        e.preventDefault();

        notificationPanel.classList.toggle("active");

    });

    document.addEventListener("click", (e) => {

        if (
            !notificationPanel.contains(e.target)
            &&
            !notificationBtn.contains(e.target)
        ) {

            notificationPanel.classList.remove("active");

        }

    });

    createBtn.addEventListener("click", (e) => {

        e.preventDefault();

        createModal.classList.add("show");

    });

    closeCreate.addEventListener("click", () => {

        createModal.classList.remove("show");

    });

    createModal.addEventListener("click", (e) => {

        if (e.target === createModal) {

            createModal.classList.remove("show");

        }

    });

    profileBtn.addEventListener("click", (e) => {

        e.preventDefault();

        profilePopup.classList.add("show");

    });

    if (mobileProfileBtn) {

        mobileProfileBtn.addEventListener("click", (e) => {

            e.preventDefault();

            profilePopup.classList.add("show");

        });

    }

    closeProfile.addEventListener("click", () => {

        profilePopup.classList.remove("show");

    });

    profilePopup.addEventListener("click", (e) => {

        if (e.target === profilePopup) {

            profilePopup.classList.remove("show");

        }

    });

    document
        .querySelectorAll(".comment-btn")
        .forEach(btn => {

            btn.addEventListener("click", () => {

                commentModal.classList.add("show");

            });

        });

    closeModal.addEventListener("click", () => {

        commentModal.classList.remove("show");

    });

    commentModal.addEventListener("click", (e) => {

        if (e.target === commentModal) {

            commentModal.classList.remove("show");

        }

    });

    document
        .querySelectorAll(".like-btn")
        .forEach(btn => {

            btn.addEventListener("click", () => {

                const likesElement =
                    btn.closest(".post")
                        .querySelector(".likes strong");

                let currentLikes =
                    parseInt(
                        likesElement.innerText
                            .replace(/,/g, "")
                    );

                btn.classList.toggle("liked");

                if (btn.classList.contains("liked")) {

                    btn.classList.remove("fa-regular");
                    btn.classList.add("fa-solid");

                    currentLikes++;

                } else {

                    btn.classList.remove("fa-solid");
                    btn.classList.add("fa-regular");

                    currentLikes--;

                }

                likesElement.innerText =
                    currentLikes.toLocaleString() +
                    " likes";

            });

        });

    document
        .querySelectorAll(".post-image")
        .forEach(image => {

            image.addEventListener("dblclick", () => {

                const heart =
                    image.parentElement.querySelector(
                        ".heart-animation"
                    );

                heart.classList.add("show");

                setTimeout(() => {

                    heart.classList.remove("show");

                }, 800);

                const post =
                    image.closest(".post");

                const likeBtn =
                    post.querySelector(".like-btn");

                const likesElement =
                    post.querySelector(".likes strong");

                let currentLikes =
                    parseInt(
                        likesElement.innerText
                            .replace(/,/g, "")
                    );

                if (!likeBtn.classList.contains("liked")) {

                    likeBtn.classList.add("liked");

                    likeBtn.classList.remove("fa-regular");
                    likeBtn.classList.add("fa-solid");

                    currentLikes++;

                    likesElement.innerText =
                        currentLikes.toLocaleString() +
                        " likes";
                }

            });

        });

    document
        .querySelectorAll(".story")
        .forEach(story => {

            story.addEventListener("click", () => {

                story.style.opacity = ".6";

            });

        });

    const createPostButton =
        document.querySelector(
            ".create-content button"
        );

    createPostButton.addEventListener("click", () => {

        alert("Post Created Successfully 🚀");

        createModal.classList.remove("show");

    });

    let postCount = 0;

    window.addEventListener("scroll", () => {

        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 200
        ) {

            addNewPost();

        }

    });

    function addNewPost() {

        if (postCount >= 10) return;

        postCount++;

        const usernames = [
            "Varun",
            "Rohit",
            "Aditya",
            "Karan",
            "Aman",
            "Rahul",
            "Vivek",
            "Yash",
            "Harsh",
            "Arjun",
            "Aryan",
            "Sarthak"
        ];

        const username =
            usernames[
            Math.floor(
                Math.random() *
                usernames.length
            )
            ];

        const feed =
            document.querySelector(".feed");

        const newPost =
            document.createElement("div");

        newPost.className = "post";

        newPost.innerHTML = `

    <div class="post-header">

        <div class="user">

            <img src="https://randomuser.me/api/portraits/men/${20 + postCount}.jpg">

            <div>

                <h4>${username}</h4>

                <span>India</span>

            </div>

        </div>

        <i class="fa-solid fa-ellipsis"></i>

    </div>

    <div class="image-container">

        <img
        class="post-image"
        src="https://picsum.photos/600/600?random=${100 + postCount}">

        <div class="heart-animation">
            <i class="fa-solid fa-heart"></i>
        </div>

    </div>

    <div class="actions">

        <div>

            <i class="fa-regular fa-heart like-btn"></i>

            <i class="fa-regular fa-comment comment-btn"></i>

            <i class="fa-regular fa-paper-plane"></i>

        </div>

        <i class="fa-regular fa-bookmark"></i>

    </div>

    <div class="likes">
        <strong>${Math.floor(Math.random() * 9000) + 1000} likes</strong>
    </div>

    <div class="caption">
        <strong>${username}</strong>
        Enjoying life and sharing moments ✨
    </div>

    <div class="comments-preview">
        View all comments
    </div>

    <div class="post-footer">
        JUST NOW
    </div>

    `;

        feed.appendChild(newPost);

    }

});