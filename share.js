
$(function(){

	$("ul li").click(function(){

		var id=$(this).attr("id");
		chrome.tabs.getSelected(null,function(tab){

			link=tab.url;
			title=tab.title;

			
			 if (id=="twitter")
			{
				window.open("https://twitter.com/intent/tweet?text=" + title +"&url=" + link, "yenipencere","menubar=1,resizable=1,width=550,height=300");
			}
			else
			{
				window.close();
			}

		

		});


	});



});