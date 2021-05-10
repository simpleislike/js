/* Drop down */
document.getElementById('drop-down').onclick = function() {
    
    if (document.querySelector('ul').style.display == 'none') {
        document.querySelector('ul').style.display = 'inline-block';
    }
    else {
        document.querySelector('ul').style.display = 'none'
    } 
}
/*  Modal */

document.querySelector('.drop-lists > li:nth-child(2) > a').onclick = function() {
    if (document.getElementById('img-modal').style.display == 'block') {
        document.getElementById('img-modal').style.display = 'none';
    }
    else {
        document.getElementById('img-modal').style.display = 'block';
    }
}
document.querySelector('#img-modal > div').onclick =function(e) {
    document.getElementById('img-modal').style.display = 'none';
    e.stopPropagation();
}

/* Image viewer */



