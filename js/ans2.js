function val()
{
    var hname = document.forms["hotelreg"]["hname"];
    if(hname.value.trim() == "")
    {
        alert("bro kuch to dal ");

    }
    else 
    {
        console.log("sahi hai jane de ");
    }

    var con = document.forms["hotelreg"]["con"].value;
    var swim = document.forms["hotelreg"]["swim"].value;
    var gym = document.forms["hotelreg"]["gym"].value;
    var wifi = document.forms["hotelreg"]["wifi"].value;
    var hrres = document.forms["hotelreg"]["hrres"].value;
    var cred = document.forms["hotelreg"]["cred"].value;
    var rec = document.forms["hotelreg"]["rec"].value;
   

    var mlist = [con,swim,gym,wifi,hrres,cred,rec];
    console.log(mlist);
    
    var rating=0;
    var aflag=true;

    for(i=0; i<mlist.length; i++)
    {
        
        if(mlist[i] == "yes")
        {
            console.log(mlist[i]);
            rating++;
        }
        if(mlist[i].trim() == '')
        {
            er.innerHTML += `Please select the option ${i+1} <br>`
            aflag=false;
            
        }
       
    }
    
    

//     // f Amenities =< 3 Than 3 Star Hotel 
// If Amenities = 4 Than 4star Hotel 
// If Amenities > = 5 Than 5 star Hotel
  var res = document.getElementById("re");
    if(aflag==true)
    {
        er.style.color="green"
        if(rating <= 3 && rating >0)
        {
            console.log("3 Star Hotel")
            er.innerHTML = "3 Star Hotel"
        }
        else if(rating == 4)
        {
            console.log("4 Star Hotel")
            er.innerHTML = "4 Star Hotel"
        }
        else if(rating >= 5)
        {
            console.log("5 Star Hotel")
            er.innerHTML = "5 Star Hotel"
        }
        else 
        {
            
        }
    }
    else 
    {
        alert("bro please select all the option");
    }


    console.log(rating);

}