$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
    });
});

$(document).ready(function () {
    url = 'https://script.google.com/macros/s/AKfycbx8-ZTrNogvWcLMa8Y7zcTFEB5WnzsQHpmcTObK3T2wPyrIDfZr/exec'
    $("a#inline").fancybox({
    });
    $("a.group").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });
    $("#login_form").bind("submit", function () {

        if ($("#login_name").val().length < 1 || $("#login_pass").val().length < 1) {
            $("#login_error").show();
            $.fancybox.resize();
            return false;
        }

        $.fancybox.showActivity();

        $.ajax({
            type: "POST",
            cache: false,
            url: url,
            dataType: "json",
            data: $(this).serializeArray(),
            success: function (data) {
                $.fancybox(data);
            }
        });

        return false;
    });
});

$(document).ready(function () {
    $(".fancybox").fancybox();
});
