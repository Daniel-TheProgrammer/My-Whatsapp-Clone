
function changePage(x){
    document.getElementById("whiteBar").style.left=`${x}%`;
}


function settings(y,k){
    document.getElementById("settings").style.transform=`scale(${y})`;
    document.getElementById("settings").style.borderRadius=k;
}


function chat(){
    changePage("20");
    document.getElementById("settings").innerHTML=`<p onclick="createGroup()">New Group</p>
                <p>New Broadcast</p>
                <p>WhatsApp Web</p>
                <p>Marked Messages</p>
                <p onclick=showSettings(0)>Settings</p>`;
    document.getElementById("Camera").style.left="-100%";
    document.getElementById("others").style.left="0";
    document.getElementById("status").style.left="100%";
    document.getElementById('calls').style.left="200%";
    document.getElementById("greenCircle").innerHTML = "<i class='material-icons'>chat</i>";
    document.getElementById("greenCircle").style.display="block";
    document.getElementsByTagName("nav")[0].style.background="#075e54";
    
}

function status(){
    changePage("48");
    document.getElementById("settings").innerHTML=`<p>Confidentiality</p>
                <p onclick=showSettings(0)>Settings</p>`;
    document.getElementById("Camera").style.left="-200%";
 document.getElementById("others").style.left="-100%";
    document.getElementById("status").style.left="0%";
    document.getElementById('calls').style.left="100%";
    document.getElementById("greenCircle").innerHTML = '<i class="fa fa-camera"></i>';
    document.getElementById("greenCircle").style.display="block";
    document.getElementsByTagName("nav")[0].style.background="#075e54";
}



function art(){
        for(p=0; p<document.getElementById("calls").getElementsByClassName("user").length; p++){
            document.getElementById("calls").getElementsByClassName("user")[p].style.display="none";
        }
        document.getElementById("calls").innerHTML="<br><br><br><br><h3 style='font-size:3.2vh;'>To start calling contacts who have WhatsApp, tap add_call at the bottom of your screen.</h3>";
        document.getElementById("calls").style.textAlign="center";
    }
    
function calls(){
    changePage("75");
    document.getElementById("settings").innerHTML=`<p onclick=art()>Clear call history</p>
                <p onclick=showSettings(0)>Settings</p>`;
    document.getElementById("Camera").style.left="-300%";
    document.getElementById("others").style.left="-200%";
    document.getElementById("status").style.left="-100%";
    document.getElementById('calls').style.left="0";
    document.getElementById("greenCircle").innerHTML = "<i class='fas fa-phone-alt'></i>";
    document.getElementById("greenCircle").style.display="block";
      document.getElementsByTagName("nav")[0].style.background="#075e54";
    
}

function camera(){
    changePage("0");
    document.getElementById("settings").innerHTML=`<p>No settings for Camera</p>`
    document.getElementById("Camera").style.left="0";
    document.getElementById("others").style.left="100%";
    document.getElementById("status").style.left="200%";
    document.getElementById('calls').style.left="300%";
    document.getElementById("greenCircle").style.display="none";
    document.getElementsByTagName("nav")[0].style.background="black";
    
}



function search(){
    document.getElementById("searchDiv").style.transform="scale(1)";
    document.getElementsByTagName("nav")[0].style.top="-3.5em";
    document.getElementById("others").style.top="3.5em";
    document.getElementById("status").style.top="3.5em";
    document.getElementById("calls").style.top="3.5em";
}

function stopSearch(){
    document.getElementById("searchDiv").style.transform="scale(0)";
    document.getElementsByTagName("nav")[0].style.top="0";
    document.getElementById('searchInp').value='';
    document.getElementById("others").style.top="7em";
    document.getElementById("status").style.top="7em";
    document.getElementById("calls").style.top="7em";
}

window.onload=function(){
    document.getElementById("fullCode").style.display="block";
    setTimeout(function(){
        document.getElementById("fullCode").style.opacity="1";
        document.getElementById('loadingScreen').style.display='none';
    },500);
    createGroup();
    document.getElementById("userProfile").addEventListener("mouseleave",hideImage);
};


//this is for creating groups.
function createGroup(){
    document.getElementById("others").innerHTML+=`<div class="user">
                <img src="https://imgur.com/Mx5cf3i.jpg" alt="photo">
                <h3>Group name</h3>
                <p>You joined this chat.</p>
                <h5>26.08.2020</h5>
                <div class="line"></div>
            </div>`;
    settings(0,"0 0 0 50%");
}


function showSettings(x){
    document.getElementById("settingsPage").style.left=x+"%";
}


function showImage(source){
    document.getElementById("profile").src=source;
    document.getElementById("userProfile").style.transform="translate(-50% , -50%) scale(1)";
}

function hideImage(){
    document.getElementById("userProfile").style.transform="translate(-50% , -50%) scale(0)";
}

function emptySearch(){
    document.getElementById("searchInp").value = "";
}