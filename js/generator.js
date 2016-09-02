/**
 * Created by ekbos on 9/1/2016.
 */

var toAdd = document.createDocumentFragment();
for(var i=0; i < 50; i++){
    var newDiv = document.createElement('div');
    newDiv.id = 'timeline-block-'+i;
    var d = new Date();
    var v = d.getMilliseconds();

    newDiv.className = 'cd-timeline-block';
    newDiv.innerHTML = `<div class="cd-timeline-img cd-picture">
        <img src="img/cd-icon-picture.svg" alt="Picture">
        </div> <!-- cd-timeline-img -->

        <div class="cd-timeline-content">
        <h2>Title of section 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
    <a href="#0" class="cd-read-more">Read more</a>
    <span class="cd-date">DATEREPLACE</span>
    </div> <!-- cd-timeline-content -->`;
    newDiv.innerHTML.replace("DATEREPLACE", "test");
    toAdd.appendChild(newDiv);
}

document.getElementById('cd-timeline').appendChild(toAdd);