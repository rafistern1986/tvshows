var x = 1;
var y = 2;
var tvShowsArray = [];


if (localStorage.getItem("arrayInStorage") !== null) {
    var arra = JSON.parse(localStorage.getItem("arrayInStorage"));
    for (var i = 0; i < arra.length; i++) {
        addToList(arra[i]);
        tvShowsArray.push(arra[i]);
    }
    //buildNewSearchedList(arra);
    // tvShowsArray.push(arra);
}







function createElmentWith3AttributesAndOneTextNode(elementName, attribute1_1, attribute1_2, attribute2_1, attribute2_2, attribute3_1, attribute3_2, textNode) {
    var elment = document.createElement(elementName);
    elment.setAttribute(attribute1_1, attribute1_2);
    elment.setAttribute(attribute2_1, attribute2_2);
    elment.setAttribute(attribute3_1, attribute3_2);
    var textForButoon = document.createTextNode(textNode);
    elment.appendChild(textForButoon);
    return elment;
}


function appendChildToParent(parent, child1, child2, child3, child4, child5, child6) {
    var child1 = parent.appendChild(child1),
        child2 = parent.appendChild(child2),
        child3 = parent.appendChild(child3),
        child4 = parent.appendChild(child4),
        child5 = parent.appendChild(child5),
        child6 = parent.appendChild(child6);

}



var topPlus = document.getElementById("addTvShow");
var leftMiddlePlus = document.getElementById("addTvShow2");
//addOnclickEvent(topPlus, whenPlusIsPress);
//addOnclickEvent(leftMiddlePlus, whenPlusIsPress);

//function addOnclickEvent(elment, theFunction) {
topPlus.addEventListener("click", whenPlusIsPress);
leftMiddlePlus.addEventListener("click", whenPlusIsPress);
//}

/*var topPlus = document.getElementById("addTvShow");
var leftMiddlePlus = document.getElementById("addTvShow2");
addOnclickEvent(topPlus, whenPlusIsPress);
addOnclickEvent(leftMiddlePlus, whenPlusIsPress);

function addOnclickEvent(elment, theFunction) {
    elment.addEventListener("click", theFunction);
}*/









function whenPlusIsPress(x, y) {
    document.getElementById("noResults").style.display = "none";
    var enteringDiv = document.getElementById("enteringDiv");
    if (enteringDiv.innerHTML == '') {

        var enterMovieName = createElmentWith3AttributesAndOneTextNode("input", "type", "text", "placeholder", "TV show name", "id", "tvShowName");
        var enterSeason = createElmentWith3AttributesAndOneTextNode("input", "type", "text", "placeholder", "What Season", "id", "season");
        var enterWhatEpisode = createElmentWith3AttributesAndOneTextNode("input", "type", "text", "placeholder", "What Episode", "id", "episode");
        var enterRating = createElmentWith3AttributesAndOneTextNode("input", "type", "text", "placeholder", "Give a score(1-10)", "id", "score");
        var addTheTvShowButton = createElmentWith3AttributesAndOneTextNode("button", "onclick", "addTvShow(x)", "id", "button", "x", "x", "Add");


        appendChildToParent(enteringDiv, enterMovieName, enterSeason, enterWhatEpisode, enterRating, addTheTvShowButton)
        //document.querySelector(".all2InThis1").style.marginTop = "-96px"; //this will make the inputs be ontop of the lists
        //var topDiv = document.getElementById("firstDiv");
        //appendChildToParent(topDiv, enteringDiv);
        enterMovieName.foucs(); //select on top input

    } else {
        reset();
    }
}

function TvShowsObj(tvShowName, season, episode, score, k) {
    this.tvShowName = tvShowName;
    this.season = season;
    this.episode = episode;
    this.score = score;
    this.k = k;
};

function reset() {
    document.getElementById("tvShowName").remove();
    document.getElementById("season").remove();
    document.getElementById("episode").remove();
    document.getElementById("score").remove();
    document.getElementById("button").remove();

    document.querySelector(".all2InThis1").style.marginTop = "10px";


}




var to;

function searchForTvShowAsYouType() {
    if (to !== undefined) {
        clearTimeout(to);
    }
    to = setTimeout(searchForTvShow, 500);
}


function searchForTvShow() {
    document.getElementById("noResults").style.display = "none";
    clearAllTvShows();
    var searchWords = document.getElementById("searchWords").value;
    var searchResultsArray = [];
    for (var i = 0; i < tvShowsArray.length; i++) {
        if (tvShowsArray[i].tvShowName.indexOf(searchWords) > -1) {
            searchResultsArray.push(tvShowsArray[i]);
        }
    }
    if (searchResultsArray.length !== 0) {
        buildNewSearchedList(searchResultsArray);
    } else {

        if (searchWords !== "") {


            clearAllTvShows();
            document.getElementById("noResults").style.display = "inline-block";
        }
    }

}

function buildNewSearchedList(searchResultsArray) {
    for (var i = 0; i < searchResultsArray.length; i++) {
        addToList(searchResultsArray[i]);
    }
}

