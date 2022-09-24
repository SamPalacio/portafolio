


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


