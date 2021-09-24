

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

var sng = document.getElementById('sng');
var timeBar = document.getElementById('timeBar');

var songlist = {
    src: 'audio/30sec',
    title: 'Happy Birthday',
    artist: 'Justin B'
}

var songlist2 = {
    src: 'audio/littlebit.mp3',
    title: 'Little Bit',
    artist: 'Baba Sheep'
}

function playSng () {
    sng.play();
}

function pauseSng () {
    sng.pause();
}

setInterval(checkTime, 1000) ;
// console.log(sng.duration);

function checkTime () {
    console.log(sng.currentTime);

    var songDuration = (sng.duration);
    var timebarWidth = (sng.currentTime/songDuration) * 100;

    var clrR = Math.random()*255;
    var clrG = Math.random()*255;
    var clrB = Math.random()*255;

    // console.log("R: " + clrR + "G: " + clrG + "B: " + clrB);

    //template string: backtick `
    // console.log(`R: ${clrR}, G:${clrG}, B:${clrB}`);

    timeBar.style.width = timebarWidth + '%';
    // document.querySelector('body').style.backgroundColor = `rgb(${clrR},${clrG},${clrB})`;
}

function getSong (songData) {


    // if (songData == 'songlist') {
    //     console.log (songlist.src);
    // } else if (songData == 'songlist2') {
    //     console.log (songlist2.src);
    // }

    

    switch(songData) {
        case 'songlist':
            console.log(songlist.src);
            sng.src = songlist.src;
            document.getElementById('titleText').innerHTML = songlist.title;
            document.getElementById('artistText').innerHTML = songlist.artist;
            break;
            
        case 'songlist2':
            console.log(songlist2.src);
            sng.src = songlist2.src;
            document.getElementById('titleText').innerHTML = songlist2.title;
            document.getElementById('artistText').innerHTML = songlist2.artist;
            break;

        default :
            console.log("show default");
            break;

    }
}