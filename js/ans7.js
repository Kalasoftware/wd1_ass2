function spidcheck(spid,err)
{
    if(!spid.value.length>2)
    {
        err.innerHTML = "length must be greater then 2";
        spid.focus()
        return false;
    }
    else if(!/\d{4,}/.test(spid.value))
    {
        err.innerHTML = "doesnt matching the pattern of spid"
        spid.focus()
        return false;
    }
    else
    {
        err.innerHTML = ""
        return true;
    }
}

function rollcheck(roll,err){
    if(roll.value == "" )
    {
        err.innerHTML = "rolno cannot be empty ";
    }
    else if(!/[0-9]{2,4}/.test(roll.value))
    {
        err.innerHTML = "rollno can be only number"
    }
    else 
    {
        err.innerHTML = ""
    }
}

function namecheck(name,err)
{
    if(name.value.trim() == "")
    {
        err.innerHTML = "name cannot be emepty ";
    }
    else if (!/[a-zA-Z]{3,10}/.test(name.value))
    {
        err.innerHTML = "name cannot contain number  ";
    }
    else 
    {
        err.innerHTML = ""
    }
}

function semcheck(sem,err)
{
    if(sem.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
    }
    else if(sem.value == NaN)
    {
        err.innerHTML = "it can be number only ";
    }
    else 
    {
        err.innerHTML = ""
    }
}

function divcheck(div,err)
{
    if(div.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
    }
    else if(!/[abcd]/.test(div.value))
    {
        err.innerHTML = "div can be a,b,c,d"
    }
    else 
    {
        err.innerHTML = ""
    }
}

function agecheck(age,err)
{
    if(age.value.trim() == "")
    {
        err.innerHTML = "cannnot be empty ";
    }
    else if(!/[0-9]{1,2}/.test(div.value))
    {
        err.innerHTML = "not valid age";
    }
    else 
    {
        err.innerHTML = ""
    }
}

function gendercheck(gen,err)
{
    if(!gen[0].checked && !gen[1].checked)
    {
        err.innerHTML = "no gender has been selected ";
    }
    else 
    {
        err.innerHTML = ""
    }
}

function emailc(email,err)
{
    if(email.value.trim() == "")
    {
        err.innerHTML = "it cannot be empty "
    }
    else if (!/^[a-zA-z_.-0-9]+@[a-zA-Z_.-0-9]+\.[a-z]{2,4}$/.test(email.value))
    {
        err.innerHTML = "please enter valid mail "
    }
    else 
    {
        err.innerHTML = ""
    }
}

function mobilec(mobile,err){
    if(mobile.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
    }
     else if (!/^[789]{3}[0-9]{7}}$/.test(mobile.value))
     {
        err.innerHTML = "please enter a valid number ";
     }
     else 
     {
        err.innerHTML = ""
     }
}

function linkdinc(linkurl,err)
{
    if(linkurl.value.trim() == "")
    {
        err.innerHTML   = "cannot be empty ";
    }
    else if(!/^(https)/.test(linkurl.value))
    {
        err.innerHTML = "not valid link "
    }
    else 
    {
        err.innerHTML = ""
    }
}

function usernamec(username,err)
{
    if(username.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
    }
    else if(!/^[a-zA-Z0-9_]$/.test(username.value))
    {
        err.innerHTML = "not valid username";
    }
    else 
    {
        err.innerHTML = ""
    }
}

function passinc(pass,err)
{
    if(pass.value.trim() == "")
    {
        err.innerHTML = "cannot be empty ";
    }
    else if(!/[]/.test(pass.value))
    {
        err.innerHTML = "it must contain small,uper,nuber,symbol"
    }
    else 
    {

    }
}

function repassingc()
    {

    }
function checkboxc(checkb,err)
{
    if(!checkb[0].checked && !checkb[1].checked && !checkb[2].checked)
    {
        err.innerHTML = "please check atleast one programmng language"
    }
    else 
    {
        err.innerHTML = ""
    }
}
{

}

function fillcombo()
{

}