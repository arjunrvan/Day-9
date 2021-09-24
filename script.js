// Song Objects

var song1 = {
    src: 'audio/30sec',
    title: 'Happy Birthday',
    artist: 'Justin B',
    image: 'images/kl.jpg'
}

var song2 = {
    src: 'audio/bgmusic.mp3',
    title: 'Louder',
    artist: 'Martin Kelly',
    image: 'images/ny.jpg'
}

var song3 = {
    src: 'audio/bloop.mp3',
    title: 'Rock Anthem',
    artist: 'David Prost',
    image: 'images/paris.jpg'
}

var song4 = {
    src: 'audio/click.mp3',
    title: 'Click Click Click',
    artist: 'George Sunderland',
    image: 'images/sydney.jpg'
}

var song5 = {
    src: 'audio/littlebit.mp3',
    title: 'Little Bit',
    artist: "Let's Go",
    image: 'images/london.jpg'
}


var audio = document.getElementById('aud');
var vol = 1;

var isPlay = false;

var vidSelect = 1;

var uBar = 10;

function updateVol (num) {
    vol += num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;
    } 

  
    audio.volume = vol;    
    uBar += (num*10);

    if (uBar > 10) {
        uBar = 10;
    } else if (uBar < 1) {
        uBar = 1;
    }
 

    if (num<0) {
        
        var i = uBar + 1;

        document.getElementById('bar'+i).style.opacity = 0 ;
    } 

    if (num>=0) { 
        
        document.getElementById('bar'+uBar).style.opacity = 1;
    }

    
}

function playAlt () {

    if (isPlay == false) {
        audio.play();
        isPlay = true;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-pause'></i>";

    } else if (isPlay == true) {
        audio.pause();
        isPlay = false;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-play'></i>";
    }
}

function vidSwap (btnName) {

    // Check if Prev or next is pressed 
    if (btnName == 1) {
        vidSelect -= 1;
    } else if (btnName == 2) {
        vidSelect += 1;
    }     

    // Ensure videoSelect is between 1-3
    if (vidSelect > 3) {
        vidSelect = 1;
    } else if (vidSelect < 1) {
        vidSelect = 3;
    }

    // Assign audio to number
    if (vidSelect == 1) {
        audio.src = 'movie.mp4';
    } else if (vidSelect == 2) {
        audio.src = 'movie2.mp4';
    } else if (vidSelect == 3) {
        audio.src = 'movie3.mp4';
    }
}

