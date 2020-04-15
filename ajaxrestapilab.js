
//


//1 get all posts
let list1 = $('ul.posts1');

$('#getPosts').click(function(x){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
		console.log(x);
		list1.empty();
		x.forEach(function(y){
			var myList = $('<li></li>');
			myList.text(JSON.stringify(y));
			list1.append(myList);
		})
	})
})
//1

//2 Get posts with ID = 10
$('#id10').click(function(p2){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(p2){
		console.log(p2);
			list1.empty();
			var myList2 = $('<li></li>');
			myList2.text(JSON.stringify(p2));
			list1.append(myList2);
		})

	})

//2

//3
$('#comment12').click(function(p2){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments/12', function(p2){
		console.log(p2);
			list1.empty();
			var myList2 = $('<li></li>');
			myList2.text(JSON.stringify(p2));
			list1.append(myList2);
		})

	})



