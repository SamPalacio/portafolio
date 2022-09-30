


    let dots =document.querySelectorAll(".dot");
    let firstDots = document.querySelectorAll(".dot.first");
    let sectionBtns =document.querySelectorAll(".options_bar button");
    let hamburgerBtns =document.querySelectorAll(".options button");
    let cvBtn =document.querySelector(".cv");
    let menu=document.querySelector(".menu");
    let close=document.querySelector(".close");
    const menu_bar = document.querySelector(".menu_side");

    const mp40Images=['src/imgs/mp40Images/mp40_1.jpg','src/imgs/mp40Images/mp40_2.jpg','src/imgs/mp40Images/mp40_3.jpg','src/imgs/mp40Images/mp40_4.jpg'];
    const gameboyImages=['src/imgs/gameboyImages/gameboy_1.jpg','src/imgs/gameboyImages/gameboy_2.jpg','src/imgs/gameboyImages/gameboy_3.jpg'];
    const saloonImages=['src/imgs/saloonImages/saloon_1.jpg','src/imgs/saloonImages/saloon_2.jpg','src/imgs/saloonImages/saloon_3.jpg','src/imgs/saloonImages/saloon_4.jpg','src/imgs/saloonImages/saloon_5.jpg'];
    const timeless=['src/imgs/timelessImage/timeless.jpg'];


  init();



  function init(){
      firstDots.forEach(dot => {dot.style.backgroundColor="#e09a2f";})
        menu.addEventListener("click",showMenu)
        close.addEventListener("click",showMenu)
      dots.forEach(dot=> {
          dot.addEventListener("click",changeImage)

          const key =dot.parentNode.dataset.key
          if (key == "mp40"){
              dot.parentNode.style.backgroundImage=`url(${mp40Images[0]})`
          }
          if (key == "gameboy"){
              dot.parentNode.style.backgroundImage=`url(${gameboyImages[0]})`
          }
          if (key == "saloon"){
              dot.parentNode.style.backgroundImage=`url(${saloonImages[0]})`
          }
          if (key =="timeless_world"){
              dot.parentNode.style.backgroundImage=`url(${timeless[0]})`

          }
      });


      sectionBtns.forEach(section=> section.addEventListener("click",fitView))
      hamburgerBtns.forEach(section=> section.addEventListener("click",fitViewBar))
      cvBtn.addEventListener("click", ()=>{
          document.querySelector(".about_sam").scrollIntoView(); })
  }
    function  showMenu(){
        console.log(menu_bar)

        menu_bar.classList.toggle("show_menu")
    }
    function fitView(){
        const target=this.dataset.key;
        console.log(target)

        document.querySelector(` .category_label[data-key=${target}]`).scrollIntoView();

    }
    function fitViewBar(){
        const target=this.dataset.key;
        console.log(target)
        menu_bar.classList.remove("show_menu")
        document.querySelector(` .category_label[data-key=${target}]`).scrollIntoView();

    }

    function changeImage()
    {
        const innerDots =this.parentNode.querySelectorAll(".dot");
        innerDots.forEach(dot=> {

            if (dot!=this){
                dot.style.backgroundColor= "#f5ead3";
            }
        })
        this.style.backgroundColor="#e09a2f";
         const dotsArray=[...innerDots];
        const key =this.parentNode.dataset.key
        if (key == "mp40"){


            this.parentNode.style.backgroundImage=`url(${mp40Images[dotsArray.indexOf(this)]})`
        }
        if (key == "gameboy"){


            this.parentNode.style.backgroundImage=`url(${gameboyImages[dotsArray.indexOf(this)]})`
        }
        if (key == "saloon"){


            this.parentNode.style.backgroundImage=`url(${saloonImages[dotsArray.indexOf(this)]})`
        }

    }
    function show_description(info){

        const description =info.children.item(0);
        info.classList.toggle("poster_zoom")
    }

    function show_video(id_video){
        const video_screen =document.getElementById(id_video);
        video_screen.classList.toggle("show")
        let iframe_tag = video_screen.querySelector( 'iframe');
        let video_tag = video_screen.querySelector( 'video' );
        if ( iframe_tag) {
            let iframeSrc = iframe_tag.src;
            iframe_tag.src = iframeSrc;
        }
        if ( video_tag) {
            video_tag.pause();
        }
    }


