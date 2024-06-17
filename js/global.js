function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0';
    }
  }

function loadMenu() {
  fetch('menu.txt')
      .then(response => response.text())
      .then(data => {
        $('#menu').html(data)
        });
}

function loadFooter() {
  fetch('footer.txt')
      .then(response => response.text())
      .then(data => {
        $('footer').html(data)
        });  
}
function globaljs() {
  fetch('data/global.json')
      .then(response => response.json())
      .then(data => {
        $("#announcement").html(data.announcement);
        $("#announcement").attr("href", data.announcementLink);
        let letsKnowCont = document.createElement("div");
        letsKnowCont.id = "unavailableDiscordPopUp";
        let letsKnowCloseBtn = document.createElement("button");
        $(letsKnowCloseBtn).text("X");
        $(letsKnowCloseBtn).attr("onclick","$('#unavailableDiscordPopUp').hide()")
        $(letsKnowCloseBtn).attr("id", "popUpCloseBtn")
        let letsknowtext = document.createElement("h3");
        $(letsknowtext).text(data.letsKnowText);
        let letsKnowPar = document.createElement("p");
        $(letsKnowPar).text(data.letsKnowPar)
        let letsKnowBtnLink = document.createElement("button");
        $(letsKnowBtnLink).text(data.letsKnowBtnText)
        $(letsKnowBtnLink).attr("onclick", "window.open('" + data.letsKnowLink+"')")
        letsKnowCont.appendChild(letsKnowCloseBtn);
        letsKnowCont.appendChild(letsknowtext);
        letsKnowCont.append(letsKnowPar);
        letsKnowCont.appendChild(letsKnowBtnLink);
        document.body.appendChild(letsKnowCont)
        });
  
}




function updateGlobal() {
  loadMenu();
  loadFooter();
  globaljs();
}
updateGlobal()