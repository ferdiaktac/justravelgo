$(document).ready(function () {
    // Typeahead settings
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            // an array that will be populated with substring matches
            matches = [];
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    // Select All 
    $(document).on('click', 'input.typeahead', function () {
        this.select();
    });

    //Fly
    var destinations = ['Istanbul, Türkiye (Tümü)', 'Istanbul, Türkiye (Sabiha Gokcen Havalimanı - SAW)',
        'Istanbul, Türkiye (İstanbul Yeni Havalimanı - IST)', 'Test', 'test2', 'test3',
    ];

    $('#from-fly').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'destinations',
            source: substringMatcher(destinations)
        });

    $('#to-fly').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'destinations',
            source: substringMatcher(destinations)
        });

    // Bus
    var bus_destinations = ['Istanbul (Anadolu)', 'Istanbul (Avrupa)', 'Test', 'test2', 'test3',
    ];

    $('#from-bus').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'bus_destinations',
            source: substringMatcher(bus_destinations)
        });

    $('#to-bus').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'bus_destinations',
            source: substringMatcher(bus_destinations)
        });

    // Car Rental
    var carrental_destinations = ['Istanbul, Türkiye (Tümü)', 'Istanbul, Türkiye (Sabiha Gokcen Havalimanı - SAW)',
        'Istanbul, Türkiye (İstanbul Yeni Havalimanı - IST)', 'Test', 'test2', 'test3',
    ];

    $('#from-carrental').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'carrental_destinations',
            source: substringMatcher(carrental_destinations)
        });

    $('#to-carrental').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'carrental_destinations',
            source: substringMatcher(carrental_destinations)
        });

    // Activity
    var activity_destinations = ['Istanbul Tema Park', 'Antalya Akvaryum', 'Park of Istanbul'];

    $('#activity-search').typeahead({
            hint: false,
            highlight: false,
            minLength: 2
        },
        {
            name: 'activity_destinations',
            source: substringMatcher(activity_destinations)
        });

    jQuery('.swap-button').on('click', function () {
        if (jQuery(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    /*Datepicker*/
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    // Fly DP
    var checkin = $('#fly-checkin').datepicker({
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",
        beforeShowDay: function (date) {
            return date.valueOf() >= now.valueOf();
        },
        autoclose: true,

    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate());
            checkout.datepicker("update", newDate);
        }
        $('#fly-checkout')[0].focus();
    });

    var checkout = $('#fly-checkout').datepicker({
        beforeShowDay: function (date) {
            if (!checkin.datepicker("getDate").valueOf()) {
                return date.valueOf() >= new Date().valueOf();
            } else {
                return date.valueOf() > checkin.datepicker("getDate").valueOf();
            }
        },
        autoclose: true,
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",

    }).on('changeDate', function (ev) {
    });

    // Ferry DP
    var checkinferry = $('#ferry-checkin').datepicker({
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",
        beforeShowDay: function (date) {
            return date.valueOf() >= now.valueOf();
        },
        autoclose: true,

    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkoutferry.datepicker("getDate").valueOf() || !checkoutferry.datepicker("getDate").valueOf()) {

            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate());
            checkoutferry.datepicker("update", newDate);
        }
        $('#ferry-checkout')[0].focus();
    });

    var checkoutferry = $('#ferry-checkout').datepicker({
        beforeShowDay: function (date) {
            if (!checkinferry.datepicker("getDate").valueOf()) {
                return date.valueOf() >= new Date().valueOf();
            } else {
                return date.valueOf() > checkinferry.datepicker("getDate").valueOf();
            }
        },
        autoclose: true,
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",

    }).on('changeDate', function (ev) {
    });

    // Carrental DP
    var checkincarrental = $('#carrental-checkin').datepicker({
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",
        beforeShowDay: function (date) {
            return date.valueOf() >= now.valueOf();
        },
        autoclose: true,

    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkoutcarrental.datepicker("getDate").valueOf() || !checkoutcarrental.datepicker("getDate").valueOf()) {

            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate());
            checkoutcarrental.datepicker("update", newDate);
        }
        $('#carrental-checkout')[0].focus();
    });

    var checkoutcarrental = $('#carrental-checkout').datepicker({
        beforeShowDay: function (date) {
            if (!checkincarrental.datepicker("getDate").valueOf()) {
                return date.valueOf() >= new Date().valueOf();
            } else {
                return date.valueOf() > checkincarrental.datepicker("getDate").valueOf();
            }
        },
        autoclose: true,
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "bottom",

    }).on('changeDate', function (ev) {
    });

    // Bus DP
    $('#bus-checkin').datepicker({
        autoclose: true,
        format: 'dd MM yyyy',
        language: "tr",
        todayHighlight: true,
        keyboardNavigation: true,
        orientation: "auto",
    });

    // Select2
    $('.direct-select').select2({
        language: "tr",
        theme: "default select-theme-1",
        width: '100%',
        minimumResultsForSearch: -1,
    });

    $('.class-select').select2({
        language: "tr",
        theme: "default select-theme-1",
        width: '100%',
        minimumResultsForSearch: -1,
    });

    $('.from-ferry').select2({
        language: "tr",
        placeholder: "Nereden?",
        theme: "default select-theme-1",
        width: '100%',
    });

    $('.to-ferry').select2({
        language: "tr",
        placeholder: "Nereye?",
        theme: "default select-theme-1",
        width: '100%',
    });

    // One direction selected
    $("#fly-ticket .direct-select").change(function () {
        if ($(this).val() === "one-direct") {
            $("#fly-ticket #checkout").attr("disabled", "disabled");
            $("#fly-ticket .check-out, #fly-ticket .datepicker-area .divider").addClass("d-none");
            $("#fly-ticket .check-in").addClass("width-100");
        } else {
            $("#fly-ticket #checkout").removeAttr("disabled");
            $("#fly-ticket .check-out, #fly-ticket .datepicker-area .divider").removeClass("d-none")
            $("#fly-ticket .check-in").removeClass("width-100");
        }
    }).trigger("change");

    $("#ferry-ticket .direct-select").change(function () {
        if ($(this).val() === "one-direct") {
            $("#ferry-ticket #checkout").attr("disabled", "disabled");
            $("#ferry-ticket .check-out, #ferry-ticket .datepicker-area .divider").addClass("d-none");
            $(".check-in").addClass("width-100");
        } else {
            $("#ferry-ticket #checkout").removeAttr("disabled");
            $("#ferry-ticket .check-out, #ferry-ticket .datepicker-area .divider").removeClass("d-none")
            $("#ferry-ticket .check-in").removeClass("width-100");
        }
    }).trigger("change");

    // Fly Pax
    var pvSelector = $('.passenger-selector');
    var pvDiv = $('.passenger-select');

    pvSelector.click(function () {
        pvDiv.fadeIn('100');
    });

    function calcPassenger() {
        var adult = parseInt($(".passenger-select [name='adult'] option:selected").val());

        var kid = parseInt($(".passenger-select [name='kid'] option:selected").val());

        var baby = parseInt($(".passenger-select [name='baby'] option:selected").val());

        var totalHuman = adult + kid + baby;

        var str = totalHuman + " yolcu";

        pvSelector.text(str);
    }

    $(".passenger-select-input").change(function () {
        calcPassenger();
    });

    // Ferry Pax
    var pvSelectorFerry = $('.passenger-vehicle-selector');

    var pvDivFerry = $('.passenger-vehicle-select');

    pvSelectorFerry.click(function () {
        pvDivFerry.fadeIn('10');
    });

    function calcPassengerCt() {
        var adult = parseInt($(".passenger-vehicle-select [name='adult'] option:selected").val());

        var kid = parseInt($(".passenger-vehicle-select [name='kid'] option:selected").val());

        var baby = parseInt($(".passenger-vehicle-select [name='baby'] option:selected").val());

        var vehicle = $(".passenger-vehicle-select [name='vehicle'] option:selected").val();

        var vehicleCount = parseInt($(".passenger-vehicle-select [name='vehicleCount'] option:selected").val());

        var totalHuman = adult + kid + baby;

        var strVehicle = "araçsız";

        if (vehicle == "bicycle") strVehicle = vehicleCount + " bisiklet";

        if (vehicle == "bike") strVehicle = vehicleCount + " motosiklet";

        if (vehicle == "otomobil") strVehicle = vehicleCount + " otomobil";

        if (vehicle == "minibus") strVehicle = vehicleCount + " minibüs";

        if (vehicle == "otobus") strVehicle = vehicleCount + " otobüs";

        if (vehicleCount == 0) strVehicle = "araçsız";

        var str = totalHuman + " yolcu, " + strVehicle;

        pvSelectorFerry.text(str);
    }

    $(".passenger-vehicle-select-input").change(function () {
        calcPassengerCt();
    });

    // Carrental Drop Show
    var dropVehicleCheckbox = $('#drop-vehicle');

    $('input').on('click', function () {
        if (dropVehicleCheckbox.is(':checked')) {
            $("#to-carrental").prop("disabled", false);
            $(".drop-vehicle-to-where").removeClass("d-none"),
                $("#from-carrental").attr('placeholder', 'Nereden Alacaksınız?');
            $(".from-carrental-label").text('Alış Yeri');

        } else {
            $("#to-carrental").prop("disabled", true);
            $(".drop-vehicle-to-where").addClass("d-none");
            $("#from-carrental").attr('placeholder', 'Aracı alıp bırakacağınız yeri seçin');
            $(".from-carrental-label").text('Alış ve Bırakış Yeri');
        }
    });

    // Back to top
    var btn = $('#back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    // Fixed header Home
    $(window).scroll(function () {
        var hTop = $("header#home-head");
        if ($(this).scrollTop() >= hTop.outerHeight() * 1) {
            hTop.addClass("fixed");
            hTop.removeClass("home-head");
            hTop.find(".logo img").attr("src", "assets/images/header/logo.svg");
        } else {
            hTop.addClass("home-head");
            hTop.removeClass("fixed");
            hTop.find(".logo img").attr("src", "assets/images/header/logo-white.svg");
        }
    });

    // Fixed header Pages
    $(window).scroll(function () {
        var hTop = $("header#page-head");
        if ($(this).scrollTop() >= hTop.outerHeight() * 1) {
            hTop.addClass("fixed");
        } else {
            hTop.removeClass("fixed");
        }
    });

    // AOS
    AOS.init();
    AOS.init({
        once: true,
        disable: 'mobile',
        offset: 50,
    });

    // MobilE Menu Dropdown
    $(".mm-dropdown a").click(function (e) {
        e.preventDefault();

        $(this).next(".mm-dropdown-menu").toggle();
    });

    // Accordion
    $(document).ready(function () {
        var allPanels = $('.accordion > dd').hide();

        $('.accordion > dt > a').click(function (e) {
            e.preventDefault();

            $this = $(this);
            $target = $this.parent().next();

            if (!$target.hasClass('active')) {
                allPanels.removeClass('active').slideUp();
                $target.addClass('active').slideDown();
            }

            $('.accordion > dt > a').attr("aria-expanded", false);

            if ($this.attr('aria-expanded') === true) {
                $this.attr('aria-expanded', false);
            } else {
                $this.attr('aria-expanded', true)
            }
        });
    });


});

// Mobile Menu
function mobileMenu(type) {
    if (type === 1) {
        $(".mobile-menu-container").css({
            right: "0",
            opacity: "1",
        })
    } else {
        $(".mobile-menu-container").css({
            right: "-100%",
            opacity: "0",
        })
    }
}