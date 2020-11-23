window.onscroll = function() {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 2600) {
        document.getElementById("mariam_p2").style.left = 48 + '%'
        document.getElementById("plastic_bag").style.left = 15 + '%'
    } else {
        document.getElementById("mariam_p2").style.left = 53 + '%'
        document.getElementById("plastic_bag").style.left = 8 + '%'
    }
}
let count = 0
function change_page6(num){
    count += num
    if (count == 0) {
        p6_page1.style.opacity = "1"
        p6_page2.style.opacity = "0"
        p6_page3.style.opacity = "0"
        p6_page1.style.left = "0%"
        p6_page2.style.left = "100%"
        p6_page3.style.left = "100%"
        r_arrow_p6.style.display = "block"
        l_arrow_p6.style.display = "none"

    }
    if (count == 1) {
        p6_page1.style.opacity = "0"
        p6_page2.style.opacity = "1"
        p6_page3.style.opacity = "0"
        p6_page1.style.left = "-100%"
        p6_page2.style.left = "0%"
        p6_page3.style.left = "100%"
        r_arrow_p6.style.display = "block"
        l_arrow_p6.style.display = "block"
    }
    if (count == 2) {
        p6_page1.style.opacity = "0"
        p6_page2.style.opacity = "0"
        p6_page3.style.opacity = "1"
        p6_page1.style.left = "-100%"
        p6_page2.style.left = "-100%"
        p6_page3.style.left = "0%"
        r_arrow_p6.style.display = "none"
        l_arrow_p6.style.display = "block"
    }
    
}