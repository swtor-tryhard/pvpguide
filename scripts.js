$(function()
		{
			$(".tabcontrol").tabs();
			$(".yt-placeholder").click(function()
			{
				$(this).replaceWith('<iframe src="https://www.youtube.com/embed/' + $(this).data('vid') + '?autoplay=1"></iframe>');
			});
			$(".expansible-expander").click(function()
			{
				var container = $(this).parents(".expansible-container");
				var content = container.children(".expansible-content");

				container.replaceWith(content);
				$("html, body").animate({
					scrollTop: ($(content).offset().top)
				}, 500);
			})
		});