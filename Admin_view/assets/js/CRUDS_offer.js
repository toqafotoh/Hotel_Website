// get data from page html
let offer_name = document.getElementById("OfferType");
let offer_price = document.getElementById("OfferPrice");
let submit_offer = document.getElementById("submit_offer");

// ###########################################################################
const elementSuccess = document.getElementById("messageSuccess");
const elementError = document.getElementById("messageError");
// ###########################################################################


// local storage
let data_offer;
if (localStorage.offer != null) {
	data_offer = JSON.parse(localStorage.offer);
} else {
	// initialize empty array
	data_offer = [];
}

// create product
submit_offer.onclick = function () 
{
	// make list with key and value to store it in local storage
	let new_offer = {
		name: offer_name.value.toLowerCase(),
		price: offer_price.value.toLowerCase()
	};

	// check if the user send empty values to store it or no
	if (offer_name.value != "" && offer_price.value != "")
		{
		// if (mood === "create") {
			data_offer.push(new_offer);
			// display message success
			elementSuccess.style.display = "block";
			setTimeout(() => {
				elementSuccess.style.display = "none";
			}, 2000);
			// clear cells
			offer_name.value = "";
			offer_price.value = "";
		}
		else 
		{
		// display message error
			elementError.style.display = "block";
			setTimeout(() => {
				elementError.style.display = "none";
			}, 3000);
		}
	// save to local storage
	localStorage.setItem("offer", JSON.stringify(data_offer));
	console.log(localStorage.getItem('offer'));
    console.log(localStorage.offer);
};

// selector
function selectOptions() {
	var list = ["Single", "Family", "Triple","Double"];
	var option = "";
	for (i = 0; i < list.length; i++) {
		option += '<option value = "' + list[i] + '">' + list[i] + "</option>";
	}
	document.getElementById("OfferType").innerHTML = option;
}
selectOptions();