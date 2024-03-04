

function val()
{
    let billno = document.getElementById("inbno").value;
    let billdate = new Date(document.getElementById("inbdate").value);
    let billamt = document.getElementById("inbamt").value;
    var disamt = document.getElementById("dis")
    var billpat= /^[A-Za-z]{1}[0-9]{1,5}$/
    var errres = document.getElementById("erresult");
    errres.innerHTML = '';
    if(billno.length > 0)
    {
        if(!billpat.test(billno)){
            errres.innerHTML = 'Wrong BIll Pattern';
            return false;
        }
    }

    var amtpat = /^\d+(\.\d{0,2})?$/

    if(billamt.length > 0)
    {
        if(!amtpat.test(billamt)){
            errres.innerHTML = 'amount error ';
            return false;
        }
    }
    
    var disday = billdate.getDay();
    var cdis;
    if(disday == 1 || disday == 2)
    {
        cdis = billamt*0.10
        disamt.innerHTML = "Rs." + cdis;
    }
    else if(disday == 3 || disday == 4)
    {
        cdis = billamt*0.15
        disamt.innerHTML = "Rs." + cdis;
    }
    else 
    {
        cdis = billamt*0.05
        disamt.innerHTML ="Rs." + cdis;
    }
    var taxobj = document.getElementById("tax");
    var taxamt = billamt*0.05
     taxobj.innerHTML = "Rs."+taxamt;

     // Net Payment=(BillAmount–Discount + Tax) 


     
        var netpay = (billamt-cdis+taxamt)
     var res =document.getElementById("result");
    res.innerHTML = "Net Payable Amount : Rs." + netpay;
     
}

var btn = document.getElementById("calbtn");

