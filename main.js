


    let dots =document.querySelectorAll(".dot");
    let firstDots = document.querySelectorAll(".dot.first");
    let sectionBtns =document.querySelectorAll(".options_bar button");
    let hamburgerBtns =document.querySelectorAll(".options button");
    let cvBtn =document.querySelector(".cv");
    let menu=document.querySelector(".menu");
    let close=document.querySelector(".close");
    const menu_bar = document.querySelector(".menu_side");
    const  posterFroggo =document.querySelector("#froggoPoster");
    const  posterTalkie=document.querySelector("#talkiePoster");
    const  posterPhantomized =document.querySelector("#phantomizedPoster");
    const  posterVulcano =document.querySelector("#vulcanoPoster");
    const apk_froggo = document.querySelector('#froggo_apk');
    const codeExamplebtns = document.querySelectorAll('.code-example');
    const mp40Images=['src/imgs/mp40Images/mp40_1.jpg','src/imgs/mp40Images/mp40_2.jpg','src/imgs/mp40Images/mp40_3.jpg','src/imgs/mp40Images/mp40_4.jpg'];
    const gameboyImages=['src/imgs/gameboyImages/gameboy_1.jpg','src/imgs/gameboyImages/gameboy_2.jpg','src/imgs/gameboyImages/gameboy_3.jpg'];
    const saloonImages=['src/imgs/saloonImages/saloon_1.jpg','src/imgs/saloonImages/saloon_2.jpg','src/imgs/saloonImages/saloon_3.jpg','src/imgs/saloonImages/saloon_4.jpg','src/imgs/saloonImages/saloon_5.jpg'];
    const timeless=['src/imgs/timelessImage/timeless.jpg'];
    let newValue;
    let oldValue;

  init();


  function init(){

            apk_froggo.addEventListener('click',()=>{window.open('https://drive.google.com/file/d/1vvnBvQJu5wq6xQKwT_pEeQ6IfJfL37k-/view?usp=sharing', '_blank');
            })
      codeExamplebtns.forEach(btn=>{
          btn.addEventListener('click',()=>{window.open('https://codeexamplebysam.notion.site/Code-Example-Froggo-Jump-7de98a462be144fdb0213adbd99c2332', '_blank');
          })

      })

            posterFroggo.style.backgroundImage =  'url("src/imgs/froggo_jump_poster.jpg")';
            posterPhantomized.style.backgroundImage =  'url("src/imgs/phantomizedPoster.jpg")';
            posterTalkie.style.backgroundImage =  'url("src/imgs/talkiecampposter.jpg")';
             posterVulcano.style.backgroundImage =  'url("src/imgs/volcanes_poster.png")';

      window.addEventListener('scroll', (e) => {

          newValue = window.scrollY;
          if (oldValue < newValue) {
              if (window.innerWidth<=820 ){
                  const h =document.querySelector("header");
                  h.classList.add("hide");
                  menu_bar.classList.remove("show_menu")

              }
          } else if (oldValue > newValue) {
              const h =document.querySelector("header");
              h.classList.remove("hide");
          }
          oldValue = newValue;
      });


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

        document.querySelector(` .category_label[data-key=${target}]`)?.scrollIntoView();

    }
    function fitViewBar(){
        const target=this.dataset.key;
        console.log(target)
        menu_bar.classList.remove("show_menu")
        document.querySelector(` .category_label[data-key=${target}]`)?.scrollIntoView();
        const h =document.querySelector("header");
        h.classList.add("hide");
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

    function show_repo(id_repo){

        window.open('https://github.com/FroggoJump/froggojump')
    }

