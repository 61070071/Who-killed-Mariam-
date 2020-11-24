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
    if (document.documentElement.scrollTop > 6700) {
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
function arrow_click(num) {
    count += num
    chage_page()
}
function progress_click(x) {
    if (x.id == "li_1") {
        count = 0
    }
    if (x.id == "li_2") {
        count = 1
    }
    if (x.id == "li_3") {
        count = 2
    }
    chage_page()
}
function chage_page() {
    if (count == 0) {
        li_1.className = "active";
        li_2.className = "";
        li_3.className = "";
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
        li_1.className = "";
        li_2.className = "active";
        li_3.className = "";
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
        li_1.className = "";
        li_2.className = "";
        li_3.className = "active";
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
function close_page() {
    document.getElementById("p2_left").style.display = "none"
    document.getElementById("p2_right").style.display = "none"
}
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
$(document).ready(
    
    function () {
        
        var canvas = document.getElementById("myChart");
        var ctx = canvas.getContext("2d");
        var myNewChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
      
                datasets: [{
                    backgroundColor: ['#F3D2DB', '#DC3F50'],
                    borderColor: ['#F3D2DB', '#DC3F50'],
                    data: [20, 80],
                    hoverBackgroundColor: ['#F3D2DB', '#DC3F50'],
                    borderWidth: 5,
                    hoverBorderWidth: 0,
                    borderAlign: 'center'
                }]
            },

            // Configuration options go here
            options: {
                animation: {
                    duration: 0
                },
                tooltips: {
                    enabled: false
                }
                ,rotation: (2.5 * Math.PI) - (120/180 * Math.PI),
                labelFontSize : '16'
            }
        });
        canvas.onclick = function (evt) {
            var activePoints = myNewChart.getElementsAtEvent(evt);
            if (activePoints[0]) {
                var chartData = activePoints[0]['_chart'].config.data;
                var idx = activePoints[0]['_index'];

                var value = chartData.datasets[0].data[idx];
                if (value == 20) {
                    show_page(1)
                }
                if (value == 80) {
                    show_page(2)
                }


            }
        };
    }
);
function show_page(y) {
    if (y == 1) {
        p2_right.style.display = "block"
    }
    if (y == 2) {
        p2_left.style.display = "block"
    }
}