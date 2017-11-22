$(document).ready(function(){
  $('.parallax').parallax();
});

var portfolio = document.getElementById("portfolio");
var feed = new Instafeed({
  get: 'user',
  userId: 200814775,
  accessToken: '200814775.0de945a.d0d04e0e04cc4b62817c11d7d95faf0b',
  clientId: '0de945a7cbda48b3a0419a4b8e17b3f9',
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  limit: 12,
  links: true,
  template: '<a href="{{link}}" id="{{id}}" target="_blank"><div class="col s12 m6 l4"><img src="{{image}}" class="responsive-img" /><p>{{caption}}<span id="likes">Likes: {{likes}}</span><span id="comments">Comments: {{comments}}</span></p></div></a>'
});
feed.run();

// window.onload = function() {
//   document.getElementById('preloader').style.display = "none";
// }