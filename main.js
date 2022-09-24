


  let dots =document.querySelectorAll(".dot");
   dots.forEach(dot=> dot.addEventListener("click",changeImage));


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
        description.classList.toggle("translate")
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


