var elem = document.getElementById('select');

var i = 1950;
while (i < 2018) {

    elem.innerHTML += `<option class="section_form__input_box__select__content">${i}<option>`;

    i++;
}
$(window).load(function() {
    var images = $('img');
    images.each(function(i) {
        $(this).width($(this).width() / 2);
    });
});