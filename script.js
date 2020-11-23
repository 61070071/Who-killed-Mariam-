window.onscroll = function() {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
    scrollFunction()
    scrollGraph()
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
function scrollGraph() {
    if (document.documentElement.scrollTop > 7600) {
        document.getElementById("g_1").style.height = 17 + 'vw'
        document.getElementById("g_2").style.height = 25 + 'vw'
        document.getElementById("g_3").style.height = 19 + 'vw'
        document.getElementById("g_4").style.height = 26.5 + 'vw'
        document.getElementById("g_5").style.height = 34 + 'vw'
        document.getElementById("g_6").style.height = 19 + 'vw'
        document.getElementById("g_7").style.height = 19 + 'vw'
        document.getElementById("g_8").style.height = 21 + 'vw'
        document.getElementById("g_9").style.height = 22 + 'vw'
        document.getElementById("g_10").style.height = 36 + 'vw'
        document.getElementById("g_11").style.height = 27 + 'vw'
        document.getElementById("scale_y").style.height = 31 + 'vw'
    } else {
        document.getElementById("g_1").style.height = 5+ 'vw'
        document.getElementById("g_2").style.height = 5 + 'vw'
        document.getElementById("g_3").style.height = 5 + 'vw'
        document.getElementById("g_4").style.height = 5 + 'vw'
        document.getElementById("g_5").style.height = 5 + 'vw'
        document.getElementById("g_6").style.height = 5 + 'vw'
        document.getElementById("g_7").style.height = 5 + 'vw'
        document.getElementById("g_8").style.height = 5 + 'vw'
        document.getElementById("g_9").style.height = 5 + 'vw'
        document.getElementById("g_10").style.height = 5 + 'vw'
        document.getElementById("g_11").style.height = 5 + 'vw'
        document.getElementById("scale_y").style.height = 5 + 'vw'
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
