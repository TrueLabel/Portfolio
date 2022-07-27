





$(() => {

// $('.areaAvoid').hover(.css('backgound-color', 'red'))



$('.hamburger').hide()

const $toggleLinks = () => {
  $('.hamburger').toggle();
}


$('#hamburgerButton').on('click', $toggleLinks);
})
