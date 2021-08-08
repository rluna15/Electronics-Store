//*Date Variables
var dateObject = new Date();
var counter = localStorage.getItem('count');
if (counter)
{
var dayOfWeek = parseInt(localStorage.getItem('changeDate'))}
else {var dayOfWeek = dateObject.getDay()}

var regPrice = document.getElementsByClassName("regPrice");
var salePrice = document.getElementsByClassName("salePrice");
//regPrice[0].style['text-decoration'] = "line-through";
//regPrice[0].style.color = "lightgray";
//salePrice[0].style.display = "block";
//salePrice[0].style.color = "red";
//salePrice[0].innerHTML = "Free.99";




//*Tab Variables
//Phone Tabs
var s20Tab = document.getElementById("s20Tab");
var s20PlusTab = document.getElementById("s20PlusTab");
var s20UltraTab = document.getElementById("s20UltraTab");
var onePlus8Tab = document.getElementById("onePlus8Tab");
var onePlus8ProTab = document.getElementById("onePlus8ProTab");
var onePlus7ProTab = document.getElementById("onePlus7ProTab");
var onePlus7TTab = document.getElementById("onePlus7TTab");
var onePlus7TProTab = document.getElementById("onePlus7TProTab");

//Headphones Tabs
var m50xTab = document.getElementById("m50xTab");
var m40xTab = document.getElementById("m40xTab");
var m30xTab = document.getElementById("m30xTab");
var m20xTab = document.getElementById("m20xTab");

//Desktop Tabs
var basicPcTab = document.getElementById("basicPcTab");
var casualGamerPcTab = document.getElementById("casualGamerPcTab");
var campaignHeroPcTab = document.getElementById("campaignHeroPcTab");
var eSportsProPcTab = document.getElementById("eSportsProPcTab");

//Speakers Tabs
var googleNestMiniTab = document.getElementById("googleNestMiniTab");
var googleHomeTab = document.getElementById("googleHomeTab");
var amazonEchoDotTab = document.getElementById("amazonEchoDotTab");
var amazonEchoTab = document.getElementById("amazonEchoTab");

//Video Games Tabs
var fortniteTab = document.getElementById("fortniteTab");
var minecraftTab = document.getElementById("minecraftTab");
var zeldaTab = document.getElementById("zeldaTab");
var apexTab = document.getElementById("apexTab");

//Laptops Tabs
var omenLaptopTab = document.getElementById("omenLaptopTab");
var macbookTab = document.getElementById("macbookTab");
var dellXPS13Tab = document.getElementById("dellXPS13Tab");
var acerSwift7Tab = document.getElementById("acerSwift7Tab");

//Game Consoles Tabs
var nintendoSwitchTab = document.getElementById("nintendoSwitchTab");
var pS4Tab = document.getElementById("pS4Tab");
var pS4ProTab = document.getElementById("pS4ProTab");
var xBoxOneTab = document.getElementById("xBoxOneTab");


//*Product Info Variables
//Phones
var s20 = document.getElementById("s20");
var s20Plus = document.getElementById("s20Plus");
var s20Ultra = document.getElementById("s20Ultra");
var onePlus8 = document.getElementById("onePlus8");
var onePLus8Pro = document.getElementById("onePlus8Pro");
var onePlus7Pro = document.getElementById("onePlus7Pro");
var onePlus7T = document.getElementById("onePlus7T");
var onePlus7TPro = document.getElementById("onePlus7TPro");

//HeadPhones
var m50x = document.getElementById("M50x");
var m40x = document.getElementById("M40x");
var m30x = document.getElementById("M30x");
var m20x = document.getElementById("M20x");

//Desktop
var basicPc = document.getElementById("basicPc");
var casualGamerPc = document.getElementById("casualGamerPc");
var campaignHeroPc = document.getElementById("campaignHeroPc");
var eSportsProPc = document.getElementById("eSportsProPc");

//Speakers
var googleNestMini = document.getElementById("googleNestMini");
var googleHome = document.getElementById("googleHome");
var amazonEchoDot = document.getElementById("amazonEchoDot");
var amazonEcho = document.getElementById("amazonEcho");

//Video Games
var fortnite = document.getElementById("fortnite");
var minecraft = document.getElementById("minecraft");
var zelda = document.getElementById("zelda");
var apex = document.getElementById("apex");

//Laptops
var omenLaptop = document.getElementById("omenLaptop");
var macbook = document.getElementById("macbook");
var dellXPS13 = document.getElementById("dellXPS13");
var acerSwift7 = document.getElementById("acerSwift7");

//Game Consoles
var nintendoSwitch = document.getElementById("nintendoSwitch");
var pS4 = document.getElementById("pS4");
var pS4Pro = document.getElementById("pS4Pro");
var xBoxOne = document.getElementById("xBoxOne");


