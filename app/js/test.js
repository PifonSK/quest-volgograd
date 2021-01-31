

var number = 0;
var maxNumber = $(".test-item").length - 1;
var $element = $(".test-item").find("input, select, textarea");
var $elementRadio = $(".test-item").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
// var btnPrev = $(".test-prev");
var btnNext = $('.test-next');
var isValid;
var dataBlock;
var activeSlede = [];
var testTextNum = maxNumber;
testText = $('#qw-title');
// $(".numSlide").text(number + 1);
// $(".maxSlide").text(maxNumber);

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}
testText.text(testTextNum +' вопросов');
$element.on('change input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});

function btnActive(isValid) {
  if(number === 0){
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    // btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

  }

}

// sidebar

  var $barLevel = 100 / (maxNumber);
  var $barWidth = $barLevel;
  // money
  var slideMoney = Math.floor(2000 / (maxNumber + 2));
  var sumMoney = slideMoney;

  function progress(){
    $(".progress-bar__line").css({"width": $barWidth + '%'});

    moneyAnim( ".proc-progres", Math.floor($barWidth),"%" )
    // $(".progress-bar__line-num").text(Math.floor($barWidth) + "%");

    if(number === maxNumber - 1){
      moneyAnim(".test__side-money", 2000, false )
    }else{
      moneyAnim(".test__side-money", Math.floor(sumMoney), false );
    }
  }
  progress();




$('input[name="qw9"]').on('change input', function() {
  $('.sbt-js').text('Ваш подарок:');
  $('.gift-img').attr({
    "src": `img/${$(this).attr('id')}.png`,
  });
  $('.gift-block').show();
  $('.test-wrapper .left-block').css({
    'background-image': 'url(img/bg-final.jpg)',
  })
});

$('body').on('click', '.promo-bottom__btn', function() {
    $('#whatsapp-modal').fadeIn();
});

$('body').on('click', '.phone__call-me, .call-me', function() {
    $('#phone-modal').fadeIn();
});

// btn

function btnClick() {

  btnNext.on('click', next);


  $elementRadio.on('input, change',next);
  $('.inp-next').on('input, change',next);

}
btnClick();

$('.btn-wrap-main').on('click', function() {
  $('#quiz').show();
});


  function moneyAnim( selector, new_money, simbol ){
    var numb_start = 0; // Получаем начальное число

    $({numberValue: numb_start}).animate({numberValue: new_money}, {

      duration: 560, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
      easing: "linear",

      step: function(val) {

        $(selector).text(Math.ceil(val) + simbol); // Блок, где необходимо сделать анимацию

      }

    });

  }

function next(){
  event.preventDefault();
    activeSlede[number] = true;
    ++number;
    setTimeout(function(){
      $('.test-item').hide();
      $('.test-item').eq(number).fadeIn(1500);
      $('.test__numbers-item').hide();
      $('.test__numbers-item').eq(number).fadeIn(1500);
    }, 300);

    btnActive(!isValid);
    if(testTextNum != 1 && number < (maxNumber - 1)){
      testTextNum -= 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' вопросa');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' вопрос');
      }else{
        testText.text( testTextNum + ' вопросов');
      }
    }else{
      if(number === maxNumber - 1){
        $('.sbt-js').text( 'Выберите подарок');
        $('.left-block').css({
              "background": 'url(./img/bg-gift.jpg) no-repeat center',
              'background-size':'cover',
            });
      }
    }

    if(activeSlede[number] === true || number === 3){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

     if(number === 1){
        $('.test-item').eq(0).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            $('.qw-i-jq').eq(index).show();
          }else{
            $('.qw-i-jq').eq(index).hide();
          }
        });
     }

    if(number === maxNumber - 1){
      setTimeout(function(){
      $('.test__btn-block').hide();
      $('.test__numbers').hide();
      $('.test-wrapper').addClass('predfinals');

    }, 300);
    }else if(number === maxNumber + 2){
      $('.progress-bar').hide();
      $('.test__main').addClass('final');
      $('.test-wrapper').addClass('finaltw');
      $('.left-block').addClass('no-show');
    }

    if(number === maxNumber){
    }else{
      setTimeout(function(){
      $barWidth += $barLevel;

      progress();

    }, 100);
    }
}

