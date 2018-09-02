$(document).ready(function(){
  //Плавное появление Popup
    $(document).on("click", '.callBack_ref', function(event) {
      event.preventDefault();
      $('.callBack').addClass('visible');
    });

    $(document).on("click", '.takeCredit_ref', function(event) {
      event.preventDefault();
      $('.takeCredit').addClass('visible');
    });

    $(document).on("click", '.downloadCond_ref', function(event) {
      event.preventDefault();
      $('.downloadCond').addClass('visible');
    });

    $(document).on("click", '.downloadOffer_ref', function(event) {
      event.preventDefault();
      $('.downloadOffer').addClass('visible');
    });

    $(document).on("click", '.downloadContract_ref', function(event) {
      event.preventDefault();
      $('.downloadContract').addClass('visible');
    });

    $(document).on("click", '.downloadPolitics_ref', function(event) {
      event.preventDefault();
      $('.downloadPolitics').addClass('visible');
    });

    $(document).on("click", ".enterPop_ref", function(event) {
      event.preventDefault();
      $('.enterPop').addClass('visible');
    });

    $(document).on("click", "#close", function(event) {
      $('.visible').removeClass('visible');
    });


/*Плавный переход к якорям*/
    $(document).on("click", 'a[href^="#nav"]', function() {
      var el = $(this).attr('href');
      $('html, body').animate({
      scrollTop: $(el).offset().top}, 1000);
      console.log($(el));
      return false;
    });

//Slick-Слайдер отзывов
  $('.slider-right').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: $('.slider-btns'),
    variableWidth: true
  });

//Отправка данных на почту

  $('.formCall').submit(function(event) {
    var errors = false;
    $(this).find('span').empty();

    $(this).find('input').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
        $(this).next().text('обязательно для заполнения');
      }
    });
    if (!errors) {
      var data = $(this).serialize();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
        },
        success: function() {
            $('.form').find('input').val('');
            $('.popup').removeClass('visible');
            $('.popupSuccessCall').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
        }

      })
    }
    return false;
  });

  $('.formDocs').submit(function(event) {
    var errors = false;
    $(this).find('span').empty();

    $(this).find('input').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
        $(this).next().text('обязательно для заполнения');
      }
    });
    if (!errors) {
      var data = $(this).serialize();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
        },
        success: function() {
            $('.form').find('input').val('');
            $('.popup').removeClass('visible');
            $('.popupSuccessDocs').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
        }

      })
    }
    return false;
  });











});