//*Display Product Info
function s20Info() {
    if (s20.style.display === "block") {
        s20.style.display = "none";
        //window.scrollTo(0, 500);
    } else {
        s20.style.display = "block";
        //window.scrollTo(0, 800);
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function s20PlusInfo() {
    if (s20Plus.style.display === "block") {
        s20Plus.style.display = "none";
        //window.scrollTo(0, 500);
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "block";
        //window.scrollTo(0, 800);
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function s20UltraInfo() {
    if (s20Ultra.style.display === "block") {
        s20Ultra.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "block";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function onePlus8Info() {
    if (onePlus8.style.display === "block") {
        onePlus8.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "block";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function onePLus8ProInfo() {
    if (onePLus8Pro.style.display === "block") {
        onePLus8Pro.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "block";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function onePlus7ProInfo() {
    if (onePlus7Pro.style.display === "block") {
        onePlus7Pro.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "block";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function onePlus7TInfo() {
    if (onePlus7T.style.display === "block") {
        onePlus7T.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "block";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function onePlus7TProInfo() {
    if (onePlus7TPro.style.display === "block") {
        onePlus7TPro.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "block";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function m50xInfo() {
    if (m50x.style.display === "block") {
        m50x.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "block";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function m40xInfo() {
    if (m40x.style.display === "block") {
        m40x.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "block";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function m30xInfo() {
    if (m30x.style.display === "block") {
        m30x.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "block";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function m20xInfo() {
    if (m20x.style.display === "block") {
        m20x.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "block";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function basicPcInfo() {
    if (basicPc.style.display === "block") {
        basicPc.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "block";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function casualGamerPcInfo() {
    if (casualGamerPc.style.display === "block") {
        casualGamerPc.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "block";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function campaignHeroPcInfo() {
    if (campaignHeroPc.style.display === "block") {
        campaignHeroPc.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "block";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function eSportsProPcInfo() {
    if (eSportsProPc.style.display === "block") {
        eSportsProPc.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "block";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function googleNestMiniInfo() {
    if (googleNestMini.style.display === "block") {
        googleNestMini.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "block";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function googleHomeInfo() {
    if (googleHome.style.display === "block") {
        googleHome.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "block";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function amazonEchoDotInfo() {
    if (amazonEchoDot.style.display === "block") {
        amazonEchoDot.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "block";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function amazonEchoInfo() {
    if (amazonEcho.style.display === "block") {
        amazonEcho.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "block";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function fortniteInfo() {
    if (fortnite.style.display === "block") {
        fortnite.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "block";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function minecraftInfo() {
    if (minecraft.style.display === "block") {
        minecraft.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "block";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function zeldaInfo() {
    if (zelda.style.display === "block") {
        zelda.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "block";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function apexInfo() {
    if (apex.style.display === "block") {
        apex.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "block";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function omenLaptopInfo() {
    if (omenLaptop.style.display === "block") {
        omenLaptop.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "block";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function macbookInfo() {
    if (macbook.style.display === "block") {
        macbook.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "block";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function dellXPS13Info() {
    if (dellXPS13.style.display === "block") {
        dellXPS13.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "block";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function acerSwift7Info() {
    if (acerSwift7.style.display === "block") {
        acerSwift7.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "block";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function nintendoSwitchInfo() {
    if (nintendoSwitch.style.display === "block") {
        nintendoSwitch.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "block";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function pS4Info() {
    if (pS4.style.display === "block") {
        pS4.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "block";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "none";
    }
}
function pS4ProInfo() {
    if (pS4Pro.style.display === "block") {
        pS4Pro.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "block";
        xBoxOne.style.display = "none";
    }
}
function xBoxOneInfo() {
    if (xBoxOne.style.display === "block") {
        xBoxOne.style.display = "none";
    } else {
        s20.style.display = "none";
        s20Plus.style.display = "none";
        s20Ultra.style.display = "none";
        onePlus8.style.display = "none";
        onePLus8Pro.style.display = "none";
        onePlus7Pro.style.display = "none";
        onePlus7T.style.display = "none";
        onePlus7TPro.style.display = "none";
        m50x.style.display = "none";
        m40x.style.display = "none";
        m30x.style.display = "none";
        m20x.style.display = "none";
        basicPc.style.display = "none";
        casualGamerPc.style.display = "none";
        campaignHeroPc.style.display = "none";
        eSportsProPc.style.display = "none";
        googleNestMini.style.display = "none";
        googleHome.style.display = "none";
        amazonEchoDot.style.display = "none";
        amazonEcho.style.display = "none";
        fortnite.style.display = "none";
        minecraft.style.display = "none";
        zelda.style.display = "none";
        apex.style.display = "none";
        omenLaptop.style.display = "none";
        macbook.style.display = "none";
        dellXPS13.style.display = "none";
        acerSwift7.style.display = "none";
        nintendoSwitch.style.display = "none";
        pS4.style.display = "none";
        pS4Pro.style.display = "none";
        xBoxOne.style.display = "block";
    }
}

//*Checks for a date
function salesIndicator() {

    //document.getElementById("s20Tab").style.boxShadow = "1px 4px 3px black";
    //object.onmouseover = function(){myScript};
    //console.log(dayOfWeek);
    //box-shadow: 1px 4px 3px skyblue;
    //s20PlusTab.style.boxShadow = "1px 4px 3px red";


    if (dayOfWeek === 0) {
        s20Tab.style.boxShadow = "1px 4px 3px lightcoral";
        s20Tab.onmouseover = function () { s20Tab.style.boxShadow = "1px 4px 3px red" };
        s20Tab.onmouseout = function () { s20Tab.style.boxShadow = "1px 4px 3px lightcoral" };

        s20PlusTab.style.boxShadow = "1px 4px 3px lightcoral";
        s20PlusTab.onmouseover = function () { s20PlusTab.style.boxShadow = "1px 4px 3px red" };
        s20PlusTab.onmouseout = function () { s20PlusTab.style.boxShadow = "1px 4px 3px lightcoral" };

        s20UltraTab.style.boxShadow = "1px 4px 3px lightcoral";
        s20UltraTab.onmouseover = function () { s20UltraTab.style.boxShadow = "1px 4px 3px red" };
        s20UltraTab.onmouseout = function () { s20UltraTab.style.boxShadow = "1px 4px 3px lightcoral" };

        onePlus8Tab.style.boxShadow = "1px 4px 3px lightcoral";
        onePlus8Tab.onmouseover = function () { onePlus8Tab.style.boxShadow = "1px 4px 3px red" };
        onePlus8Tab.onmouseout = function () { onePlus8Tab.style.boxShadow = "1px 4px 3px lightcoral" };

        onePlus8ProTab.style.boxShadow = "1px 4px 3px lightcoral";
        onePlus8ProTab.onmouseover = function () { onePlus8ProTab.style.boxShadow = "1px 4px 3px red" };
        onePlus8ProTab.onmouseout = function () { onePlus8ProTab.style.boxShadow = "1px 4px 3px lightcoral" };

        onePlus7ProTab.style.boxShadow = "1px 4px 3px lightcoral";
        onePlus7ProTab.onmouseover = function () { onePlus7ProTab.style.boxShadow = "1px 4px 3px red" };
        onePlus7ProTab.onmouseout = function () { onePlus7ProTab.style.boxShadow = "1px 4px 3px lightcoral" };

        onePlus7TTab.style.boxShadow = "1px 4px 3px lightcoral";
        onePlus7TTab.onmouseover = function () { onePlus7TTab.style.boxShadow = "1px 4px 3px red" };
        onePlus7TTab.onmouseout = function () { onePlus7TTab.style.boxShadow = "1px 4px 3px lightcoral" };

        onePlus7TProTab.style.boxShadow = "1px 4px 3px lightcoral";
        onePlus7TProTab.onmouseover = function () { onePlus7TProTab.style.boxShadow = "1px 4px 3px red" };
        onePlus7TProTab.onmouseout = function () { onePlus7TProTab.style.boxShadow = "1px 4px 3px lightcoral" };

        phoneDiscount();
    } else if (dayOfWeek === 1) {
        m50xTab.style.boxShadow = "1px 4px 3px lightcoral";
        m50xTab.onmouseover = function () { m50xTab.style.boxShadow = "1px 4px 3px red" };
        m50xTab.onmouseout = function () { m50xTab.style.boxShadow = "1px 4px 3px lightcoral" };

        m40xTab.style.boxShadow = "1px 4px 3px lightcoral";
        m40xTab.onmouseover = function () { m40xTab.style.boxShadow = "1px 4px 3px red" };
        m40xTab.onmouseout = function () { m40xTab.style.boxShadow = "1px 4px 3px lightcoral" };

        m30xTab.style.boxShadow = "1px 4px 3px lightcoral";
        m30xTab.onmouseover = function () { m30xTab.style.boxShadow = "1px 4px 3px red" };
        m30xTab.onmouseout = function () { m30xTab.style.boxShadow = "1px 4px 3px lightcoral" };

        m20xTab.style.boxShadow = "1px 4px 3px lightcoral";
        m20xTab.onmouseover = function () { m20xTab.style.boxShadow = "1px 4px 3px red" };
        m20xTab.onmouseout = function () { m20xTab.style.boxShadow = "1px 4px 3px lightcoral" };

        headPhoneDiscount();
    } else if (dayOfWeek === 2) {
        basicPcTab.style.boxShadow = "1px 4px 3px lightcoral";
        basicPcTab.onmouseover = function () { basicPcTab.style.boxShadow = "1px 4px 3px red" };
        basicPcTab.onmouseout = function () { basicPcTab.style.boxShadow = "1px 4px 3px lightcoral" };

        casualGamerPcTab.style.boxShadow = "1px 4px 3px lightcoral";
        casualGamerPcTab.onmouseover = function () { casualGamerPcTab.style.boxShadow = "1px 4px 3px red" };
        casualGamerPcTab.onmouseout = function () { casualGamerPcTab.style.boxShadow = "1px 4px 3px lightcoral" };

        campaignHeroPcTab.style.boxShadow = "1px 4px 3px lightcoral";
        campaignHeroPcTab.onmouseover = function () { campaignHeroPcTab.style.boxShadow = "1px 4px 3px red" };
        campaignHeroPcTab.onmouseout = function () { campaignHeroPcTab.style.boxShadow = "1px 4px 3px lightcoral" };

        eSportsProPcTab.style.boxShadow = "1px 4px 3px lightcoral";
        eSportsProPcTab.onmouseover = function () { eSportsProPcTab.style.boxShadow = "1px 4px 3px red" };
        eSportsProPcTab.onmouseout = function () { eSportsProPcTab.style.boxShadow = "1px 4px 3px lightcoral" };

        desktopDiscount();
    } else if (dayOfWeek === 3) {
        googleNestMiniTab.style.boxShadow = "1px 4px 3px lightcoral";
        googleNestMiniTab.onmouseover = function () { googleNestMiniTab.style.boxShadow = "1px 4px 3px red" };
        googleNestMiniTab.onmouseout = function () { googleNestMiniTab.style.boxShadow = "1px 4px 3px lightcoral" };

        googleHomeTab.style.boxShadow = "1px 4px 3px lightcoral";
        googleHomeTab.onmouseover = function () { googleHomeTab.style.boxShadow = "1px 4px 3px red" };
        googleHomeTab.onmouseout = function () { googleHomeTab.style.boxShadow = "1px 4px 3px lightcoral" };

        amazonEchoDotTab.style.boxShadow = "1px 4px 3px lightcoral";
        amazonEchoDotTab.onmouseover = function () { amazonEchoDotTab.style.boxShadow = "1px 4px 3px red" };
        amazonEchoDotTab.onmouseout = function () { amazonEchoDotTab.style.boxShadow = "1px 4px 3px lightcoral" };

        amazonEchoTab.style.boxShadow = "1px 4px 3px lightcoral";
        amazonEchoTab.onmouseover = function () { amazonEchoTab.style.boxShadow = "1px 4px 3px red" };
        amazonEchoTab.onmouseout = function () { amazonEchoTab.style.boxShadow = "1px 4px 3px lightcoral" };

        speakerDiscount();
    } else if (dayOfWeek === 4) {
        fortniteTab.style.boxShadow = "1px 4px 3px lightcoral";
        fortniteTab.onmouseover = function () { fortniteTab.style.boxShadow = "1px 4px 3px red" };
        fortniteTab.onmouseout = function () { fortniteTab.style.boxShadow = "1px 4px 3px lightcoral" };

        minecraftTab.style.boxShadow = "1px 4px 3px lightcoral";
        minecraftTab.onmouseover = function () { minecraftTab.style.boxShadow = "1px 4px 3px red" };
        minecraftTab.onmouseout = function () { minecraftTab.style.boxShadow = "1px 4px 3px lightcoral" };

        zeldaTab.style.boxShadow = "1px 4px 3px lightcoral";
        zeldaTab.onmouseover = function () { zeldaTab.style.boxShadow = "1px 4px 3px red" };
        zeldaTab.onmouseout = function () { zeldaTab.style.boxShadow = "1px 4px 3px lightcoral" };

        apexTab.style.boxShadow = "1px 4px 3px lightcoral";
        apexTab.onmouseover = function () { apexTab.style.boxShadow = "1px 4px 3px red" };
        apexTab.onmouseout = function () { apexTab.style.boxShadow = "1px 4px 3px lightcoral" };

        gameDiscount();
    } else if (dayOfWeek === 5) {
        omenLaptopTab.style.boxShadow = "1px 4px 3px lightcoral";
        omenLaptopTab.onmouseover = function () { omenLaptopTab.style.boxShadow = "1px 4px 3px red" };
        omenLaptopTab.onmouseout = function () { omenLaptopTab.style.boxShadow = "1px 4px 3px lightcoral" };

        macbookTab.style.boxShadow = "1px 4px 3px lightcoral";
        macbookTab.onmouseover = function () { macbookTab.style.boxShadow = "1px 4px 3px red" };
        macbookTab.onmouseout = function () { macbookTab.style.boxShadow = "1px 4px 3px lightcoral" };

        dellXPS13Tab.style.boxShadow = "1px 4px 3px lightcoral";
        dellXPS13Tab.onmouseover = function () { dellXPS13Tab.style.boxShadow = "1px 4px 3px red" };
        dellXPS13Tab.onmouseout = function () { dellXPS13Tab.style.boxShadow = "1px 4px 3px lightcoral" };

        acerSwift7Tab.style.boxShadow = "1px 4px 3px lightcoral";
        acerSwift7Tab.onmouseover = function () { acerSwift7Tab.style.boxShadow = "1px 4px 3px red" };
        acerSwift7Tab.onmouseout = function () { acerSwift7Tab.style.boxShadow = "1px 4px 3px lightcoral" };

        laptopDiscount();
    } else if (dayOfWeek === 6) {
        nintendoSwitchTab.style.boxShadow = "1px 4px 3px lightcoral";
        nintendoSwitchTab.onmouseover = function () { nintendoSwitchTab.style.boxShadow = "1px 4px 3px red" };
        nintendoSwitchTab.onmouseout = function () { nintendoSwitchTab.style.boxShadow = "1px 4px 3px lightcoral" };

        pS4Tab.style.boxShadow = "1px 4px 3px lightcoral";
        pS4Tab.onmouseover = function () { pS4Tab.style.boxShadow = "1px 4px 3px red" };
        pS4Tab.onmouseout = function () { pS4Tab.style.boxShadow = "1px 4px 3px lightcoral" };

        pS4ProTab.style.boxShadow = "1px 4px 3px lightcoral";
        pS4ProTab.onmouseover = function () { pS4ProTab.style.boxShadow = "1px 4px 3px red" };
        pS4ProTab.onmouseout = function () { pS4ProTab.style.boxShadow = "1px 4px 3px lightcoral" };

        xBoxOneTab.style.boxShadow = "1px 4px 3px lightcoral";
        xBoxOneTab.onmouseover = function () { xBoxOneTab.style.boxShadow = "1px 4px 3px red" };
        xBoxOneTab.onmouseout = function () { xBoxOneTab.style.boxShadow = "1px 4px 3px lightcoral" };

        consoleDiscount();
    }
}

function phoneDiscount() {
    //*s20
    regPrice[0].style['text-decoration'] = "line-through";
    regPrice[0].style.color = "lightgray";
    salePrice[0].style.display = "block";
    salePrice[0].style.color = "red";
    salePrice[0].innerHTML = "$900";
    //*s20Plus
    regPrice[1].style['text-decoration'] = "line-through";
    regPrice[1].style.color = "lightgray";
    salePrice[1].style.display = "block";
    salePrice[1].style.color = "red";
    salePrice[1].innerHTML = "$1100";
    //*s20Ultra
    regPrice[2].style['text-decoration'] = "line-through";
    regPrice[2].style.color = "lightgray";
    salePrice[2].style.display = "block";
    salePrice[2].style.color = "red";
    salePrice[2].innerHTML = "$1300";
    //*onePlus8
    regPrice[3].style['text-decoration'] = "line-through";
    regPrice[3].style.color = "lightgray";
    salePrice[3].style.display = "block";
    salePrice[3].style.color = "red";
    salePrice[3].innerHTML = "$600";
    //*onePLus8Pro
    regPrice[4].style['text-decoration'] = "line-through";
    regPrice[4].style.color = "lightgray";
    salePrice[4].style.display = "block";
    salePrice[4].style.color = "red";
    salePrice[4].innerHTML = "$900";
    //*onePlus7Pro
    regPrice[5].style['text-decoration'] = "line-through";
    regPrice[5].style.color = "lightgray";
    salePrice[5].style.display = "block";
    salePrice[5].style.color = "red";
    salePrice[5].innerHTML = "$900";
    //*onePlus7T
    regPrice[6].style['text-decoration'] = "line-through";
    regPrice[6].style.color = "lightgray";
    salePrice[6].style.display = "block";
    salePrice[6].style.color = "red";
    salePrice[6].innerHTML = "$500";
    //*onePlus7TPro
    regPrice[7].style['text-decoration'] = "line-through";
    regPrice[7].style.color = "lightgray";
    salePrice[7].style.display = "block";
    salePrice[7].style.color = "red";
    salePrice[7].innerHTML = "$899";
}

function headPhoneDiscount() {
    //*m50x
    regPrice[8].style['text-decoration'] = "line-through";
    regPrice[8].style.color = "lightgray";
    salePrice[8].style.display = "block";
    salePrice[8].style.color = "red";
    salePrice[8].innerHTML = "$100";
    //*m40x
    regPrice[9].style['text-decoration'] = "line-through";
    regPrice[9].style.color = "lightgray";
    salePrice[9].style.display = "block";
    salePrice[9].style.color = "red";
    salePrice[9].innerHTML = "$79";
    //*m30x
    regPrice[10].style['text-decoration'] = "line-through";
    regPrice[10].style.color = "lightgray";
    salePrice[10].style.display = "block";
    salePrice[10].style.color = "red";
    salePrice[10].innerHTML = "$59";
    //*m20x
    regPrice[11].style['text-decoration'] = "line-through";
    regPrice[11].style.color = "lightgray";
    salePrice[11].style.display = "block";
    salePrice[11].style.color = "red";
    salePrice[11].innerHTML = "$40";
}

function desktopDiscount() {
    //*basicPC
    regPrice[12].style['text-decoration'] = "line-through";
    regPrice[12].style.color = "lightgray";
    salePrice[12].style.display = "block";
    salePrice[12].style.color = "red";
    salePrice[12].innerHTML = "$800";
    //*casualGamerPc
    regPrice[13].style['text-decoration'] = "line-through";
    regPrice[13].style.color = "lightgray";
    salePrice[13].style.display = "block";
    salePrice[13].style.color = "red";
    salePrice[13].innerHTML = "$1100";
    //*campaignHeroPc
    regPrice[14].style['text-decoration'] = "line-through";
    regPrice[14].style.color = "lightgray";
    salePrice[14].style.display = "block";
    salePrice[14].style.color = "red";
    salePrice[14].innerHTML = "$1500";
    //*eSportsProPc
    regPrice[15].style['text-decoration'] = "line-through";
    regPrice[15].style.color = "lightgray";
    salePrice[15].style.display = "block";
    salePrice[15].style.color = "red";
    salePrice[15].innerHTML = "$1900";
}

function speakerDiscount() {
    //*googleNestMini
    regPrice[16].style['text-decoration'] = "line-through";
    regPrice[16].style.color = "lightgray";
    salePrice[16].style.display = "block";
    salePrice[16].style.color = "red";
    salePrice[16].innerHTML = "$30";
    //*googleHome
    regPrice[17].style['text-decoration'] = "line-through";
    regPrice[17].style.color = "lightgray";
    salePrice[17].style.display = "block";
    salePrice[17].style.color = "red";
    salePrice[17].innerHTML = "$90";
    //*amazonEchoDot
    regPrice[18].style['text-decoration'] = "line-through";
    regPrice[18].style.color = "lightgray";
    salePrice[18].style.display = "block";
    salePrice[18].style.color = "red";
    salePrice[18].innerHTML = "$20";
    //*amazonEcho
    regPrice[19].style['text-decoration'] = "line-through";
    regPrice[19].style.color = "lightgray";
    salePrice[19].style.display = "block";
    salePrice[19].style.color = "red";
    salePrice[19].innerHTML = "$60";
}

function gameDiscount() {
    //*fortnite
    regPrice[20].style['text-decoration'] = "line-through";
    regPrice[20].style.color = "lightgray";
    salePrice[20].style.display = "block";
    salePrice[20].style.color = "red";
    salePrice[20].innerHTML = "It's already free!";
    //*minecraft
    regPrice[21].style['text-decoration'] = "line-through";
    regPrice[21].style.color = "lightgray";
    salePrice[21].style.display = "block";
    salePrice[21].style.color = "red";
    salePrice[21].innerHTML = "$10";
    //*zelda
    regPrice[22].style['text-decoration'] = "line-through";
    regPrice[22].style.color = "lightgray";
    salePrice[22].style.display = "block";
    salePrice[22].style.color = "red";
    salePrice[22].innerHTML = "$50";
    //*apex
    regPrice[23].style['text-decoration'] = "line-through";
    regPrice[23].style.color = "lightgray";
    salePrice[23].style.display = "block";
    salePrice[23].style.color = "red";
    salePrice[23].innerHTML = "It's alredy free!";
}

function laptopDiscount() {
    //*omenLaptop
    regPrice[24].style['text-decoration'] = "line-through";
    regPrice[24].style.color = "lightgray";
    salePrice[24].style.display = "block";
    salePrice[24].style.color = "red";
    salePrice[24].innerHTML = "$1000";
    //*macbook
    regPrice[25].style['text-decoration'] = "line-through";
    regPrice[25].style.color = "lightgray";
    salePrice[25].style.display = "block";
    salePrice[25].style.color = "red";
    salePrice[25].innerHTML = "$1200";
    //*dellXPS13
    regPrice[26].style['text-decoration'] = "line-through";
    regPrice[26].style.color = "lightgray";
    salePrice[26].style.display = "block";
    salePrice[26].style.color = "red";
    salePrice[26].innerHTML = "$1000";
    //*acerSwift7
    regPrice[27].style['text-decoration'] = "line-through";
    regPrice[27].style.color = "lightgray";
    salePrice[27].style.display = "block";
    salePrice[27].style.color = "red";
    salePrice[27].innerHTML = "$1600";
}

function consoleDiscount() {
    //*nintendoSwitch
    regPrice[28].style['text-decoration'] = "line-through";
    regPrice[28].style.color = "lightgray";
    salePrice[28].style.display = "block";
    salePrice[28].style.color = "red";
    salePrice[28].innerHTML = "$200";
    //*pS4
    regPrice[29].style['text-decoration'] = "line-through";
    regPrice[29].style.color = "lightgray";
    salePrice[29].style.display = "block";
    salePrice[29].style.color = "red";
    salePrice[29].innerHTML = "$200";
    //*pS4Pro
    regPrice[30].style['text-decoration'] = "line-through";
    regPrice[30].style.color = "lightgray";
    salePrice[30].style.display = "block";
    salePrice[30].style.color = "red";
    salePrice[30].innerHTML = "$300";
    //*xBoxOne
    regPrice[31].style['text-decoration'] = "line-through";
    regPrice[31].style.color = "lightgray";
    salePrice[31].style.display = "block";
    salePrice[31].style.color = "red";
    salePrice[31].innerHTML = "$200";
}

/* Change date table functions */
function changeDateSunday()
        {
        alert("For testing purposes the date has been changed to Sunday and" +"       " + " Smart Phones will be on sale" )
        localStorage.setItem('changeDate', dayOfWeek = 0)
        localStorage.setItem('count', counter=2)
        }


function changeDateMonday()
        {
        alert("For testing purposes the date has been changed to Monday and" +"        " + "Head Phones will be on sale")
        localStorage.setItem('changeDate', dayOfWeek = 1)
        localStorage.setItem('count', counter=2)
        }

function changeDateTuesday()
    
        {
        alert("For testing purposes the date has been changed to Tuesday and" +"        " + "Desktops will be on sale")
        localStorage.setItem('changeDate', dayOfWeek = 2)
        localStorage.setItem('count', counter=2)    
        }

function changeDateWednesday()
    
        {
        alert("For testing purposes the date has been changed to Wednesday and "+  "Speakers will be on sale")
        localStorage.setItem('changeDate', dayOfWeek = 3)
        localStorage.setItem('count', counter=2)
        }  

function changeDateThursday()
    
        {
        alert("For testing purposes the date has been changed to Thursday and" + "        " +  "Video Games will be on sale")
        localStorage.setItem('changeDate', dayOfWeek = 4)
        localStorage.setItem('count', counter=2)
        }

function changeDateFriday()
    
        {
        alert("For testing purposes the date has been changed to Friday and" +   "         " + "Laptops will be on sale")
        localStorage.setItem('changeDate', dayOfWeek = 5)
        localStorage.setItem('count', counter=2)
        }

function changeDateSaturday()
    
        {
        localStorage.setItem('changeDate', dayOfWeek = 6)
        alert("For testing purposes the date has been changed to Saturday and" + "          " + "Game Consoles will be on sale")
        localStorage.setItem('count', counter=2)
        }
		
/*
var products = [
    {
        name: "Samsung Galaxy s20",
        tag: "s20",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "Samsung Galaxy s20 Plus",
        tag: "s20Plus",
        price: 1199,
        salePrice: 1100,
        inCart: 0
    },
    {
        name: "Samsung Galaxy s20 Ultra",
        tag: "s20",
        price: 1399,
        salePrice: 1300,
        inCart: 0
    },
    {
        name: "OnePlus 8",
        tag: "onePlus8",
        price: 699,
        salePrice: 600,
        inCart: 0
    },
    {
        name: "OnePlus 8 Pro",
        tag: "onePlus8Pro",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "OnePlus 7 Pro",
        tag: "onePlus7Pro",
        price: 999,
        salePrice: 900,
        inCart: 0
    },
    {
        name: "OnePlus 7T",
        tag: "onePlus7T",
        price: 599,
        salePrice: 500,
        inCart: 0
    },
    {
        name: "OnePlus 7T Pro",
        tag: "onePlus7TPro",
        price: 900,
        salePrice: 899,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M50x",
        tag: "m50x",
        price: 149,
        salePrice: 100,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M40x",
        tag: "m40x",
        price: 99,
        salePrice: 79,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M30x",
        tag: "m30x",
        price: 69,
        salePrice: 59,
        inCart: 0
    },
    {
        name: "Audio Technica ATH-M20x",
        tag: "m20x",
        price: 49,
        salePrice: 40,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Basic",
        tag: "basicPc",
        price: 839,
        salePrice: 800,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Casual Gamer",
        tag: "casualGamerPc",
        price: 1199,
        salePrice: 1100,
        inCart: 0
    },
    {
        name: "Omen Obelisk : Campaign Hero",
        tag: "campaignHeroPc",
        price: 1599,
        salePrice: 1500,
        inCart: 0
    },
    {
        name: "Omen Obelisk : eSports Pro",
        tag: "eSportsProPc",
        price: 1999,
        salePrice: 1900,
        inCart: 0
    },
    {
        name: "Google Nest Mini",
        tag: "googleNestMini",
        price: 39,
        salePrice: 30,
        inCart: 0
    },
    {
        name: "Google Home",
        tag: "s20",
        price: 99,
        salePrice: 90,
        inCart: 0
    },
    {
        name: "Amazon Echo Dot 2nd Generation",
        tag: "amazonEchoDot",
        price: 29,
        inCart: 0
    },
    {
        name: "Amazon Echo",
        tag: "amazonEcho",
        price: 69,
        salePrice: 60,
        inCart: 0
    },
    {
        name: "Fortnite",
        tag: "fortnite",
        price: 0,
        salePrice: 0,
        inCart: 0
    },
    {
        name: "Minecraft",
        tag: "minecraft",
        price: 14.99,
        salePrice: 10,
        inCart: 0
    },
    {
        name: "Legend of Zelda Breath of the Wild",
        tag: "zelda",
        price: 59.99,
        salePrice: 50,
        inCart: 0
    },
    {
        name: "Apex Legends",
        tag: "apex",
        price: 0,
        salePrice: 0,
        inCart: 0
    },
    {
        name: "Omen Laptop 15t",
        tag: "omenLaptop",
        price: 1069.99,
        salePrice: 1000,
        inCart: 0
    },
    {
        name: "Macbook",
        tag: "macbook",
        price: 1299.99,
        salePrice: 1200,
        inCart: 0
    },
    {
        name: "Dell XPS 13",
        tag: "s20",
        price: 1049.99,
        salePrice: 1000,
        inCart: 0
    },
    {
        name: "Acer Swift 7",
        tag: "acerSwitf7",
        price: 1699.99,
        salePrice: 1600,
        inCart: 0
    },
    {
        name: "Nintendo Switch",
        tag: "nintendo",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
    {
        name: "Playstation 4 Standard",
        tag: "pS4",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
    {
        name: "Playstation 4 Pro",
        tag: "pS4Pro",
        price: 399.99,
        salePrice: 300,
        inCart: 0
    },
    {
        name: "Xbox One S",
        tag: "xBoxOne",
        price: 299.99,
        salePrice: 200,
        inCart: 0
    },
];

if (dayOfWeek === 0){
    products[0].price = products[0].salePrice;
    products[1].price = products[1].salePrice;
    products[2].price = products[2].salePrice;
    products[3].price = products[3].salePrice;
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
} else if (dayOfWeek === 1){
    products[8].price = products[8].salePrice;
    products[9].price = products[9].salePrice;
    products[10].price = products[10].salePrice;
    products[11].price = products[711.salePrice;
} else if (dayOfWeek === 2){
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
}else if (dayOfWeek === 3){
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
}else if (dayOfWeek === 4){
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
}else if (dateOfWeek === 5){
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
}else if (dayOfWeek === 6){
    products[4].price = products[4].salePrice;
    products[5].price = products[5].salePrice;
    products[6].price = products[6].salePrice;
    products[7].price = products[7].salePrice;
};

var cartbuttons = document.querySelectorAll(".addCart");



for (var i = 0; i < cartbuttons.length; i++) {
    cartbuttons[i].addEventListener("click", () => {cartCount(products[i])});
}
function cartCount(product) {
    var itemNumber = localStorage.getItem("cartCount");
    itemNumber = parseInt(itemNumber);
    if (itemNumber) {
        localStorage.setItem("cartCount", itemNumber + 1);
        document.querySelector(".cart span").textContent = itemNumber + 1;

    } else {
        localStorage.setItem("cartCount", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    setItems(product);
}
function setItems(product) {
    console.log(product);
}

function loadCartCount() {
    var itemNumber = localStorage.getItem("cartCount");
    if (itemNumber) {
        document.querySelector(".cart span").textContent = itemNumber;
    }
}
*/
//*Adding event listeners to the elements
function createEventListeners() {
    //Phone Tabs Eventlisteners
    s20Tab.addEventListener("click", s20Info, false);
    s20PlusTab.addEventListener("click", s20PlusInfo, false);
    s20UltraTab.addEventListener("click", s20UltraInfo, false);
    onePlus8Tab.addEventListener("click", onePlus8Info, false);
    onePlus8ProTab.addEventListener("click", onePLus8ProInfo, false);
    onePlus7ProTab.addEventListener("click", onePlus7ProInfo, false);
    onePlus7TTab.addEventListener("click", onePlus7TInfo, false);
    onePlus7TProTab.addEventListener("click", onePlus7TProInfo, false);

    //HeadPhones Tabs Eventlisteners
    m50xTab.addEventListener("click", m50xInfo, false);
    m40xTab.addEventListener("click", m40xInfo, false);
    m30xTab.addEventListener("click", m30xInfo, false);
    m20xTab.addEventListener("click", m20xInfo, false);

    //Desktop Tabs Eventlisteners
    basicPcTab.addEventListener("click", basicPcInfo, false);
    casualGamerPcTab.addEventListener("click", casualGamerPcInfo, false);
    campaignHeroPcTab.addEventListener("click", campaignHeroPcInfo, false);
    eSportsProPcTab.addEventListener("click", eSportsProPcInfo, false);

    //Speakers Tabs Eventlisteners
    googleNestMiniTab.addEventListener("click", googleNestMiniInfo, false);
    googleHomeTab.addEventListener("click", googleHomeInfo, false);
    amazonEchoDotTab.addEventListener("click", amazonEchoDotInfo, false);
    amazonEchoTab.addEventListener("click", amazonEchoInfo, false);

    //Video Games Tabs Eventlisteners
    fortniteTab.addEventListener("click", fortniteInfo, false);
    minecraftTab.addEventListener("click", minecraftInfo, false);
    zeldaTab.addEventListener("click", zeldaInfo, false);
    apexTab.addEventListener("click", apexInfo, false);

    //Laptops Tabs Eventlisteners
    omenLaptopTab.addEventListener("click", omenLaptopInfo, false);
    macbookTab.addEventListener("click", macbookInfo, false);
    dellXPS13Tab.addEventListener("click", dellXPS13Info, false);
    acerSwift7Tab.addEventListener("click", acerSwift7Info, false);

    //Game Consoles Tabs Eventlisteners
    nintendoSwitchTab.addEventListener("click", nintendoSwitchInfo, false);
    pS4Tab.addEventListener("click", pS4Info, false);
    pS4ProTab.addEventListener("click", pS4ProInfo, false);
    xBoxOneTab.addEventListener("click", xBoxOneInfo, false);

}

//*Loads the need functions after loading the page
function load() {
    salesIndicator();
    //loadCartCount();
    createEventListeners();
}

//*Add event listeners to the items when the page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", load, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", load);
}

