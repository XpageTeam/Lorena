import { TweenLite } from "gsap";
import { App } from "./app";

document.addEventListener("DOMContentLoaded", function(){
    if (!document.body.classList.contains("main"))
        return;

    if (window.Cookies.get("fakeDesignState") == "accepted"){
        showIvlev();
        setTimeout(function(){
            document.body.classList.add("fake-design__accepted");
        }, 2300);

        document.body.classList.add("fake-preview__hidden");
        

        return;
    }

    if (window.Cookies.get("fakeDesignState") == "canceled"){
        document.body.classList.add("fake-preview__hidden");

        return;
    }



    if (!document.querySelector(".fake-design"))
        return;
    
    const confirmBtn = document.querySelector(".fdt__btn .arrow-btn"),
        cancelBtn = document.querySelector(".fdt__link");

    if (!confirmBtn || !cancelBtn)
        return;

    confirmBtn.addEventListener("click", function(){
        setTimeout(function(){
            document.body.classList.add("fake-design__accepted");
        }, 2300)
        document.body.classList.add("fake-preview__hidden");

        window.Cookies.set("fakeDesignState", "accepted");

       
        showNewColor();

        showIvlev();
    });

    cancelBtn.addEventListener("click", cancelFakeDesign);
});

function cancelFakeDesign(){
    setTimeout(function(){
        document.body.classList.remove("fake-design__accepted");
    }, 2300)
    document.body.classList.add("fake-preview__hidden");

    window.Cookies.set(
        "fakeDesignState", 
        "canceled",
        );

    const ivlev = document.querySelector(".angry-ivlev");

    if (!ivlev)
        return;

    ivlev.classList.remove("show");
}

function showIvlev(){
    setTimeout(function(){
        const ivlev = document.querySelector(".angry-ivlev");

        if (!ivlev)
            return;

        ivlev.classList.add("show");

        const backLink = ivlev.querySelector(".ait__link");

        if (!backLink)
            return;

        backLink.addEventListener("click", cancelFakeDesign);

    }, 12000);
}

function showNewColor(){
    const fdLine = document.querySelector(".fake-design__line") as HTMLElement;

    if (!fdLine)
        return;

    const counter = {
        count: -window.innerHeight - window.innerHeight * .1
    };

    TweenLite.to(counter, 3, {
        count: window.innerHeight + window.innerHeight * .1,
        onStart(){
            fdLine.classList.add("js__animating");
        },
        onUpdate(){
            const fdlTop = window.get$(fdLine).position().top;

            App.each(".head > *, .main-slider > *", function(el: HTMLElement){
                const elementTop = window.get$(el).position().top + window.get$(el).height() * .1;

                if (fdlTop >= elementTop)
                    el.classList.add("js__fake-color")
            });
        },
        onComplete(){
            TweenLite.to(fdLine, .3, {
                onComplete(){
                    fdLine.style.display = "none"
                },
                
            })
        },
        delay: 1.3
    });
}