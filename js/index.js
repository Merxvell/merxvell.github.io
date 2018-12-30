$( function()
{
	//part 1
	//on click of an an image that provides links
	//images and divs that should do this
	//chan, music, school, work

	$('#chan').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#4chanList').addClass('active').show('300');
	});

	$('#music').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#musicList').addClass('active').show('300');
	});

	$('#school').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#schoolList').addClass('active').show('300');
	});

	$('#work').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#workList').addClass('active').show('300');
	});

	$('#resources').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#resourceList').addClass('active').show('300');
	});

});
