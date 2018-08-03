var image = document.getElementById("slide-image")
var larrow = document.getElementById("lArrow")
var rarrow = document.getElementById("rArrow")

larrow.addEventListener("click", changeImg);
rarrow.addEventListener("click", changeImg);

function changeImg(event){
	// Getting img number
	num = image.src.slice(-5, -4)
	num = parseInt(num)

	// Remove active class from current indicator
	var activeInd = document.getElementById("ind" + num)
	activeInd.classList.remove("active")

	// Change img num
	if(event.target.id == "lArrow")
	{
		num = num - 1
	} else {
		num = num + 1
	}	

	// Check for over/underflow of num
	if(num < 1)
	{
		num = 3
	} else if(num > 3)
	{
		num = 1
	}
	// Add active class to new indicator
	var activeInd = document.getElementById("ind" + num)
	activeInd.classList.add("active")

	// Finally, change shown image
	image.src = image.src.slice(0, -5) +  num + ".jpg"
}
