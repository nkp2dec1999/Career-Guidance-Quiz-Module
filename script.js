
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {

            display.textContent="Expired";
            setTimeout(newFunction,1000);
            
        }
        
    }, 1000);

}

function begin() {
    var oneMinutes = 60 * 1.5,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);

};
function newFunction()
{
    fifth_page_btn.onclick();
};


const body = document.querySelector('body').style,
    sign_in_btn = document.forms["form-1"]["reg-btn"],
    section = document.querySelector('section').style,
    header = document.querySelector('header').style,
    main = document.querySelector('main').style,
    sec_page_btn = document.querySelector('.sec-page-btn'),
    third_page_btn = document.querySelector('.third-page-btn'),
    fourth_page_btn = document.querySelector('.fourth-page-btn'),
    fifth_page_btn = document.querySelector('.fifth-page-btn'),
    cont_1 = document.querySelector('.cont-1').style,
    cont_2 = document.querySelector('.cont-2').style,
    cont_3 = document.querySelector('.cont-3').style,
    cont_4 = document.querySelector('.cont-4').style,
    result_page = document.querySelector('.result-page').style,
    page = document.querySelector('.page'),
    _que = document.querySelector('.que').style,
    correct_que = document.querySelector('.correct_que'),
    wrong_que = document.querySelector('.wrong_que'),
    att_que = document.querySelector('.att_que'),
    status = document.querySelector('.status');

sign_in_btn.onclick = () => {
    alert("The test comprises of 20 questions divided in 4 section, which you have to attend in 1 minute 30 seconds. All the best.");
    section.height = "200vh";
    section.overflow = "hidden";
    header.opacity = "0";
    header.visibility = "hidden";
    main.opacity = "1";
    main.visibility = "visible";
    body.transition = "all 0.5s";
    body.overflow = "scroll";
    const username = document.forms["form-1"]["username"].value,
        userid = document.forms["form-1"]["userid"].value,
        _username = document.querySelectorAll('.username'),
        _userid = document.querySelectorAll('.userid');
    Array.from(_username).forEach(name => {
        name.innerHTML = username;
    });
    Array.from(_userid).forEach(id => {
        id.innerHTML = userid;
    });
    page.innerHTML = "Aptitude";
    begin();
    
}

sec_page_btn.onclick = () => {
    cont_1.opacity = "0";
    cont_1.visibility = "hidden";
    cont_1.zIndex = "-1";
    cont_2.opacity = "1";
    cont_2.visibility = "visible";
    cont_2.zIndex = "1";
    body.transition = "all 0.5s";
    page.innerHTML = "English";
}

third_page_btn.onclick = () => {
    cont_2.opacity = "0";
    cont_2.visibility = "hidden";
    cont_2.zIndex = "-2";
    cont_3.opacity = "1";
    cont_3.visibility = "visible";
    cont_3.zIndex = "2";
    body.transition = "all 0.5s";
    page.innerHTML = "Chemistry";
}

fourth_page_btn.onclick = () => {
    cont_3.opacity = "0";
    cont_3.visibility = "hidden";
    cont_3.zIndex = "-3";
    cont_4.opacity = "1";
    cont_4.visibility = "visible";
    cont_4.zIndex = "3";
    body.transition = "all 0.5s";
    page.innerHTML = "Physics";
}

fifth_page_btn.onclick = () => {
    cont_4.opacity = "0";
    cont_4.visibility = "hidden";
    cont_4.zIndex = "-4";
    result_page.opacity = "1";
    result_page.visibility = "visible";
    result_page.zIndex = "3";
    section.height = "100vh";
    section.backgroundColor = "#1AA15F";
    section.overflow = "hidden";
    main.opacity = "0";
    main.visibility = "hidden";
    main.zIndex = "-5";
    body.transition = "all 0.5s";
    body.overflow = "hidden";
    if (correct_point >= 7) {
        section.backgroundColor="green"
        status.innerHTML = "Passed";

        document.getElementById("career1").innerHTML="B.tech";
        document.getElementById("career2").innerHTML="Bachelor in Mathematics(statistics)";
        document.getElementById("career3").innerHTML="Diploma";

    }
    else {
        section.backgroundColor="red"
        status.innerHTML = "Failed";

        document.getElementById("career1").innerHTML="BA";
        document.getElementById("career2").innerHTML="B.Com";
        document.getElementById("career3").innerHTML="BCA";

    }

}

var correct_ans_arr = ["5", "4", "2", "7", "12", "50", "60", "24", "20", "10", "360", "110", "195", "0"]

function wrong_selection() {
    section.backgroundColor = "red";
    setTimeout(myFunction, 1250);
    function myFunction(){
            section.backgroundColor="white";}
  
}

var correct_point = 0;


function right_selection(value) {

    for (i = 0; i <= correct_ans_arr.length - 1; i++) {
        if (value == correct_ans_arr[i]) {
            correct_point = correct_point + 1;
            section.backgroundColor = "#1AA15F";
            setTimeout(myFunction1, 1250);
             function myFunction1(){
            section.backgroundColor="white";}
            correct_que.innerHTML = correct_point;
            wrong_que.innerHTML = 20 - correct_point;
            att_que.innerHTML = correct_point + (20 - correct_point);
            
        }
    }
    
    

    }