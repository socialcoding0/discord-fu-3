let uploadInput = document.querySelector("#upload-img-input");

let loadImgWrapper = document.querySelector(".load-img");
let loadImg = document.querySelector(".load-under-img");

let shMiddle = document.querySelector(".sh-middle");
let outputDiv = document.querySelector(".output-div");
let shareBtn = document.querySelector(".share-btn");
let pdImg = document.querySelector(".pd-img");

let inputText = document.querySelector(".input-text");


let reader = new FileReader();

uploadInput.addEventListener("change", function () {

    reader.readAsDataURL(uploadInput.files[0]);
    reader.addEventListener("load", function () {
        loadImg.setAttribute("src", reader.result);
        if (loadImgWrapper.classList.contains("d-none")) {
            loadImgWrapper.classList.remove("d-none");
            loadImgWrapper.classList.add("d-block");
        }
    });
});







shareBtn.addEventListener("click", function () {


    if (inputText.value == "") {
        inputText.classList.add("input-warning");

        setTimeout(() => {
            inputText.classList.remove("input-warning");
        }, 200);

        return;
    }

    let postDivWithoutImg = `
        <div class="container post-div">
        
        <div class="pd-child pd-header">
            <i class="fa-solid fa-circle-user" id="profile-i"></i>
            <div class="profile-desc">
                <p class="profile-name">User</p>
                <p class="profile-time">17 August</p>
            </div>
            <button class="delete-btn">
            <i class="fa-solid fa-trash-can"></i>
         
        </button>
        </div>
        <div class="pd-child pd-text">
           ${inputText.value}
        </div>

        <div class="pd-child pd-controller">
            <div class="pd-interaction">
                <i class="fa-regular fa-heart"></i>
                <span>25 Likes</span>
            </div>
            <div class="pd-interaction">
                <i class="fa-regular fa-comment-dots"></i>
                <span>120 Comments</span>
            </div>
            <div class="pd-interaction">
                <i class="fa-regular fa-share-from-square"></i>
                <span>235 Share</span>
            </div>
            <div class="pd-interaction">
                <i class="fa-regular fa-eye"></i>
                <span>12 Saved</span>
            </div>
        </div>

    </div>
        `;
    let postDivWithImg = `
    <div class="container post-div">
   
    <div class="pd-child pd-header">
        <i class="fa-solid fa-circle-user" id="profile-i"></i>
        <div class="profile-desc">
            <p class="profile-name">User</p>
            <p class="profile-time">17 August</p>
        </div>
        <button class="delete-btn">
        <i class="fa-solid fa-trash-can"></i>

    </button>
    </div>
    <div class="pd-child pd-text">
       ${inputText.value}
    </div>
    <div class="pd-child pd-img">
        <img src="${reader.result}">
    </div>

    <div class="pd-child pd-controller">

        <div class="pd-interaction">
            <i class="fa-regular fa-heart"></i>
            <span>25 Likes</span>
        </div>

        <div class="pd-interaction">
            <i class="fa-regular fa-comment-dots"></i>
            <span>120 Comments</span>
        </div>

        <div class="pd-interaction">
            <i class="fa-regular fa-share-from-square"></i>
            <span>235 Share</span>
        </div>

        <div class="pd-interaction">
            <i class="fa-regular fa-eye"></i>
            <span>12 Saved</span>
        </div>
    </div>
</div>
    `;


    if (reader.result === null) {
        outputDiv.insertAdjacentHTML("beforeend", postDivWithoutImg);
    }
    else {
        outputDiv.insertAdjacentHTML("beforeend", postDivWithImg);
    }

    // for (const post of document.querySelectorAll(".post-div")) {
    //     // console.log(post);
    //     for (const postChild of post.children) {
    //         // console.log(postChild);
    //         if (postChild.classList.contains("pd-img")) {

    //             let loadImg = postChild.children[0];
    //             let src = loadImg.getAttribute("src");

    //             if (src == "null") {
    //                 console.log(loadImg);
    //                 postChild.remove();
    //             }



    //         }
    //     }

    // }

    clearHeader();
    deleteC();
})



function clearHeader() {
    inputText.value = "";
    loadImg.removeAttribute("src");
    if (loadImgWrapper.classList.contains("d-block")) {
        loadImgWrapper.classList.remove("d-block");
        loadImgWrapper.classList.add("d-none");
    }

}


function deleteC() {
    outputDiv.addEventListener("click", function (event) {
        let deleteBtn = event.target.closest(".delete-btn");
        if (deleteBtn) {
            let postDiv = deleteBtn.closest(".post-div");
            postDiv.remove();
        }
    });
}














