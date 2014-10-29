var addBotton = document.getElementById("addTvShow");
var x = 1;
var y = 2;

addBotton.onclick = function (x, y) {
    var enteringDiv = document.getElementById("enteringDiv");
    if (enteringDiv.innerHTML == '') {

        var enterMovieName = document.createElement("input");
        enterMovieName.setAttribute("type", "text");
        enterMovieName.setAttribute("placeholder", "TV show name");
        enterMovieName.setAttribute("id", "bookName");

        var enterAuthorName = document.createElement("input");
        enterAuthorName.setAttribute("type", "text");
        enterAuthorName.setAttribute("placeholder", "What Season");
        enterAuthorName.setAttribute("id", "authorName");

        var enterWhatEpisode = document.createElement("input");
        enterWhatEpisode.setAttribute("type", "text");
        enterWhatEpisode.setAttribute("placeholder", "What Episode");
        enterWhatEpisode.setAttribute("id", "episode");

        var enterRating = document.createElement("input");
        enterRating.setAttribute("type", "text");
        enterRating.setAttribute("placeholder", "Give a score(1-10)");
        enterRating.setAttribute("id", "score");

        var addTheBookButton = document.createElement("button");
        addTheBookButton.setAttribute("onclick", "addBook(x)");
        addTheBookButton.setAttribute("id", "button");

        var addTheBookButton2 = document.createElement("button");
        addTheBookButton2.setAttribute("onclick", "addBook(y)");
        addTheBookButton2.setAttribute("id", "button2");

        var textForButoon = document.createTextNode("Add to watch list");
        addTheBookButton.appendChild(textForButoon);
        var textForButoon = document.createTextNode("Add to favorites");
        addTheBookButton2.appendChild(textForButoon);

        enteringDiv.appendChild(enterMovieName);
        enteringDiv.appendChild(enterAuthorName);
        enteringDiv.appendChild(enterWhatEpisode);
        enteringDiv.appendChild(enterRating);
        enteringDiv.appendChild(addTheBookButton);
        enteringDiv.appendChild(addTheBookButton2);

        document.getElementById('bookName').focus();



        var topDiv = document.getElementById("firstDiv");
        topDiv.appendChild(enteringDiv);
    } else {
        reset();
    }

}

function plusButtonInMiddelOfThePage(x, y) {
    var enteringDiv = document.getElementById("enteringDiv");
    if (enteringDiv.innerHTML == '') {

        var enterMovieName = document.createElement("input");
        enterMovieName.setAttribute("type", "text");
        enterMovieName.setAttribute("placeholder", "TV show name");
        enterMovieName.setAttribute("id", "bookName");

        var enterAuthorName = document.createElement("input");
        enterAuthorName.setAttribute("type", "text");
        enterAuthorName.setAttribute("placeholder", "What Season");
        enterAuthorName.setAttribute("id", "authorName");

        var enterWhatEpisode = document.createElement("input");
        enterWhatEpisode.setAttribute("type", "text");
        enterWhatEpisode.setAttribute("placeholder", "What Episode");
        enterWhatEpisode.setAttribute("id", "episode");

        var enterRating = document.createElement("input");
        enterRating.setAttribute("type", "text");
        enterRating.setAttribute("placeholder", "Give a score(1-10)");
        enterRating.setAttribute("id", "score");

        var addTheBookButton = document.createElement("button");
        addTheBookButton.setAttribute("onclick", "addBook(x)");
        addTheBookButton.setAttribute("id", "button");

        var addTheBookButton2 = document.createElement("button");
        addTheBookButton2.setAttribute("onclick", "addBook(y)");
        addTheBookButton2.setAttribute("id", "button2");

        var textForButoon = document.createTextNode("Add to watch list");
        addTheBookButton.appendChild(textForButoon);
        var textForButoon = document.createTextNode("Add to favorites");
        addTheBookButton2.appendChild(textForButoon);

        enteringDiv.appendChild(enterMovieName);
        enteringDiv.appendChild(enterAuthorName);
        enteringDiv.appendChild(enterWhatEpisode);
        enteringDiv.appendChild(enterRating);
        enteringDiv.appendChild(addTheBookButton);
        enteringDiv.appendChild(addTheBookButton2);

        document.getElementById('bookName').focus();

        var topDiv = document.getElementById("firstDiv");
        topDiv.appendChild(enteringDiv);
    } else {
        reset();
    }

}

