// Insert your ajax code here
$(document).ready(function(){
    $.ajax({
        type : 'GET',
        dataType : 'json',
        async: false,
        url : 'json/datatweet.json',
        success : function(data){
            console.log(data);
            $.each(data, function(index, obj){
                var syntax = 
                "<div class='media'>"+
						"<a class='media-left' href='#fake'>"+
							'<img alt="" width="64px" height="64" class="media-object img-rounded" src="'+obj.user.url_image+'">'+
						'</a>'+
						'<div class="media-body">'+
							'<h4 class="media-heading">'+obj.user.name+'</h4>'+
							'<p>'+obj.text+'</p>'+
							'<ul class="nav nav-pills nav-pills-custom">'+
								'<li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>'+
								'<li><a href="#"><span class="glyphicon glyphicon-retweet"> '+obj.retweet_count+' </span></a></li>'+
								'<li><a href="#"><span class="glyphicon glyphicon-star"> '+obj.favourite_count+' </span></a></li>'+
								'<li><a href="#"><span class="glyphicon glyphicon-option-horizontal"></span></a></li>'+
							'</ul>'+
                        '</div>';
                $(".tweet").append(syntax);
            });          
        }
    });

    $.getJSON("json/profile.json",function(data){
        console.log(data);
        $("#fotopf img").attr({
            'src':data.url_image,
            'width': "100%"
        });
        $("#twt").text(data.tweet_count);
        $("#flwi").text(data.friends_count);
        $("#flwrs").text(data.followers_count);
        $("#fotosml img").attr({
            'src': data.url_image,
            'width': "32px",
            'height': "32px"
        });
    });
});



// End of your ajax code
// Insert your getJSON code here






// End of your code