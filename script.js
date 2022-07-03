
/* The Color Loop System For Button */
//------------------------------------
//assigning the colors for loop
var colors = ["#746AEA", "#C95DF7", "#FE756F"];
//selcting the arry for the button by classname
var btnSpecial = document.querySelectorAll(".btn_short_menu");

//here (value) for array item's name & (i) for index number for this array
btnSpecial.forEach(function (value, i) {
    //the formula to select colors for this array
    singleColor = colors[i % colors.length];
    //now change the color by calculated value
    btnSpecial[i].style.backgroundColor = singleColor;
});
//-------------------------------------------
/* End of The Color Loop System For Button */



/* The Click Functionality Of Menu Short Buttons */
//------------------------------------
var tabBars = document.querySelectorAll(".tab-bar");
var btnForClick = document.querySelectorAll(".btn_short_menu");
var leftSideBarClass = document.querySelector(".left-side-bar");
var InnerLeftSideBar = document.querySelector(".inner-left-side-bar");
var InnerTabBar = document.querySelectorAll(".inner-tab-bar");

btnForClick.forEach(function (value, i) {
    btnForClick[i].addEventListener('click', function(){
        if(tabBars[i].style.width === "200px"){
            for(k=0;k<tabBars.length;k++){
                tabBars[k].style.left = "60px";
                tabBars[k].style.width = "0px";
                tabBars[k].classList.remove("index-change");
            }
            for(l=0;l<btnForClick.length;l++){
                btnForClick[l].classList.remove("active_menu_short");
            }
            InnerTabBar[i].style.display = "none";
            tabBars[i].style.width = "0px";
            tabBars[i].style.left = "60px";
            leftSideBarClass.style.width = "100px";
            InnerLeftSideBar.style.borderRadius = "15px";
            btnForClick[i].classList.remove("active_menu_short");
            tabBars[i].classList.remove("index-change");
        }else{
            for(k=0;k<tabBars.length;k++){
                tabBars[k].style.left = "60px";
                tabBars[k].style.width = "0px";tabBars[k].classList.remove("index-change");
            }
            for(l=0;l<btnForClick.length;l++){
                btnForClick[l].classList.remove("active_menu_short");
            }
            tabBars[i].style.width = "200px";
            tabBars[i].style.left = "60px";
            leftSideBarClass.style.width = "280px";
            InnerLeftSideBar.style.borderRadius = "15px 0 0 15px";
            btnForClick[i].classList.add("active_menu_short");
            tabBars[i].classList.add("index-change");
            InnerTabBar[i].style.display = "block";
        }
    });
});
//-------------------------------------------
/* End of The Click Functionality Of Menu Short Buttons */