    var counter = 1;
    $(document).ready(function () {

        $('#btnAdd').click(function () {
            var toAdd = $('#inputAdd').val();
            if ($('#inputAdd').val() === '') {
                alert('write something')
            } else {
                $('#myList').append(
                    `
                <li class="rounded mb-1"> 
                    ${toAdd}
                    <div class="btn-group float-right "> 
                        <button class="btn btn-outline-success btn-sm fa fa-check-square"></button>

                        <button class="btn btn-outline-info btn-sm fa fa-ban"></button>

                        <button class="btn btn-outline-danger btn-sm fa fa-window-close"></button>

                        <button class="btn btn-outline-warning btn-sm fa text-dark fa-pencil"></button> 
                    </div>
                </li>

            `
                )
            }

            var close = $('.fa-window-close');
            var check = $('.fa-check-square');
            var pencil = $('.fa-pencil');
            var list = $('#myList');
            var item = $('li');
            var btnGroup = $('.btn-group');
            var ban = $('.fa-ban');
            close.click(function () {
                $(this).parent().parent().fadeOut("slow");
            })

            check.click(function () {

                $(this).parent().parent().addClass("check");
            })

            ban.click(function () {
                $(this).parent().parent().removeClass("check");
            })

            pencil.click(function () {
                item.attr("contenteditable", "true");
                $(this).parent().parent().focus();
            })



            $('#inputAdd').val('');





        })



        $('#allDel').click(() => {
            $('#myList').empty()
        })




    })



    var x;
    var startstop = 0;
    var milisec = 0;
    var sec = 0;
    var min = 0;
    var hour = 0;

    function startStop() { 

        startstop = startstop + 1;

        if (startstop === 1) {
            start();
            document.getElementById("start").innerHTML = "Stop";
        } else if (startstop === 2) {
            document.getElementById("start").innerHTML = "Start";
            startstop = 0;
            stop();
        }

    }


    function start() {
        x = setInterval(timer, 10);
    }

    function stop() {
        clearInterval(x);
    }




    //var miliSecOut = 0;
    //var secOut = 0;
    //var minOut = 0;
    //var hourOut = 0;




    function timer() {
        miliSecOut = checkTime(milisec);
        secOut = checkTime(sec);
        minOut = checkTime(min);
        hourOut = checkTime(hour);

        milisec = ++milisec;

        if (milisec === 100) {
            milisec = 0;
            sec = ++sec;
        }

        if (sec == 60) {
            min = ++min;
            sec = 0;
        }

        if (min == 60) {
            min = 0;
            hour = ++hour;

        }


        document.getElementById("milisec").innerHTML = miliSecOut;
        document.getElementById("sec").innerHTML = secOut;
        document.getElementById("min").innerHTML = minOut;
        document.getElementById("hour").innerHTML = hourOut;

    }




    //visual hissede saati 00:00 kimi gostermesi ucun
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    //reset function
    function reset() {

        milisec = 0;
        sec = 0;
        min = 0
        hour = 0;

        document.getElementById("milisec").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";

    }
