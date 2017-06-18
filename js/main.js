function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

// create array with news (need for bookmarks)
	var arrayNewsBookmark = [];
function handleResponse (news) {


//put news to div
	var newsDiv = document.getElementById("main-wrap");
//delete all news from list
	newsDiv.innerHTML='';

// parse json with news into obj
	var objNews = JSON.parse(news);



//parse news items into object
//choose function to put news in accordance with category
			
	var precessingFunction;
 switch (clickedSource) {
  case 'business': precessingFunction = arrayNewsBusiness; //assign function in variable
   break;
  case 'entertainment': precessingFunction = arrayNewsEntertainment;
   break;
  case 'gaming': precessingFunction = arrayNewsGaming;
   break;
  case 'general': precessingFunction = arrayNewsGeneral;
   break;
  case 'music': precessingFunction = arrayNewsMusic;
   break;
  case'politics': precessingFunction = arrayNewsPoliticks;
   break;
  case 'science-and-nature': precessingFunction = arrayNewsScience;
   break;
  case 'sport': precessingFunction = arrayNewsSport;
   break;
  case 'technology': precessingFunction = arrayNewsTechnology;
   break;
  default: precessingFunction = arrayNewsBusiness;
}

  for (var i = 0; i< objNews.articles.length; i++){
   var oneDiv = precessingFunction(objNews.articles[i]);
    //use variable with assigned function exatly like this is a function
   newsDiv.appendChild(oneDiv);
   arrayNewsBookmark.push(objNews.articles[i]);
  }	


}

function handleOtherNews (news) {
	var listWrap = document.getElementById("main-sec-wrap");

	listWrap.innerHTML='';
	var listNews = JSON.parse(news);

	var processingFunction = lowNewsBlock;
	listWrap.innerHTML += "<div class='topnewsTitle '>Top News</div>"
	for (var i =0 ; i <listNews.articles.length; i++) {
		var oneRow = processingFunction(listNews.articles[i]);

		listWrap.appendChild(oneRow);

	}

}

function lowNewsBlock (newsRow) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('listRow', 'newsSourceItem');

	divWithNews.innerHTML += "<a class='newsLink resourceURL' onclick='openIframe(this)' href='#' data-newsurl="+newsRow.url+"><span>"+newsRow.title+"</span></a>";
	return divWithNews;
}



function arrayNews(newsDiv) {
// create new div with news
	var divWithNews = document.createElement("div");
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
//create new span with title
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
//create new span with description
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
//create new span with img
	divWithNews.innerHTML +=  "<img class='newsPic'src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<i class='icon-library icon'></i>";
//create new span with date of published
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";

//create new global link with 		date article link
	
//return div with news in the handleResponse function
	return divWithNews;
}

