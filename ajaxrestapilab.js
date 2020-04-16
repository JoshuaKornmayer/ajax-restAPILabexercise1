
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
$('#comment12').click(function(x){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12} , function(x){
		console.log(x);
			list1.empty();
			x.forEach(function(y){
			var myList = $('<li></li>');
			myList.text(JSON.stringify(y));
			list1.append(myList);
		})
		})

	})

//4 Get all the posts from user with id of 2
$('#userid12').click(function(x){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/user/2/posts', function(x){
		console.log(x);
		list1.empty();
		x.forEach(function(y){
			if(y.userID == 2){
			var myList = $('<li></li>');
			myList.text(JSON.stringify(y));
			list1.append(myList);
			} else {
				console.log("no two here");
			} 
		})
	})
})

//5 Create a new post and log the id generated for it by the server
$('#newPost').click(function(p2){
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {
		userID: 85,
		id: 21,
		title: "New Post",
		body: "This is my New Post Body"
	} , function(p2){
		console.log(p2);
			list1.empty();
			var myList2 = $('<li></li>');
			myList2.text(JSON.stringify(p2));
			list1.append(myList2);
		})

	})

//6 Replace the post with id of 12 and render the responseJSON
$('#replacePost').click(function(p2){
	$.ajax({
		method: 'PUT',
		url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
		data: {
			userID: 85,
			id: 21,
			title: "Updated New Post",
			Body: "This is the updated new post" 
		}, complete: function(response){
			console.log(response.responseJSON);
		}
	}, function(p2){
			console.log(p2);
				list1.empty();
				var myList2 = $('<li></li>');
				myList2.text(JSON.stringify(p2));
				list1.append(myList2);
			}
	)
})



//7 Update the title of post with id of 12 and render responseJSON
$('#updatePost').click(function(p2){
	$.ajax({
		method: 'PATCH',
		url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
		data: {
		
			title: "Patched",
			 
		}, complete: function(response){
			console.log(response.responseJSON);
		}
	}, function(p2){
			console.log(p2);
				list1.empty();
				var myList2 = $('<li></li>');
				myList2.text(JSON.stringify(p2));
				list1.append(myList2);
			}
	)
})

//8 Delete the post with id of 12 and render a success message

//9 Display a list of posts

//10 When the user clicks on a post, display all the comments from that post

//11 Display a link back to all posts





