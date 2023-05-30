var lastScroll = 395;
var bottomScroll = 1070;
var sidebar = document.querySelector(".sidebar .box-sidebar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScroll && scrollTop <= bottomScroll){
        sidebar.style.top="110px";
        sidebar.style.position = 'fixed'
    }else if(scrollTop > bottomScroll){
        sidebar.style.top="650px";
        sidebar.style.position = 'relative'
    } 
    else {
        sidebar.style.top="0px";
        sidebar.style.position = 'relative'
    }
    // lastScroll = scrollTop;
    console.log(scrollTop);
})