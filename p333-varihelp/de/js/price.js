$(function () {
    (country = $.url(location.href).param("country")),
        "BG" == country ? (bg_selected = 'selected="selected"') : (bg_selected = ""),
        (selects = $("select[name='country']")),
        selects.append('<option value="BG" ' + bg_selected + ">България</option>");
    var e = 0,
        t = function (t) {
            var n;
            (e = 1),
                $(t.children).each(function () {
                    this.selected && (sel = $(this).val());
                }),
                "undefined" == typeof sel && (sel = "BG"),
                "BG" == sel &&
                    ($(".old_price_val").html("78"),
                    $(".old_price_cur").html("€"),
                    $(".old_price_sig").html("&#8381;"),
                    $(".new_price_val").html("39"),
                    $(".new_price_cur").html("€"),
                    $(".new_price_sig").html("&#8381;"),
                    $("select").val("BG").trigger("change"),
                    (n = { mask: "(+35\\9)[@]9999999[99]", removeMaskOnSubmit: !1, definitions: { "@": { validator: "[0]", casing: "lower" } } }),
                    $("[name=phone]").inputmask(n)),
                (e = 0);
        };
    $("select")
        .change(function () {
            0 == e && t(this);
        })
        .change(),
        $(document).ready(function () {
            $("[name=phone]").keydown(function (e) {
                46 == e.keyCode ||
                    8 == e.keyCode ||
                    9 == e.keyCode ||
                    27 == e.keyCode ||
                    (65 == e.keyCode && !0 === e.ctrlKey) ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault());
            });
        });
});
