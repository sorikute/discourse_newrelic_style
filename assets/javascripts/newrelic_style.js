// border color on category model for template overrides
Discourse.Category = Discourse.Category.extend({
    borderStyle: function(){
	var color = this.get('color');
	if (color) {
      return 'border-left:5px solid #'+color+';'
	}
    }.property('color')
});
