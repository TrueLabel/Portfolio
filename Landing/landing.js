





$(() => {

// $('.areaAvoid').hover(.css('backgound-color', 'red'))

const $youLose = () => {
  $('#gameText').text('You did not stay in the path! Refresh the page to try again!').css('color', 'white').css('font-size', '40px')
  $('.areaAvoid').css('background-color', '#82091F')
}
// this is updating the page when user hovers target areas

$('.hamburger').hide()
// this hides the hamburger div on page load

const $toggleLinks = () => {
  $('.hamburger').toggle();
}
// this is working / this is for the links in the top right

$('.areaAvoid').mouseover($youLose)
// the waits for mouse hover on target area


$('#hamburgerButton').on('click', $toggleLinks);
})
// this works. this is on click for hamburger links
