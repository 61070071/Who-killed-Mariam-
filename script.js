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