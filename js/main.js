
$(function() {
	$('#tweet-controls').css('height','0px')
	$('.tweet-actions').css('visibility','hidden')
	$('.tweet-actions').css('height','0px')
	$('textarea').click(function() {
	 $(this).css('height','300px');	
 	 $('#tweet-controls').css('visibility','visible');
 	 $('#tweet-controls').css('height','34px')

	
});
	$('textarea').keyup(function(){
		var remain=140-$(this).val().length
		$('#char-count').text(remain);

		//if what i type is greater than 130 characters then turn the number count to red
		if(remain <= 10) {
			$('#char-count').css('color','red');
		}
		else{
			$('#char-count').css('color','#999');
		}
		if(remain <= 0) {
			$('#tweet-submit').attr('disabled', 'disabled');
		}
		else{
			$('#tweet-submit').attr('disabled', false);
		}
	});
	$('#tweet-submit').click(function(){
		var value = $('textarea').val();
     	newTweet = $('.tweet').eq(0).clone();

			newTweet.find('.tweet-text').text(value);
			newTweet.find('.avatar').attr('src', 'img/doctor.png');
			newTweet.find('.fullname').text('Space Gandalf');
			newTweet.find('.username').text('@theDoctor');
			newTweet.find('.tweet-compose').attr('placeholder','Reply to @theDoctor');
			
			newTweet.find('.num-retweets').text(0);
			newTweet.find('.num-favorites').text(0);
			//last sent to Sarah
			newTweet.find('.time').text($.timeago(new Date()));
		$('#stream').prepend(newTweet);
		$('textarea').val("");
		$('.tweet-compose').css('height','2.5em');	
 		$('#tweet-controls').css('visibility','hidden');
 		$('#tweet-controls').css('height','0px')
	
	});
	$('.content').mouseenter(function(){
		$('.tweet-actions').css('height',)

	});
});