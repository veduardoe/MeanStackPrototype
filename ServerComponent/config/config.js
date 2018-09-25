
module.exports = {
      newsModel : {
        title: String,
        created_at:Date,
        url: String,
        author: String,
        points: Number,
        story_text: String,
        comment_text: String,
        num_comments: Number,
        story_id: Number,
        story_title: String,
        story_url: String,
        _tags: Array,
        _highlightResult: Object
      },
      newsData: function(element){
        return {
								"title": element.title,
                "created_at":element.created_at,
		            "url": element.url,
		            "author": element.author,
		            "points": element.points,
		            "story_text": element.story_text,
		            "comment_text": element.comment_text,
		            "num_comments": element.num_comments,
		            "story_id": element.story_id,
		            "story_title": element.story_title,
		            "story_url": element.story_url,
		            "_tags": element._tags,
		            "_highlightResult": element._highlightResult
  						}
      }
    };