// function for business cards
function arrayNewsBusiness(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('business','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
// function to mark bookmark blue
	var bookMarkClass = retreiveBookmarks(newsDiv.url);

	divWithNews.innerHTML += "<div class='bookmark-btn "+bookMarkClass+" ' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic' alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-newspaper icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	
	return divWithNews;
	
}

// function for entertainment cards
function arrayNewsEntertainment(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('entertainment','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image'src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-headphones icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	
	return divWithNews;
}

// function for gaming cards
function arrayNewsGaming(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('gaming','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image'src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-headphones icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";

	return divWithNews;
}

// function for general cards
function arrayNewsGeneral(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('general','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image'src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-library icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	return divWithNews;
}

// function for music cards
function arrayNewsMusic(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('music','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-headphones icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	return divWithNews;
}

// function for politics cards
function arrayNewsPoliticks(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('politics','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-newspaper icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	return divWithNews;
}

// function for science-and-nature cards
function arrayNewsScience(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('science','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML +=  "<img class='newsPic'src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<i class='icon-spinner4 icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	return divWithNews;
}

// function for  sport cards
function arrayNewsSport(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('sport','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-baseball-set icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	return divWithNews;
}

// function for  technology cards
function arrayNewsTechnology(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('technology','newscard');
	divWithNews.setAttribute('data-position', arrayNewsBookmark.length);
	divWithNews.innerHTML += "<div class='bookmark-btn' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	divWithNews.innerHTML +=  "<img class='newsPic'  alt='No Image' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";
	divWithNews.innerHTML += "<i class='icon-library'></i>";
	divWithNews.innerHTML += "<i class='icon-accessibility icon'></i>";
	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";
	
	return divWithNews;
}
//function to receive all list news resourses

function listAllNewsRes (list) {
	var allResNews = document.getElementById("listOfNews");
//parse json into object
	var allResNewsObj = JSON.parse(list);
// iterate through the object and push every value into separate div

	for (var i = 0; i < allResNewsObj.sources.length; i++) {
		var oneDivwithRes = newDivForList(allResNewsObj.sources[i]);
		allResNews.appendChild(oneDivwithRes);
	}

	httpGetAsync("https://newsapi.org/v1/articles?source="+allResNewsObj.sources[0].id+"&sortBy=top&apiKey=4364e754d4084e4ca851af2a225ab93d", handleResponse);
	httpGetAsync("https://newsapi.org/v1/articles?source="+allResNewsObj.sources[0].id+"&sortBy=top&apiKey=4364e754d4084e4ca851af2a225ab93d", handleOtherNews);


}
//create div for each news sorse
function newDivForList (allResNews) {
	var DivToList = document.createElement("div");
	DivToList.classList.add("newsSourceItem")
// receive list of news with id and receive news category type
	DivToList.innerHTML+="<a onclick='getId(this)' class='resourceURL' href='#' data-source='"+allResNews.id+"' data-category='"+allResNews.category+"'>"+allResNews.name+"</a>";
	return DivToList;
}
//action on load
function getListNews() {
	httpGetAsync("https://newsapi.org/v1/sources",listAllNewsRes);
}

//function to receive source id of clicked source and add this function on news link
var clickedSource;
function getId (link) {
	var clickedLinked = link.dataset.source;
	clickedSource = link.dataset.category;
//add news recorce id to link (for receive news)
	httpGetAsync("https://newsapi.org/v1/articles?source="+clickedLinked+"&sortBy=top&apiKey=4364e754d4084e4ca851af2a225ab93d", handleResponse);
	httpGetAsync("https://newsapi.org/v1/articles?source="+clickedLinked+"&sortBy=top&apiKey=4364e754d4084e4ca851af2a225ab93d", handleOtherNews);
}


//create inner HTML function for each type of categories
// in handleResponce function check category type and launch correct function


//fuction to open iframe

function openIframe (link) {
//select news item and take url
	var checkedNews = link.dataset.newsurl;

//put url in the iframe src
	document.getElementsByTagName("iframe")[0].setAttribute("src",checkedNews);
//remove  display none
	document.getElementsByClassName("iframe-wrap")[0].classList.remove("hidenIframe");
//add active class to iframe
	document.getElementsByClassName("iframe-wrap")[0].classList.add("active");	
	document.getElementsByClassName("disableBody")[0].style = "background: grey; "	
	document.querySelector("div[class*='wrapmainblock']").style = "opacity: 0.6;"	


}

// function to close iframe

function closeIframe() {
//select close button
	var closeBtn = document.getElementsByClassName("closeButton");
//remove src attribute
	document.getElementsByTagName("iframe")[0].removeAttribute("src");
//add class hiden to iframe div
	document.getElementsByClassName("iframe-wrap")[0].classList.remove("active");
	document.getElementsByClassName("iframe-wrap")[0].classList.add("hidenIframe");
		document.getElementsByClassName("disableBody")[0].style = "background: none; "	
	document.querySelector("div[class*='wrapmainblock']").style = "opacity: 1;"	
}

//function to save news
function saveNews(link) {

// check # of the news in the array
	var checkedNewsNumber = link.dataset.position;

//add style to bookmark icon - push function to return activeNew or empty string
	//var bookCheck = retreiveBookmarks(arrayNewsBookmark[checkedNewsNumber].url);

//declare div that is checked 
	var checkedBlock = document.querySelector("div[class*='bookmark-btn'][data-position='"+checkedNewsNumber+"']");
	console.log(checkedBlock);
	checkedBlock.classList.toggle('activeNew');



//get old values from localstorage
	var oldOne = localStorage.getItem('bookmarks');

	var oldNews;
// check if the object empty
	if (oldOne!==null&&oldOne!==undefined) {
		oldNews = JSON.parse(oldOne);
	} else {
		oldNews=[];
	}	


	var existedNews = false;
//need to check if the news is alredy in bookmarks by url
	for (var i = 0; i < oldNews.length; i++) {

		var existedUrl = oldNews[i].url;
		if (existedUrl==arrayNewsBookmark[checkedNewsNumber].url) {
			oldNews.splice(i,1);
			existedNews= true;
			break;
		}
	}

	if (!existedNews) {

		oldNews.push(arrayNewsBookmark[checkedNewsNumber]);
	}
	
	var newsJSON = JSON.stringify(oldNews);
	

	

// Check browser support	
	if (typeof(Storage) !== "undefined") {
// Store
 	 localStorage.setItem("bookmarks", newsJSON);
 	  localStorage.setItem("color", '#8af2f2');	
}


	var bookmarksCount;
}


function retrieveBookmarks () {
	var oldOne = localStorage.getItem('bookmarks');
	var oldNews;
	arrayNewsBookmark= [];


// check if the object empty
	if (oldOne!==null&&oldOne!==undefined) {
		oldNews = JSON.parse(oldOne);
	} else  {
		oldNews=[];
	}
	
	var newsDiv = document.getElementById("bookmark");
	for (var i =0; i < oldNews.length; i++) {
		var oneDiv = arrayNewsBookmarkFunc(oldNews[i]);
		arrayNewsBookmark.push(oldNews[i]);
// error on null url
		if (oldNews[i] == null) {continue;}
//use variable with assigned function exatly like this is a function
   newsDiv.appendChild(oneDiv);
//enter number of bookmarks in the top
}
var numBook;
   if (oldNews!==undefined&&oldNews!==null) {
   	numBook= oldNews.length;
   } else {
   	numBook=0;
   }


document.getElementById('numbookmarks').innerHTML=numBook;
	
}

function retreiveBookmarks (url) {
//get old items from local storage
	var oldBookmarks= localStorage.getItem("bookmarks");
//parse old bookmarks from JSON
	// check if the object empty
	var OldOne;
	if (oldBookmarks!==null&&oldBookmarks!==undefined) {
		 OldOne = JSON.parse(oldBookmarks);
	} else {
		OldOne=[];
	}	

	
//iterate each article to check already existed URL
	for (var i = 0; i < OldOne.length; i++) {
//push each old url into object
		var existedURL = OldOne[i].url;

		if (existedURL == url) {
			return "activeNew";
		}
	}
	return "";
}

function arrayNewsBookmarkFunc(newsDiv) {
	var divWithNews = document.createElement("div");
	divWithNews.classList.add('business','newscard');
	var bookMarkClass = retreiveBookmarks(newsDiv.url);
	divWithNews.innerHTML += "<div class='bookmark-btn "+bookMarkClass+" ' data-position="+arrayNewsBookmark.length+" onclick='saveNews(this)'><i class='icon-bookmark absolute-bookmark'></i></div>";
	
	divWithNews.innerHTML +=  "<img class='newsPic' src=" + newsDiv.urlToImage + " />";
	divWithNews.innerHTML += "<a class='newsLink' onclick='openIframe(this)' href='#' data-newsurl="+newsDiv.url+"><span>"+newsDiv.title+"</span></a>";
	divWithNews.innerHTML += "<div class='descriptionDiv'>"+newsDiv.description+"</div>";

	divWithNews.innerHTML += "<span class='publishDate'>"+newsDiv.publishedAt+"</span>";	
	return divWithNews;
}
 











