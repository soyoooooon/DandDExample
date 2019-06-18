(()=>{
	console.log("Trevor");
	// set up the puzzle pieces and boards

	const piecesBoard = document.querySelector(".puzzle-pieces"),
		  puzzleBoard = document.querySelector(".puzzle-board"),
		  puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		  dropZones = document.querySelectorAll(".drop-zone");

	
	let draggablePieces = piecesBoard.querySelectorAll("img");

	//arrays are indexed and start at 0

	const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	




	function switchImage() {
		console.log(this)
		//grab the corresponding background image ( 0, 1, 2 or 3)
		//and get it from the images folder (backGround1.jpg as an examole)
		let bgImage=`./images/backGround${this.dataset.puzzleref}.jpg`;

		//set the background image style on the dropzone container//
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;

		//work on switching the right-hand images so that they match the buttons at the bottom
		draggablePieces.forEach((image, index) => {

		//console.log(image, index);

		//try to change each image source
		image.src = `images/${imageNameArray[index] + this.dataset.puzzleref}.jpg`;
		});	


		
	}





	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });

	//loop through the draggable images

	//this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e){
			console.log("draggin..");

	 		//dataTransfer has two methods, a setter and getter
	 		//set data on the drag, and retrieve it on the drop
	 		e.dataTransfer.setData("text/plain", this.id);	
		});
	});

	//this is the dragover and drop functionality => this is for the drop zones
	dropZones.forEach(zone =>{
		//allow user to drag over an element
		zone.addEventListener("dragover", function(e) {
			e.preventDefault(); //don't do your default behavior//
			console.log("dragged sumpin over me");
		});

		//allow a user to drop an element
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumpin on me");


			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log("you dragged: " , draggedElement);

			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	}) 
	
})();