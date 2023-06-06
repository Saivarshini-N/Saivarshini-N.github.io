var data1 = {image : "./childhood.jpg", name : "Varshi", designation : "Student"};
var data2 = {image : "./Current.jpg", name : "Saivarshini", designation : "Student"};
var isData1 = true;
var displayData;
var changeMyPic = function()
{
    if(isData1)
    {
        displayData = data2;
        isData1 = false;
    }
    else
    {
        displayData = data1;
        isData1 = true;
    }
    document.getElementById("myChildImg").src = displayData.image;
    document.getElementById("myFirstName").innerHTML = displayData.name;
    document.getElementById("myDesignation").innerHTML = displayData.designation;
}