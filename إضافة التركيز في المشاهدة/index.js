let i = 0;

function run() {
    let commentsContainer = document.getElementById('comments');
    let videosContainer = document.getElementById('related');
    let nextVideo = document.querySelector("a.ytp-next-button.ytp-button");
    let Autoplay = document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"');
    let startHead = document.querySelector("#start");
    let btnHead = document.querySelector("#buttons");
    let menu = document.querySelector("#contentContainer");
    let homeMenu = document.querySelector("ytd-mini-guide-renderer.style-scope");
    let allVideos = document.querySelector("#primary");

    startHead == null? "" : startHead.style.zIndex = -10;
    startHead == null? "" : startHead.style.opacity = 0;
    btnHead == null? "" : btnHead.style.zIndex = -10;
    btnHead == null? "" : btnHead.style.opacity = 0;
    
    if(i != 1) {
        menu.remove();
        i = 1;
        document.querySelector("#scrim").remove();

        if(document.querySelector("#theMenuSpaceFocus") == null) {
            let spaceMenu = document.createElement("div");
            document.querySelector("#guide").append(spaceMenu);
            spaceMenu.id = "theMenuSpaceFocus";
            spaceMenu.style.position = "fixed";
            spaceMenu.style.top = "0";
            spaceMenu.style.bottom = "0";
            spaceMenu.style.right = "calc(100% - 20px)";
            spaceMenu.style.left = "autp";
            spaceMenu.style.visibility = "visible";
            spaceMenu.style.width = "20%";
        }
    }

    homeMenu == null? "" : homeMenu.remove();
    document.querySelector(".ytp-autonav-overlay") == null? "" : document.querySelector(".ytp-autonav-overlay").remove();
    document.querySelector(".html5-endscreen") == null? "" : document.querySelector(".html5-endscreen").remove();
    nextVideo == null? "" : nextVideo.remove();
    Autoplay == null? "" : Autoplay.remove();

    if(location.href.includes("&list=")) {
        document.querySelector('#secondary-inner.style-scope.ytd-watch-flexy') == null? "" : document.querySelector('#secondary-inner.style-scope.ytd-watch-flexy').style = "width: var(--ytd-watch-flexy-sidebar-width); min-width: var(--ytd-watch-flexy-sidebar-width); height: auto;";
        document.querySelector('#secondary.style-scope.ytd-watch-flexy') == null? "" : document.querySelector('#secondary.style-scope.ytd-watch-flexy').style = "width: var(--ytd-watch-flexy-sidebar-width); min-width: var(--ytd-watch-flexy-sidebar-width); height: auto;";
    } else {
        console.log(document.getElementById('secondary'));
        document.querySelector('#secondary.style-scope.ytd-watch-flexy') == null? "" : document.querySelector('#secondary.style-scope.ytd-watch-flexy').style = "width: 0; max-width: 0; min-width: 0; height: 0;";
        document.getElementById('secondary-inner') == null? "" : document.getElementById('secondary-inner').style = "width: 0; height: 0;";
        document.getElementById('secondary-inner') == null? "" : document.getElementById('secondary-inner').style.overflow = "hidden";
    }
    
    if(videosContainer != null) {
        videosContainer.remove();
    }

    commentsContainer == null? "" : commentsContainer.remove();
    
    if(location.pathname == "/" && allVideos != null) {
        if(allVideos.style.opacity != 0 || allVideos.style.zIndex >= 0) {
            allVideos.style.opacity = 0;
            allVideos.style.zIndex = -10;
            document.querySelector("body").style.overflow = "hidden";
        }
    } else {
        if(allVideos != null) {
            allVideos.style.opacity = 1;
        }
    }
}

setInterval(() => {
    run();
});
