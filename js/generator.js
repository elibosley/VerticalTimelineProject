/**
 * Created by ekbos on 9/1/2016.
 */

var toAdd = document.createDocumentFragment();

var timelineElement1 = {
    timeStamp : "July 9th, 2014, 8:25pm EST",
    title : "Wow, What a title!",
    description: "Check out this awesome description!",
    imgUrl: "img/cd-icon-movie.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-movie"
};
var timelineElement2 = {
    timeStamp : "July 15th, 2014, 4:30pm EST",
    title : "Lorem Ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim ex sit amet ipsum facilisis, at gravida massa viverra. Sed rutrum faucibus elit, vel egestas mauris porttitor non. Praesent tincidunt massa nec turpis maximus ullamcorper. Maecenas condimentum venenatis odio sit amet convallis. Sed bibendum urna nec lorem aliquet tristique. Donec vestibulum hendrerit nulla, quis pretium orci mattis in. Maecenas et nunc id arcu sodales dignissim vel quis est. Sed varius scelerisque tortor, sagittis dapibus lorem congue nec. Nunc placerat ex sit amet dolor rutrum auctor.`,
    imgUrl: "img/cd-icon-picture.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-picture"
};
var timelineElement3 = {
    timeStamp : "September 13th, 2014, 2:12pm EST",
    title : "Test title #01",
    description: "Test description",
    imgUrl: "img/cd-icon-location.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-location"
};
var timelineElement4 = {
    timeStamp : "July 9th, 2014, 8:25pm EST",
    title : "Wow, What a title!",
    description: "Check out this awesome description!",
    imgUrl: "img/cd-icon-movie.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-movie"
};
var timelineElement5 = {
    timeStamp : "July 15th, 2014, 4:30pm EST",
    title : "Lorem Ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim ex sit amet ipsum facilisis, at gravida massa viverra. Sed rutrum faucibus elit, vel egestas mauris porttitor non. Praesent tincidunt massa nec turpis maximus ullamcorper. Maecenas condimentum venenatis odio sit amet convallis. Sed bibendum urna nec lorem aliquet tristique. Donec vestibulum hendrerit nulla, quis pretium orci mattis in. Maecenas et nunc id arcu sodales dignissim vel quis est. Sed varius scelerisque tortor, sagittis dapibus lorem congue nec. Nunc placerat ex sit amet dolor rutrum auctor.`,
    imgUrl: "img/cd-icon-picture.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-picture"
};

var timelineElement6 = {
    timeStamp : "September 13th, 2014, 2:12pm EST",
    title : "Test title #01",
    description: "Test description",
    imgUrl: "img/cd-icon-location.svg",
    hrefUrl: "http://arstechnica.com/",
    cssTags: "cd-location"
};

var timelineElements  = [timelineElement1, timelineElement2, timelineElement3, timelineElement4, timelineElement5, timelineElement6];

for(var i=0; i < timelineElements.length; i++){
    var newDiv = document.createElement('div');
    newDiv.id = 'timeline-block-'+i;

    newDiv.className = 'cd-timeline-block';
    newDiv.innerHTML = `<div class="cd-timeline-img $CSSINNERHTML$">
        <img src="$IMGURL$" alt="Picture">
        </div> <!-- cd-timeline-img -->
        <div class="cd-timeline-content">
        <h2>$TITLE$</h2>
    <p>$DESCRIPTION$</p>
    <a href="$HREFURL$" class="cd-read-more">Read more</a>
    <span class="cd-date">$TIMESTAMP$</span>
    </div> <!-- cd-timeline-content -->`;

    newDiv.innerHTML = newDiv.innerHTML.replace("$TIMESTAMP$", timelineElements[i].timeStamp);
    newDiv.innerHTML = newDiv.innerHTML.replace("$DESCRIPTION$", timelineElements[i].description);
    newDiv.innerHTML = newDiv.innerHTML.replace("$TITLE$", timelineElements[i].title);
    newDiv.innerHTML = newDiv.innerHTML.replace("$IMGURL$", timelineElements[i].imgUrl);
    newDiv.innerHTML = newDiv.innerHTML.replace("$HREFURL$", timelineElements[i].hrefUrl);
    newDiv.innerHTML = newDiv.innerHTML.replace("$CSSINNERHTML$", timelineElements[i].cssTags);

    toAdd.appendChild(newDiv);
}

document.getElementById('cd-timeline').appendChild(toAdd);