function Book(bookName, authorName, episode, score, k) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.episode = episode;
    this.score = score;
    this.k = k;
};

function reset() {
    document.getElementById("bookName").remove();
    document.getElementById("authorName").remove();
    document.getElementById("episode").remove();
    document.getElementById("score").remove();
    document.getElementById("button").remove();
    document.getElementById("button2").remove();


}

function addBook(k) {
    var bookName = document.getElementById('bookName').value;
    var authorName = document.getElementById('authorName').value;
    var episode = document.getElementById('episode').value;
    var score = document.getElementById('score').value;
    var k = k;


    var lengthOfBookName = bookName.length;
    var lengthOfAuther = authorName.length;
    var lengthOfEpisode = episode.length;
    var lengthOfScore = score.length;

    if (lengthOfBookName > 0 && lengthOfAuther > 0 && lengthOfEpisode > 0 && lengthOfScore > 0) {
        if (score > 0 && score < 11) {
            var book = new Book(bookName, authorName, episode, score, k);
            reset();
            addToList(book);
        } else {
            score = document.getElementById('score');
            score.style.color = "red";
            //alert("please enter a number from 1-10")
            score.value = "enter a number from 1-10";
            document.getElementById('score').focus();
        }
    } else {
        alert("please enter all fields");
    }
}

function lalalala(e) {
    if (e.keyCode == 13) {
        var inputNewValue = e.target.value;
        var parentOfInput = e.target.parentElement;
        parentOfInput.innerHTML = inputNewValue;
    }
}

