"use strict";
var Layout = function () {


        function navbarToagle() {
            if ($("body").hasClass("g-sidenav-pinned")) {
                hideNavbar()
            } else {
                showNavbar()
            }
        }

        function showNavbar() {
            $("body").addClass("g-sidenav-pinned")
            $(".sidenav-toggler").addClass("active")
            $("body").append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' + $("#sidenav-main").data("target") + " />")
        }

        function hideNavbar() {
            $("body").removeClass("g-sidenav-pinned")
            $(".sidenav-toggler").removeClass("active")
            $(".backdrop").remove()
        }

        function checkNavbar() {
            if ($(window).width() > 1200) {
                showNavbar()
            } else {
                hideNavbar()
            }
        }

        $("body").on("click", "[data-action]", function (e) {
            e.preventDefault();
            let action = $(this).data("action")
            switch (action) {
                case "sidenav-pin":
                    navbarToagle()
                    break;
                case "sidenav-unpin":
                    navbarToagle()
                    break;
            }
        })

        checkNavbar()

        $(window).resize(function () {
            checkNavbar()
        })
    }(),

    Charts = function () {
        var e, a = $('[data-toggle="chart"]'),
            t = "light",
            n = {
                base: "Open Sans"
            },
            i = {
                gray: {
                    100: "#f6f9fc",
                    200: "#e9ecef",
                    300: "#dee2e6",
                    400: "#ced4da",
                    500: "#adb5bd",
                    600: "#8898aa",
                    700: "#525f7f",
                    800: "#32325d",
                    900: "#212529"
                },
                theme: {
                    default: "#172b4d",
                    primary: "#5e72e4",
                    secondary: "#f4f5f7",
                    info: "#11cdef",
                    success: "#2dce89",
                    danger: "#f5365c",
                    warning: "#fb6340"
                },
                black: "#12263F",
                white: "#FFFFFF",
                transparent: "transparent"
            };

        function o(e, a) {
            for (var t in a) "object" != typeof a[t] ? e[t] = a[t] : o(e[t], a[t])
        }

        function l(e) {
            var a = e.data("add"),
                t = $(e.data("target")).data("chart");
            e.is(":checked") ? (!function e(a, t) {
                for (var n in t) Array.isArray(t[n]) ? t[n].forEach(function (e) {
                    a[n].push(e)
                }) : e(a[n], t[n])
            }(t, a), t.update()) : (!function e(a, t) {
                for (var n in t) Array.isArray(t[n]) ? t[n].forEach(function (e) {
                    a[n].pop()
                }) : e(a[n], t[n])
            }(t, a), t.update())
        }

        function r(e) {
            var a = e.data("update"),
                t = $(e.data("target")).data("chart");
            o(t, a),
                function (e, a) {
                    if (void 0 !== e.data("prefix") || void 0 !== e.data("prefix")) {
                        var t = e.data("prefix") ? e.data("prefix") : "",
                            n = e.data("suffix") ? e.data("suffix") : "";
                        a.options.scales.yAxes[0].ticks.callback = function (e) {
                            if (!(e % 10)) return t + e + n
                        }, a.options.tooltips.callbacks.label = function (e, a) {
                            var i = a.datasets[e.datasetIndex].label || "",
                                o = e.yLabel,
                                l = "";
                            return a.datasets.length > 1 && (l += '<span class="popover-body-label mr-auto">' + i + "</span>"), l += '<span class="popover-body-value">' + t + o + n + "</span>"
                        }
                    }
                }(e, t), t.update()
        }

        return window.Chart && o(Chart, (e = {
            defaults: {
                global: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    defaultColor: "dark" == t ? i.gray[700] : i.gray[600],
                    defaultFontColor: "dark" == t ? i.gray[700] : i.gray[600],
                    defaultFontFamily: n.base,
                    defaultFontSize: 13,
                    layout: {
                        padding: 0
                    },
                    legend: {
                        display: !1,
                        position: "bottom",
                        labels: {
                            usePointStyle: !0,
                            padding: 16
                        }
                    },
                    elements: {
                        point: {
                            radius: 0,
                            backgroundColor: i.theme.primary
                        },
                        line: {
                            tension: .4,
                            borderWidth: 4,
                            borderColor: i.theme.primary,
                            backgroundColor: i.transparent,
                            borderCapStyle: "rounded"
                        },
                        rectangle: {
                            backgroundColor: i.theme.warning
                        },
                        arc: {
                            backgroundColor: i.theme.primary,
                            borderColor: "dark" == t ? i.gray[800] : i.white,
                            borderWidth: 4
                        }
                    },
                    tooltips: {
                        enabled: !0,
                        mode: "index",
                        intersect: !1
                    }
                },
                doughnut: {
                    cutoutPercentage: 83,
                    legendCallback: function (e) {
                        var a = e.data,
                            t = "";
                        return a.labels.forEach(function (e, n) {
                            var i = a.datasets[0].backgroundColor[n];
                            t += '<span class="chart-legend-item">', t += '<i class="chart-legend-indicator" style="background-color: ' + i + '"></i>', t += e, t += "</span>"
                        }), t
                    }
                }
            }
        }, Chart.scaleService.updateScaleDefaults("linear", {
            gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "dark" == t ? i.gray[900] : i.gray[300],
                drawBorder: !1,
                drawTicks: !1,
                lineWidth: 0,
                zeroLineWidth: 0,
                zeroLineColor: "dark" == t ? i.gray[900] : i.gray[300],
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
            },
            ticks: {
                beginAtZero: !0,
                padding: 10,
                callback: function (e) {
                    if (!(e % 10)) return e
                }
            }
        }), Chart.scaleService.updateScaleDefaults("category", {
            gridLines: {
                drawBorder: !1,
                drawOnChartArea: !1,
                drawTicks: !1
            },
            ticks: {
                padding: 20
            },
            maxBarThickness: 10
        }), e)), a.on({
            change: function () {
                var e = $(this);
                e.is("[data-add]") && l(e)
            },
            click: function () {
                var e = $(this);
                e.is("[data-update]") && r(e)
            }
        }), {
            colors: i,
            fonts: n,
            mode: t
        }
    }(),

    CopyIcon = function () {
        var e, a = ".btn-icon-clipboard",
            t = $(a);
        t.length && ((e = t).tooltip().on("mouseleave", function () {
            e.tooltip("hide")
        }), new ClipboardJS(a).on("success", function (e) {
            $(e.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), e.clearSelection()
        }))
    }(),

    Navbar = function () {
        var e = $(".navbar-nav, .navbar-nav .nav"),
            a = $(".navbar .collapse"),
            t = $(".navbar .dropdown");
        a.on({
            "show.bs.collapse": function () {
                var t;
                (t = $(this)).closest(e).find(a).not(t).collapse("hide")
            }
        }), t.on({
            "hide.bs.dropdown": function () {
                var e, a;
                e = $(this), (a = e.find(".dropdown-menu")).addClass("close"), setTimeout(function () {
                    a.removeClass("close")
                }, 200)
            }
        })
    }(),

    NavbarCollapse = function () {
        $(".navbar-nav");
        var e = $(".navbar .navbar-custom-collapse");
        e.length && (e.on({
            "hide.bs.collapse": function () {
                e.addClass("collapsing-out")
            }
        }), e.on({
            "hidden.bs.collapse": function () {
                e.removeClass("collapsing-out")
            }
        }))
    }(),

    Popover = function () {
        var e = $('[data-toggle="popover"]'),
            a = "";
        e.length && e.each(function () {
            !function (e) {
                e.data("color") && (a = "popover-" + e.data("color"));
                var t = {
                    trigger: "focus",
                    template: '<div class="popover ' + a + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                e.popover(t)
            }($(this))
        })
    }(),

    ScrollTo = function () {
        var e = $(".scroll-me, [data-scroll-to], .toc-entry a");

        function a(e) {
            var a = e.attr("href"),
                t = e.data("scroll-to-offset") ? e.data("scroll-to-offset") : 0,
                n = {
                    scrollTop: $(a).offset().top - t
                };
            $("html, body").stop(!0, !0).animate(n, 600), event.preventDefault()
        }

        e.length && e.on("click", function (e) {
            a($(this))
        })
    }(),

    Tooltip = function () {
        var e = $('[data-toggle="tooltip"]');
        e.length && e.tooltip()
    }(),

    Checklist = function () {
        var e = $('[data-toggle="checklist"]');

        function a(e) {
            e.is(":checked") ? e.closest(".checklist-item").addClass("checklist-item-checked") : e.closest(".checklist-item").removeClass("checklist-item-checked")
        }

        e.length && (e.each(function () {
            $(this).find('.checklist-entry input[type="checkbox"]').each(function () {
                a($(this))
            })
        }), e.find('input[type="checkbox"]').on("change", function () {
            a($(this))
        }))
    }(),

    FormControl = function () {
        var e = $(".form-control");
        e.length && e.on("focus blur", function (e) {
            $(this).parents(".form-group").toggleClass("focused", "focus" === e.type)
        }).trigger("blur")
    }(),

    Tags = function () {
        var e = $('[data-toggle="tags"]');
        e.length && e.each(function () {
            $(this).tagsinput({
                tagClass: "badge badge-primary"
            })
        })
    }(),
    color = "#5e72e4";