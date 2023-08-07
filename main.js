let project=document.getElementById("project")

let arr=
[
    {
        img: "52-520290_rgb-live-wallpaper-pc.jpg",
        category: "developer",
        name: "div books",
    },
    {
        img: "731491171.png",
        category: "hacker gamed",
        name: "div books",
    },
    {
        img: "52-520290_rgb-live-wallpaper-pc.jpg",
        category: "developer",
        name: "div books",
    },
    {
        img: "731491171.png",
        category: "hacker gamed",
        name: "div books",
    },
    {
        img: "52-520290_rgb-live-wallpaper-pc.jpg",
        category: "developer",
        name: "div books",
    },
    {
        img: "731491171.png",
        category: "hacker gamed",
        name: "div books",
    }
]
let content
arr.forEach((item)=>{
    content+=`<div class="project-card">
    <div class="project-image">
        <img src=images/${item.img} >
        <div class="project-info">
            <p class="project-category">${item.category}</p>
            <strong class="project-title">
                <span>${item.name}</span>
                <a href="#project" class="more-details">more details</a>
            </strong>
        </div>
    </div>
</div>`
})
project.innerHTML=content