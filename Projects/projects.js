$(() => {


$('.hamburger').hide()
// this hides the hamburger div on page load

const $toggleLinks = () => {
  $('.hamburger').toggle();
}
// this is working / this is for the links in the top right

$('#hamburgerButton').on('click', $toggleLinks);
})
// this works. this is on click for hamburger links
