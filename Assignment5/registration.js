//HyunKyu Nam
//141031161
//hnam7@myseneca.ca

function checkAll()
{
    clearAllErrors();
    var valid0 = password()
    var valid1 = username();
    var valid2 = province();
    var valid3 = street_name();
    var valid4 = city();
    return valid0&&valid1&&valid2&&valid3&&valid4;
    

}

// PASSWORD VALIDATION
function password()
{     
    var passing=true;
    var pass=document.registration.password.value.trim();
    var repass=document.registration.retype.value.trim();
    var pass_length=pass.length;   
      
    
    //CHECKING THE LENGTH
    if(pass_length!=8)
      {
        displayError("<p>"+"Password must be 8 characters long"+"</p>");
        passing=false;
      }
    
    //CHECKING IF PASSWORD AND RETYPE MATCH  
    if(pass!=repass)
      {
        displayError("<p>"+"Passwords do not match"+"</p>");
        passing=false;
      }   

   //CHECKING IF PASSWORD STARTS WITH A CHAR
    
    if(!pass.match(/^[A-Z]/i)) {
        displayError("<p>"+"Password must start with a character"+"</p>");
        passing=false;

    }

    //CHCKING IF THERE IS AT LEAST ONE UPPERCASE
    
    var val=0;

     for(var i=0;i<pass_length;i++)
     {
        if((pass.substr(i,1)).match(/[A-Z]/))
        {
            val=1;      
            break;
        }       
     }

     if(val!=1)
     {
         displayError("<p>"+"Password must have at least one UpperCase"+"</p>");
         passing = false;
     }
    

     //CHECKING IF PASSWORD HAS DIGIT

     var val2=0;

     for(var i=0;i<pass_length;i++)
     {
        if((pass.substr(i,1)).match(/[0-9]/))
        {
            val2=1;
            break;
        }
     }

     if(val2!=1)
     {
         displayError("<p>"+"Password must have at least one Digit"+"</p>");
         passing=false;
     }

   if(passing)
   {
       return true;
   }
   else
   {
    return false;
   }
}



//USERNAME VALIDATION   
function username()
{

   var passing=true;
   var username=document.registration.username.value.trim();
   var username_length=username.length;
   
    //CHECKING IF USERNAME IS LONGER THAN 6 CHARS
    if(username_length<6)
    {
      displayError("<p>"+"Username must have at least 6 characters"+"</p>");
      error=false;
    }     

    //CHECKING IF USERNAME STARTS WITH A CHAR
    if(!username.match(/^[A-Z]/i)) {
        displayError("<p>"+"Username must start with a character"+"</p>");
        passing=false;

    }
   

   if(passing)
   {
       return true;
   }
   else
   {
    return false;
   }
 
}

//PROVINCE VALIDATION
function province()
{
   var province=document.registration.province.selectedIndex;
   var passing=true;
   
   if(province==-1)
   {
       
    displayError("<p>"+"Please select one of the provinces"+"</p>"); 
    passing=false;
   }
  else
    passing=true;


    if(passing)
   {
       return true;
   }
   else
   {
    return false;
   }

}

//STREET VALIDATION
function street_name()
{
  var street=document.registration.street_name.value.trim();    
  var passing=true;

  for(var i=0;i<street.length;i++)
  {
      var str = street.charAt(i);

    if(str.match(/[0-9]/))
    {
        check=1;
        passing=false;
        displayError("<p>"+"Street name should not contain any digit"+"</p>");
        break;
    }

  }
  

  if(passing)
  {
      return true;
  }
  else
  {
   return false;
  }

}

//CITY VALIDATION

function city()
{
   var passing=true;
   var city=document.registration.city.value.trim();
   
   if(!city.match(/^[a-zA-Z]*$/)) {
    displayError("<p>"+"City field must contain letters only"+"</p>");
    passing=false;

    }


   if(passing)
   {
       return true;
   }
   else
   {
    return false;
   }
 

}

//DISPLAYING ERROR MESSAGES
function displayError(text)
{  
    document.querySelector("#error").innerHTML+=text;
}

//CLEARING ALL ERROR MESSAGES
function clearAllErrors()
{
    document.querySelector("#error").innerHTML="";
}