function addToList(book) {


    var newElement = document.createElement("li");
    newElement.className = "liInList"

    var bookNameDiv = document.createElement("div");
    bookNameDiv.innerHTML = book.bookName;
    bookNameDiv.className = "divInlist";

    var authorNameDiv = document.createElement("div");
    authorNameDiv.innerHTML = book.authorName;
    authorNameDiv.className = "divInlist";

    var episodeDiv = document.createElement("div");
    episodeDiv.innerHTML = book.episode;
    episodeDiv.className = "divInlist";

    var scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = book.score;
    scoreDiv.className = "divLastInlist";

    var garbege = document.createElement("button");
    garbege.className = "garbage";
    garbege.onclick = function whenClickOnGarbege(x) {
        x.target.parentElement.remove();
    };
    var edit = document.createElement("button");
    edit.className = "edit";
    edit.onclick = function whenClickOnEdit(x) {
		edit.style.display = "none";
        var parent = x.target.parentElement;  //li
		
		var edit1 = document.createElement("button");
		edit1.className = "privetEdit";
		var edit2 = document.createElement("button");
		edit2.className = "privetEdit";
		var edit3 = document.createElement("button");
		edit3.className = "privetEdit";
		var edit4 = document.createElement("button");
		edit4.className = "privetEdit";

		parent.appendChild(edit1);
		parent.appendChild(edit2);
		parent.appendChild(edit3);
		parent.appendChild(edit4);

		edit1.onclick = function whenClickOnEdit(x) {
			edit.style.display = "none";
		    var divsInLI = parent.children; 
			var firstDivInLI = divsInLI[0]; //first div
			var content = firstDivInLI.innerHTML;
			var x = content.length;
			
			var editInput = document.createElement("input");
			editInput.setAttribute("type", "text");
			editInput.setAttribute("id", "editInput1");
			editInput.setAttribute("value", content);
			editInput.className = "editInput";
			firstDivInLI.innerHTML = "";
			firstDivInLI.appendChild(editInput);
			document.getElementById('editInput1').focus();
			editInput.onkeyup = function () {
			if (event.keyCode == 27) {
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = content;
					parentOfInput.parentElement.children[5].style.display = "inline";
				
				} else if (event.keyCode == 13) {
					var inputNewValue = event.target.value;
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = inputNewValue;
					parentOfInput.parentElement.children[5].style.display = "inline";
					
				}
				
			}};
        edit2.onclick = function whenClickOnEdit(x) {
			edit.style.display = "none";
		    var divsInLI = parent.children; 
			var firstDivInLI = divsInLI[1]; //first div
			var content = firstDivInLI.innerHTML;
			var x = content.length;
			
			var editInput = document.createElement("input");
			editInput.setAttribute("type", "text");
			editInput.setAttribute("id", "editInput1");
			editInput.setAttribute("value", content);
			editInput.className = "editInput";
			firstDivInLI.innerHTML = "";
			firstDivInLI.appendChild(editInput);
			document.getElementById('editInput1').focus();
			editInput.onkeyup = function () {
			if (event.keyCode == 27) {
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = content;
					parentOfInput.parentElement.children[5].style.display = "inline";
				} else if (event.keyCode == 13) {
					var inputNewValue = event.target.value;
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = inputNewValue;
					parentOfInput.parentElement.children[5].style.display = "inline";
				}
			}};
        edit3.onclick = function whenClickOnEdit(x) {
			edit.style.display = "none";
		    var divsInLI = parent.children; 
			var firstDivInLI = divsInLI[2]; //first div
			var content = firstDivInLI.innerHTML;
			var x = content.length;
			
			var editInput = document.createElement("input");
			editInput.setAttribute("type", "text");
			editInput.setAttribute("id", "editInput1");
			editInput.setAttribute("value", content);
			editInput.className = "editInput";
			firstDivInLI.innerHTML = "";
			firstDivInLI.appendChild(editInput);
			document.getElementById('editInput1').focus();
			editInput.onkeyup = function () {
			if (event.keyCode == 27) {
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = content;
					parentOfInput.parentElement.children[5].style.display = "inline";
				} else if (event.keyCode == 13) {
					var inputNewValue = event.target.value;
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = inputNewValue;
					parentOfInput.parentElement.children[5].style.display = "inline";
				}
			}};
        edit4.onclick = function whenClickOnEdit(x) {
			edit.style.display = "none";
		    var divsInLI = parent.children; 
			var firstDivInLI = divsInLI[3]; //first div
			var content = firstDivInLI.innerHTML;
			var x = content.length;
			
			var editInput = document.createElement("input");
			editInput.setAttribute("type", "text");
			editInput.setAttribute("id", "editInput1");
			editInput.setAttribute("value", content);
			editInput.className = "editInput";
			firstDivInLI.innerHTML = "";
			firstDivInLI.appendChild(editInput);
			document.getElementById('editInput1').focus();
			editInput.onkeyup = function () {
			if (event.keyCode == 27) {
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = content;
					parentOfInput.parentElement.children[5].style.display = "inline";
				} else if (event.keyCode == 13) {
					var inputNewValue = event.target.value;
					var parentOfInput = event.target.parentElement;
					parentOfInput.innerHTML = inputNewValue;
					parentOfInput.parentElement.children[5].style.display = "inline";
				}
			}};
        
    };


    newElement.appendChild(bookNameDiv);
    newElement.appendChild(authorNameDiv);
    newElement.appendChild(episodeDiv);
    newElement.appendChild(scoreDiv);
    newElement.appendChild(garbege);
    newElement.appendChild(edit);

    if (book.k == 1) {
        var deleteMe = document.getElementById('warningEmptyWatchList');
        if (deleteMe !== null) {
            deleteMe.remove();
        }
        var ul = document.getElementById("bookList");
        var category = document.getElementById("category");
        category.style.display = "inline";

    } else {
        var deleteMe = document.getElementById('warningEmptyFavoritesList');
        if (deleteMe !== null) {
            deleteMe.remove();
        }
        var ul = document.getElementById("bookList2");
        var category = document.getElementById("category2");
        category.style.display = "inline";

    }
    ul.appendChild(newElement);

}
