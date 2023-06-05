var preloader=document.getElementById("loader")
setTimeout(removeLoader,1000)
function removeLoader(){
    window.onload(preloader.style.display='none')
    
}












const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove",e=>{
    cursor.setAttribute("style","top: "+(e.pageY-10)+"px;left: "+(e.pageX -10)+"px")


    document.addEventListener("click", ()=>{
        cursor.classList.add("expand")

        setTimeout(()=>{
            cursor.classList.remove("expand")
        },500)
    })
})



let navBar= $(".navbar");
$(window).scroll(function(){
    // console.log(window.innerHeight)
    // console.log($(".section-2").offset().top)
    let oTop= $("#section-3").offset().top-window.innerHeight
    // console.log(oTop)
    if($(window).scrollTop()> oTop){
        navBar.addClass("sticky")
    }
    else{
        navBar.removeClass("sticky")
    }
})




// counter animation
let nCount= function(selector){
    $(selector).each(function(){
        $(this).animate({
            counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step: function(value){
                $(this).text(Math.ceil(value))
            }
        }
        
        )
    })
}
let a=0 
$(window).scroll(function(){
    let oTop= $(".numbers").offset().top-window.innerHeight
    if(a==0 && $(window).scrollTop()>=oTop){
        a++
        nCount(".rect>h1")
    }


});


// on hover 
