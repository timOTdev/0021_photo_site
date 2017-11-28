$(document).ready(function(){
  $('.parallax').parallax();
  var n =  new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  document.getElementById("date").innerHTML = monthNames[n.getMonth()] + " " + d + "," + y;
});

$(window).on('load', function(){
  $('.preloader-wrapper').remove();
});

var portfolio = document.getElementById("portfolio");
var feed = new Instafeed({
  get: 'user',
  userId: 200814775,
  accessToken: '200814775.0de945a.d0d04e0e04cc4b62817c11d7d95faf0b',
  clientId: '0de945a7cbda48b3a0419a4b8e17b3f9',
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  limit: 18,
  links: true,
  template: '<div class="parent col s12 m6 l4"><a href="{{link}}" target="_blank"><img class="picture" src="{{image}}" class="responsive-img"/><div class="popup">{{caption}}<span id="likes">{{likes}} <i class="material-icons">favorite</i></span><span id="comments">{{comments}} <i class="material-icons favorite">chat_bubble_outline</i></span></div></a></div>'
  // template: '<a href="{{link}}" id="{{id}}" target="_blank"><div class="col s12 m6 l4"><img src="{{image}}" class="responsive-img" /><p>{{caption}}<span id="likes">Likes: {{likes}}</span><span id="comments">Comments: {{comments}}</span></p></div></a>'
});
feed.run();