function clearAllTvShows() {
    var ul = document.getElementById("tvShowList");
    ul.innerHTML = '';
}

function addTvShow(k) {
    var tvShowName = document.getElementById('tvShowName').value;
    var season = document.getElementById('season').value;
    var episode = document.getElementById('episode').value;
    var score = document.getElementById('score').value;
    var k = k;


    var lengthOfTvShowName = tvShowName.length;
    var lengthOfAuther = season.length;
    var lengthOfEpisode = episode.length;
    var lengthOfScore = score.length;

    if (lengthOfTvShowName > 0 && lengthOfAuther > 0 && lengthOfEpisode > 0 && lengthOfScore > 0) {
        if (score > 0 && score < 11) {
            var tvShow = new TvShowsObj(tvShowName, season, episode, score, k);
            reset();
            tvShowsArray.push(tvShow);
            var arrayInString = JSON.stringify(tvShowsArray);
            localStorage.setItem("arrayInStorage", arrayInString);
            addToList(tvShow);
        } else {
            score = document.getElementById('score');
            score.value = "enter a number from 1-10";
            score.style.backgroundColor = "red";
            score.select();

        }
    } else {
        alert("please enter all fields");
    }
}

function creatDivWithInnerHtmlAndClass(innerHtml, className) {
    var div = document.createElement("div");
    div.innerHTML = innerHtml;
    div.className = className;
    return div;
}

function creatButtonWithClass(className) {
    var button = document.createElement("button");
    button.className = className;
    return button;
}

function addToList(tvShow) {
    var newElement = document.createElement("li");
    newElement.className = "liInList";
    var tvShowNameDiv = creatDivWithInnerHtmlAndClass(tvShow.tvShowName, "divInlist");
    var seasonDiv = creatDivWithInnerHtmlAndClass(tvShow.season, "divInlist");
    var episodeDiv = creatDivWithInnerHtmlAndClass(tvShow.episode, "divInlist");
    var scoreDiv = creatDivWithInnerHtmlAndClass(tvShow.score, "divLastInlist");
    var garbege = creatButtonWithClass("garbage");









    garbege.onclick = function (x) {

        var parent = x.target.parentElement; //li
        var liChildren = parent.children[0].innerHTML;

        var searchWords = liChildren;
        for (var i = 0; i < tvShowsArray.length; i++) {
            if (tvShowsArray[i].tvShowName.indexOf(searchWords) > -1) {
                tvShowsArray.splice(i, 1);
                var arrayInString = JSON.stringify(tvShowsArray);
                localStorage.setItem("arrayInStorage", arrayInString);
            }
        }

        x.target.parentElement.remove();
    };









    var edit = creatButtonWithClass("edit");
    edit.onclick = function whenClickOnEdit(x) {
        edit.style.display = "none";
        var parent = x.target.parentElement; //li
        var edit1 = creatButtonWithClass("privetEdit");
        var edit2 = creatButtonWithClass("privetEdit");
        var edit3 = creatButtonWithClass("privetEdit");
        var edit4 = creatButtonWithClass("privetEdit");
        parent.appendChild(edit1);
        parent.appendChild(edit2);
        parent.appendChild(edit3);
        parent.appendChild(edit4);


        edit1.onclick = function whenClickOnEdit(x) {
            edit1.style.display = "none";
            edit2.style.display = "none";
            edit3.style.display = "none";
            edit4.style.display = "none";
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
            }
        };
        edit2.onclick = function whenClickOnEdit(x) {
            edit1.style.display = "none";
            edit2.style.display = "none";
            edit3.style.display = "none";
            edit4.style.display = "none";
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
            }
        };
        edit3.onclick = function whenClickOnEdit(x) {
            edit1.style.display = "none";
            edit2.style.display = "none";
            edit3.style.display = "none";
            edit4.style.display = "none";
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
            }
        };
        edit4.onclick = function whenClickOnEdit(x) {
            edit1.style.display = "none";
            edit2.style.display = "none";
            edit3.style.display = "none";
            edit4.style.display = "none";
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
            }
        };

    };


    newElement.appendChild(tvShowNameDiv);
    newElement.appendChild(seasonDiv);
    newElement.appendChild(episodeDiv);
    newElement.appendChild(scoreDiv);
    newElement.appendChild(garbege);
    newElement.appendChild(edit);

    // if (tvShow.k == 1) {
    var deleteMe = document.getElementById('warningEmptyWatchList');
    if (deleteMe !== null) {
        deleteMe.remove();
    }
    var ul = document.getElementById("tvShowList");
    var category = document.getElementById("category");
    category.style.display = "inline";

    //  } else {
    //     var deleteMe = document.getElementById('warningEmptyFavoritesList');
    //     if (deleteMe !== null) {
    //         deleteMe.remove();
    //     }
    //    var ul = document.getElementById("tvShowList2");
    //    var category = document.getElementById("category2");
    //    category.style.display = "inline";


    ul.appendChild(newElement);

}
