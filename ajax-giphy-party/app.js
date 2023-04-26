const key = 'R6FmUgKr5J2Pw3pFxtfulwAnhC7akFai'

$(document).ready(function() {
	console.log("Let's get this party started!");
	// get delete button and add function that searches all "img" tag and remove all of them
	$('#delete').on('click', function(e){
		e.preventDefault();
		$('img').remove()
	})
	$('#search').on('click', async function(e){
		e.preventDefault();
		let tag = $('#tag').val()
		console.log(tag)
		let imgUrl = await getUrl(key,tag);
		console.log(imgUrl)
		createImg(imgUrl);
	})

});
//https://api.giphy.com/v1/gifs/random?api_key=R6FmUgKr5J2Pw3pFxtfulwAnhC7akFai&tag=funny
//gets the url for the pic from the api 
async function getUrl(api_key,tag) {
	let response = await axios.get('https://api.giphy.com/v1/gifs/random', { params: {api_key, tag} });
	return response.data.data.images.downsized.url;
}

// create img and give src "getUrl"
function createImg(imgUrl){
	$('body').append($(`<img src=${imgUrl}>`))
}
