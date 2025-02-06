// $('.owl-carousel').removeClass('owl-rtl')
// $('html').attr('dir', 'ltr');
// $('html').attr('lang', 'en');
// $('link[href="css/bootstrap.rtl.min.css"]').attr('href', 'css/bootstrap.min.css');

// تحديد لغة الموقع
var bodyDir = $("body").css("direction");
console.log(bodyDir);
var dirAr;
if (bodyDir == "rtl") {
  dirAr = true;
} else {
  dirAr = false;
}
$(document).ready(function () {
  
  $('#lang').on('click', function() {
    $('html').attr('dir', $('html').attr('dir') === 'ltr' ? 'rtl' : 'ltr');
    $('html').attr('lang', $('html').attr('lang') === 'en' ? 'ar' : 'en');
    $('#lang-text').text($('html').attr('lang') === 'en' ? 'AR' : 'EN' );
    $('.owl-carousel').toggleClass('owl-rtl');
    $('#bootstrap-style').attr('href', $('html').attr('lang') === 'en' ? 'css/bootstrap.min.css' : 'css/bootstrap.rtl.min.css');
  });

  // Scroll to the top of the page
  window.addEventListener('scroll', () => {
    document.getElementById('scrollUp').style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  $('.Marquee-content').each(function () {
      const $this = $(this); 
      const originalContent = $this.html();
      for (let i = 0; i < 8; i++) { 
          $this.append(originalContent)
      }
  });


  // counter
  window.addEventListener("scroll", function () {
    if ($(".counters").length > 0) {
      var counters = document.querySelectorAll(".counter");
      var counterStart = counters[0].offsetTop - 500;
      var speed = 400;
      if (this.document.documentElement.scrollTop > counterStart) {
        counters.forEach((counter) => {
          var upTo = function () {
            var target = Number(counter.getAttribute("data-target"));
            var count = Number(counter.innerText);
            var inc = Math.ceil(target / speed);
            setTimeout(upTo, 300);

            if (count < target) {
              counter.innerText = count + inc;
            } else counter.innerText = target;
          };
          upTo();
        });
      }
    }
  });

  $(".marquee-carousel").owlCarousel({
        loop: true,               // تكرار العناصر
        margin: 10,               // مسافة بين العناصر
        autoplay: true,           // تشغيل تلقائي
        autoplayTimeout: 1,       // لا يوجد تأخير بين الحركات
        autoplayHoverPause: false, // لا توقف عند تمرير الماوس
        autoplaySpeed: 10000,      // سرعة الحركة (يمكنك تعديلها)
        smartSpeed: 10000,         // سرعة الانتقال السلس
        dots: false,              // إخفاء النقاط
        nav: false,               // إخفاء الأسهم
        items: 3,                 // عدد العناصر المرئية
        rtl: true                 // حركة من اليمين لليسار
    });

});




