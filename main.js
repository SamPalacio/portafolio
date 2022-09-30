


    let dots =document.querySelectorAll(".dot");
    let firstDots = document.querySelectorAll(".dot.first");
    let sectionBtns =document.querySelectorAll(".options_bar button");
    let cvBtn =document.querySelector(".cv")



  init();



  function init(){
      firstDots.forEach(dot => {dot.style.backgroundColor="#e09a2f";})
      dots.forEach(dot=> dot.addEventListener("click",changeImage));
      sectionBtns.forEach(section=> section.addEventListener("click",fitView))
      cvBtn.addEventListener("click", ()=>{
          document.querySelector(".about_sam").scrollIntoView(); })
  }

    function fitView(){
        const target=this.dataset.key;
        console.log(target)

        document.querySelector(` .category_label[data-key=${target}]`).scrollIntoView();

    }

  const mp40Images=['src/imgs/mp40Images/mp40_1.jpg','src/imgs/mp40Images/mp40_2.jpg','src/imgs/mp40Images/mp40_3.jpg','src/imgs/mp40Images/mp40_4.jpg']

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


