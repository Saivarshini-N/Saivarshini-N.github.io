var userInfo = {name : "", image : "", username : ""};
var changeMyPic = function()
{
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
        userInfo.name = data.results[0].name.first;
        userInfo.image = data.results[0].picture.large;
        userInfo.username = data.results[0].login.username;
        document.getElementById("myChildImg").src = userInfo.image;
        document.getElementById("myFirstName").innerHTML = userInfo.name;
        document.getElementById("myDesignation").innerHTML = userInfo.username;
    });
}