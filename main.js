let dots = document.querySelectorAll(".dot");
let firstDots = document.querySelectorAll(".dot.first");
let sectionBtns = document.querySelectorAll(".options_bar button");
let hamburgerBtns = document.querySelectorAll(".options button");
let cvBtn = document.querySelector(".cv");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
const menu_bar = document.querySelector(".menu_side");
const posterFroggo = document.querySelector("#froggoPoster");
const posterTalkie = document.querySelector("#talkiePoster");
const posterParkour = document.querySelector("#parkourPoster");
const posterPhantomized = document.querySelector("#phantomizedPoster");
const posterVulcano = document.querySelector("#vulcanoPoster");
const posterTaxi = document.querySelector("#taxiPoster");
const apk_froggo = document.querySelector('#froggo_apk');
const codeExamplebtns = document.querySelectorAll('.code-example');
const mp40Images = ['src/imgs/mp40Images/mp40_1.jpg', 'src/imgs/mp40Images/mp40_2.jpg', 'src/imgs/mp40Images/mp40_3.jpg', 'src/imgs/mp40Images/mp40_4.jpg'];
const gameboyImages = ['src/imgs/gameboyImages/gameboy_1.jpg', 'src/imgs/gameboyImages/gameboy_2.jpg', 'src/imgs/gameboyImages/gameboy_3.jpg'];
const saloonImages = ['src/imgs/saloonImages/saloon_1.jpg', 'src/imgs/saloonImages/saloon_2.jpg', 'src/imgs/saloonImages/saloon_3.jpg', 'src/imgs/saloonImages/saloon_4.jpg', 'src/imgs/saloonImages/saloon_5.jpg'];
const timeless = ['src/imgs/timelessImage/timeless.jpg'];
let newValue;
let oldValue;
let isMenuOpen = false;

init();


function init() {
    checkScrollDownToEnableBar();
    apk_froggo.addEventListener('click', () => {
        window.open('https://play.google.com/store/apps/details?id=com.GreenTomato.FroggoJump', '_blank');
    })
    codeExamplebtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open('https://codeexamplebysam.notion.site/Code-Example-Froggo-Jump-7de98a462be144fdb0213adbd99c2332', '_blank');
        })

    })

    posterFroggo.style.backgroundImage = 'url("src/imgs/froggo_jump_poster.jpg")';
    posterPhantomized.style.backgroundImage = 'url("src/imgs/phantomizedPoster.jpg")';
    posterTalkie.style.backgroundImage = 'url("src/imgs/talkiecampposter.jpg")';
    posterVulcano.style.backgroundImage = 'url("src/imgs/volcanes_poster.png")';
    posterTaxi.style.backgroundImage = 'url("src/imgs/posterTaxi.png")';
    posterParkour.style.backgroundImage = 'url("src/imgs/posterParkour.png")';

    window.addEventListener('scroll', (e) => {
        checkScrollDownToEnableBar();
    });


    firstDots.forEach(dot => { dot.style.backgroundColor = "#e09a2f"; })
    menu.addEventListener("click", showMenu)
    close.addEventListener("click", showMenu)
    dots.forEach(dot => {
        dot.addEventListener("click", changeImage)

        const key = dot.parentNode.dataset.key
        if (key == "mp40") {
            dot.parentNode.style.backgroundImage = `url(${mp40Images[0]})`
        }
        if (key == "gameboy") {
            dot.parentNode.style.backgroundImage = `url(${gameboyImages[0]})`
        }
        if (key == "saloon") {
            dot.parentNode.style.backgroundImage = `url(${saloonImages[0]})`
        }
        if (key == "timeless_world") {
            dot.parentNode.style.backgroundImage = `url(${timeless[0]})`

        }
    });


    sectionBtns.forEach(section => section.addEventListener("click", fitView))
    hamburgerBtns.forEach(section => section.addEventListener("click", fitView))
    cvBtn.addEventListener("click", fitView)

    show_video('taxi_gameplay')
    show_video('vulcano_gameplay')
    show_video('talkiecamp_gameplay')
    show_video('frog_gameplay')
    show_video('phantomized_gameplay')
}

function showMenu() {
    if (!isMenuOpen) {
        isMenuOpen = true;
        const lines = document.querySelectorAll('.menu_hamburger .line');
        lines.forEach(line => line.classList.add('toggle_burguer'))
        menu_bar.classList.add("show_menu")
    }
    else {
        closeMenu();
    }


}

function closeMenu() {
    isMenuOpen = false;
    const lines = document.querySelectorAll('.menu_hamburger .line');
    lines.forEach(line => line.classList.remove('toggle_burguer'))
    menu_bar.classList.remove("show_menu")
}

function fitView(targetKey = null) {
    const offset = (window.innerWidth <= 820) ? 84 : 110; // Offset value in pixels
    forceView(offset, (typeof targetKey !== 'string') ? this.dataset.key : targetKey)
}
function forceView(offset, targetKey = null) {
    closeMenu();
    const targetElement = document.querySelector(`.focus[data-key="${targetKey}"]`);
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function changeImage() {
    const innerDots = this.parentNode.querySelectorAll(".dot");
    innerDots.forEach(dot => {

        if (dot != this) {
            dot.style.backgroundColor = "#f5ead3";
        }
    })
    this.style.backgroundColor = "#e09a2f";
    const dotsArray = [...innerDots];
    const key = this.parentNode.dataset.key
    if (key == "mp40") {


        this.parentNode.style.backgroundImage = `url(${mp40Images[dotsArray.indexOf(this)]})`
    }
    if (key == "gameboy") {


        this.parentNode.style.backgroundImage = `url(${gameboyImages[dotsArray.indexOf(this)]})`
    }
    if (key == "saloon") {


        this.parentNode.style.backgroundImage = `url(${saloonImages[dotsArray.indexOf(this)]})`
    }

}

function show_description(info) {

    const description = info.children.item(0);
    info.classList.toggle("poster_zoom")
}

function show_video(id_video) {
    const video_screen = document.getElementById(id_video);
    video_screen.classList.toggle("show")
    let iframe_tag = video_screen.querySelector('iframe');
    let video_tag = video_screen.querySelector('video');
    if (iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc;
    }
    if (video_tag) {
        video_tag.pause();
    }
}

function show_repo(id_repo) {

    if (id_repo == 'froggojump') {
        window.open('https://github.com/FroggoJump/froggojump')
    }
    if (id_repo == 'talkiecamp') {
        window.open('https://github.com/mindfulentertainment/talkiecamp')
    }
}

function show_apk(apk) {

    if (apk == 'froggojump') {
        window.open('https://github.com/FroggoJump/froggojump')
    }
    if (apk == 'talkiecamp') {
        window.open('https://drive.google.com/file/d/11KZK2yW-JZmrxIhO9uKEszGyk2tBUwLV/view?usp=sharing')
    }
    if (apk == 'phantomized') {
        window.open('https://drive.google.com/file/d/1sKod7hE99BDXOminmmi9DALsm-3pHK-Q/view?usp=sharing')
    }
    if (apk == 'parkour') {
        window.open('https://parkour.samuelpalacio.me/')
    }
}
function checkScrollDownToEnableBar() {
    const header = document.getElementById('header');
    if (window.scrollY > 1) {
        header.classList.add('header-down')
    }
    else {
        header.classList.remove('header-down')

    }

}
function downloadPDF() {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file.
    var pdfUrl = 'src/cv.pdf';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv.pdf'; // You can specify the name of the downloaded file.
    link.click();
}

// Attach the downloadPDF function to the button's click event.
document.getElementById('downloadButton').addEventListener('click', downloadPDF);

