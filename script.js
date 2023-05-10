


//  NASA API

const count = 10;
const apiKEY = "DEMO_KEY";
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
async function getNASAPictures() {
	try {
		const response = await fetch(apiURL);
		resultsArray = await response.json();
		console.log(resultsArray);
	} catch (error) {
		// Catch error here
	}
}

//  On Load
getNASAPictures();