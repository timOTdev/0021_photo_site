var feed = new Instafeed({
  get: 'travel_dev',
  tagName: 'awesome',
  clientId: '0de945a7cbda48b3a0419a4b8e17b3f9',
  sortBy: 'most-recent',
  links: true,
  template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();