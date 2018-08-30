$(document).ready(function(){
  $('.slider-right').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: $('.slider-btns'),
  variableWidth: true
  });
});


/*Плавное появление Popup*/

function showCallBackPopup() {
	document.querySelector(".callBack").classList.add('visible');
};

function hideCallBackPopup() {
	document.querySelector(".callBack").classList.remove('visible');
};

function showTakeCreditPopup() {
  document.querySelector(".takeCredit").classList.add('visible');
};

function hideTakeCreditPopup() {
  document.querySelector(".takeCredit").classList.remove('visible');
};

function showDownloadCondPopup() {
  document.querySelector(".downloadCond").classList.add('visible');
};

function hideDownloadCondPopup() {
  document.querySelector(".downloadCond").classList.remove('visible');
};

function showDownloadOfferPopup() {
  document.querySelector(".downloadOffer").classList.add('visible');
};

function hideDownloadOfferPopup() {
  document.querySelector(".downloadOffer").classList.remove('visible');
};

function showDownloadContractPopup() {
  document.querySelector(".downloadContract").classList.add('visible');
};

function hideDownloadContractPopup() {
  document.querySelector(".downloadContract").classList.remove('visible');
};

function showDownloadPoliticsPopup() {
  document.querySelector(".downloadPolitics").classList.add('visible');
};

function hideDownloadPoliticsPopup() {
  document.querySelector(".downloadPolitics").classList.remove('visible');
};
function showEnterPopup() {
  document.querySelector(".enterPop").classList.add('visible');
};

function hideEnterPopup() {
  document.querySelector(".enterPop").classList.remove('visible');
};

function showPopupSuccessCall() {
  document.querySelector(".popupSuccessCall").classList.add('visible');
};

function hidePopupSuccessCall() {
  document.querySelector(".popupSuccessCall").classList.remove('visible');
};

function showPopupSuccessDocs() {
  document.querySelector(".popupSuccessDocs").classList.add('visible');
};

function hidePopupSuccessDocs() {
  document.querySelector(".popupSuccessDocs").classList.remove('visible');
};


/*Плавный переход к якорям*/

var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) {
    e.preventDefault();
    var w = window.pageYOffset,  // прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
    requestAnimationFrame(step); 
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}

/*Отправка формы*/
var name = $('input[name=name]').val(); 
var tel = $('input[name=tel]').val();
var otpravka = true;
if(name==""){ 
  otpravka = false;
}
if(tel ==""){
  otpravka = false;
}

dannie = {'user_name':name, 'user_tel':tel};

if(otpravka) 
{
$.post('send.php', dannie, function(otvet){ 
rezultat = '<div>'+otvet.text+'</div>';
$("#form_result").hide().html(rezultat).slideDown();
}, 'json');
}