function convertPhone(phone) {
    return phone[1] + phone[4] + phone[5] + phone[6] + phone[9] + phone[10] + phone[11] + phone[13] + phone[14] + phone[16] + phone[17];
}

function check7Duplicate(phone) {
    let check = false;
    for(i = 1; i < 5; i++) {
        if (phone[i] === phone[i+1] && phone[i] === phone[i+2] && phone[i] === phone[i+3] && phone[i] === phone[i+4] && phone[i] === phone[i+5] && phone[i] === phone[i+6]) {
            check = true;
        }
    }
    return check;
}

function noValidate(form) {
    let noValid = false;
    const phone = convertPhone(form.find('input[name="phone"]').val());
    if (check7Duplicate(phone)) {
        noValid = true;
        form.find('.error').text('Номер не может иметь больше 6 подряд одинаковых цифр');
    }
    if (phone[1] !== '9') {
        noValid = true;
        form.find('.error').text('Номер должен начинаться с 9');
    }

    return noValid;
}

$('#phone-modal form').on('submit', function(e) {
    e.preventDefault();
    if (noValidate($(this))) {
        return
    }
    var $that = $(this);
    var fd = new FormData(this);
    $.ajax({
        url: './action.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: fd,
        success: function(msg){
            // yaCounter56667094.reachGoal('EMAIL-SENDFORM');
            $('#phone-modal').fadeOut();
            $('#thanks').fadeIn(1500);
        },
    });
});

$('#whatsapp-modal form').on('submit', function(e) {
    e.preventDefault();
    if (noValidate($(this))) {
        return
    }
    var $that = $(this);
    var fd = new FormData(this);
    $.ajax({
        url: './whatsapp.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: fd,
        success: function(msg){
            // yaCounter56667094.reachGoal('WHATSAPP-SENDFORM');
            $('#whatsapp-modal').fadeOut();
            $('#thanks-whatsapp').fadeIn(1500);
        },
    });
    fd.append('whatsapp', '1');
    $.ajax({
        url: './action.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: fd,
    });
});

$(function(){
  'use strict';
  var nForm = false;
$('.test__main form').on('submit', function(e){
    e.preventDefault();
    if (noValidate($(this))) {
        return
    }
    var $that = $(this);
    var fd = new FormData( this );
    var constr = [];

    $that.find('.btn').attr({
      'disabled': 'true'
    });

    $('input[name="qw4"]').each(function(index, el) {
      if($(this).prop('checked')){
        constr.push($(this).val().trim());
      }
    });

    var constr2= constr.join(' , ');
    fd.append('qw4_array', constr2);
    fd.append('qw4', `От ${$('.range-slider-area span:nth-child(2)').attr('value')} до ${$('.range-slider-area span:nth-child(3)').attr('value')}`);

    var url = fd.getAll('qw8')[0] === 'Пришлите мне проект и цену в WhatsApp' ? 'whatsapp' : 'quiz';

    $.ajax({
      url: './' + url + '.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function(msg){
          // yaCounter56667094.reachGoal('QUIZ-SENDFORM');
          console.log(msg);
          $('#thanks-quiz').fadeIn(1500);
      },
    });
    if (url === 'whatsapp') {
        fd.append('whatsapp', '1');
        $.ajax({
            url: './quiz.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
        });
    }
  });
});

$('.close').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('close-video')){
    $('.modal-video-body iframe').remove();
  }if($(this).hasClass('close-nav')){
    $(".nav").removeClass('active');
  }
  $(".overlay").fadeOut();
  $("html").removeClass('stop');
});

 $('.overlay').not('#modal-page, #test').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});
