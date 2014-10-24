var addBotton = document.getElementById("addTvShow");

	addBotton.onclick = function(){
		var topDiv = document.getElementById("firstDiv");
		
		var enterMovieName = document.createElement("input");
		enterMovieName.setAttribute("button", "text");
		enterMovieName.setAttribute("placeholder", "Book name");
		enterMovieName.setAttribute("id", "bookName");
		
		var enterAuthorName = document.createElement("input");
		enterAuthorName.setAttribute("button", "text");
		enterAuthorName.setAttribute("placeholder", "Author name");
		enterAuthorName.setAttribute("id", "authorName");
		
		var enterRating = document.createElement("input");
		enterRating.setAttribute("button", "text");
		enterRating.setAttribute("placeholder", "Give a score(1-10)");
		enterRating.setAttribute("id", "score");
		
		var addTheBookButton = document.createElement("button");
		addTheBookButton.setAttribute("onclick", "addBook()");
		
		var textForButoon = document.createTextNode("Add this TV show");
		addTheBookButton.appendChild(textForButoon);
		
		var enteringDiv = document.createElement("div");
		enteringDiv.setAttribute("id", "enteringDiv");
		
		enteringDiv.appendChild(enterMovieName);
		enteringDiv.appendChild(enterAuthorName);
		enteringDiv.appendChild(enterRating);
		enteringDiv.appendChild(addTheBookButton);
		
		topDiv.appendChild(enteringDiv);
		
	}

function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};

function reset(){
	document.getElementById("enteringDiv").remove();

}

function addBook(){
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	
	var lengthOfBookName = bookName.length;
	var lengthOfAuther = authorName.length;
	var lengthOfScore = score.length;
	
	if (lengthOfBookName > 0 && lengthOfAuther > 0 && lengthOfScore > 0){
		if(score > 0 && score < 11){
		var book = new Book(bookName, authorName, score);
		addToList(book);
		reset();
		}else{
			alert("please enter a number from 1-10")
		}
	}else{
		alert("please enter all fields");
	}
	
	
}

function addToList(book) {
		var newElement = document.createElement("li");
		newElement.id = "liList"
		
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		
		var garbege = document.createElement("button");
		garbege.className = "garbage";
		garbege.onclick = function whenClickOnGarbege(){
							
							var parentLi = garbege.parentNode;
							parentLi.id = "parentLiOfGarbege"
							document.getElementById("parentLiOfGarbege").remove();			
							};
		
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		newElement.appendChild(garbege);
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement);
}
