let header_button=document.querySelector(".ikon");
header_button.addEventListener("click", function(){
    let header=document.querySelector("header");
    if (header.classList.contains("open")){
        close_p();
    }
    else{
    header.classList.add("open");
    header_button.querySelector("img").src="im/close.png";
    } 
}); 
function close_p(){
    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src="im/menu.png";
}
document.querySelector(".grid").addEventListener("click", close_p, false);
document.querySelector("header .p").addEventListener("click",close_p, false);

document.querySelector("#show_new_ph").addEventListener("click", function(){
    document.querySelector("#new_ph").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#add_photo").classList.remove("open");
});
document.querySelector("#add_photo").addEventListener("click", function(){
    let src=document.querySelector("#new_src").value;
    let text=document.querySelector("#new_text").value;
    if (src){
        let new_photo_div=document.createElement("div");
        new_photo_div.classList.add("photo");
        let new_img=document.createElement("img");
        new_img.src= src;
        new_photo_div.append(new_img);
        let new_p=document.createElement("p");
        new_p.innerText= text?text:"Стандартный текст";
        new_photo_div.append(new_p);
        document.querySelector(".grid").prepend(new_photo_div);
        document.querySelector("#add_photo").classList.remove("open");
        document.querySelector("#new_src").value="";
        document.querySelector("#new_text").value="";
        new_photo_div.addEventListener("click", open_photo, false);
    }
    else{
        if (!src){
            document.querySelector("#new_src").classList.add("error");
        }
    }
});
function open_photo(){
    let src=this.querySelector("img").src;
    open_photo=document.querySelector("#p_ph");
    open_photo.querySelector("img").src=src;
    open_photo.classList.add("open");
}
let photos=document.querySelectorAll(".photo");
for (let photo of photos){
    photo.addEventListener("click", open_photo, false);
}
document.querySelector("#p_ph").addEventListener("click", function(){
    this.classList.remove("open");
});