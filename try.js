function lucky(){
    let name=document.getElementById("name").value;
    let school=document.getElementById("school").value;
    let adm=document.getElementById("adm").value;
    let grade=document.getElementById("grade").value;
    let lucky=document.getElementById("lucky").value;
    

    document.getElementById("x").innerHTML="HELLO "+name+" "+"WELCOME TO THE HAPPEACE GAME"
    document.getElementById("y").innerHTML="YOU WENT TO THE ALMIGHTY "+school+" "+"YOUR ADM NO IS "+adm
    document.getElementById("z").innerHTML="YOUR LUCKY NUMBER IS "+lucky+" "+"SEE YOUR CAREER DOWN"
   

    if(lucky==0){
        document.getElementById("P").innerHTML="YOU WILL PERSUE MEDICINE AND BECOME A WONDERFUL DOCTOR : DR "+name
    }
    else if(lucky==1){
        document.getElementById("P").innerHTML="YOU WILL PERSUE ENGINEERING AND BECOME A PROFESSIONAL ENGINEER : ENGINEER "+name
    }
    else if(lucky==2){
        document.getElementById("P").innerHTML="YOU WILL PERSUE AVIATION AND BECOME A SUCCESSIFUL PILOT : PILOT "+name
    } 

    else if(lucky==3){
        document.getElementById("P").innerHTML="YOU WILL PERSUE NURSING AND BECOME A PROFESSIONAL NURSE :NURSE "+name
    }
    else if(lucky==4){
        document.getElementById("P").innerHTML="YOU WILL PERSUE PHARMACY AND BECOME A PROFESSIONAL PHARMACIST : " +name+" "+"THE PHARMACIST"
    }
    else if(lucky==5){
        document.getElementById("P").innerHTML="YOU WILL PERSUE EDUCATION AND BECOME A PROFESSIONAL TEACHER : TEACHER "+name
    }
    else if(lucky==6){
        document.getElementById("P").innerHTML="YOU WILL PERSUE CUMPUTER AND BECOME A SUCCESSIFUL HUCKER :" +name + " "+"THE HUCKER"
    } 

    else if(lucky==7){
        document.getElementById("P").innerHTML="YOU WILL PERSUE PLUMBING AND BECOME A PROFESSIONAL PLUMBER :PLUMBER "+name
    }
    else if(lucky==8){
        document.getElementById("P").innerHTML="YOU WILL PERSUE TAILORING AND BECOME A PROFESSIONAL TAILOR : "+name+" "+"THE TAILOR"

    }
    else if(lucky==9){
        document.getElementById("P").innerHTML="YOU WILL PERSUE HAIR CUTTING AND BECOME A PROFESSIONAL BERBER : "+name+" "+"THE BERBER"
    }
    else if(lucky==10){
        document.getElementById("P").innerHTML="YOU WILL PERSUE COMPUTER AND BECOME A SUCCESSIFUL PROGRAMMER : "+name+" "+"THE PROGRAMMER"
    } 

    else if(lucky==11){
        document.getElementById("P").innerHTML="YOU WILL PERSUE ADMINISTRATION AND BECOME A PROFESSIONAL ADMINISTRATOR :"+name+" "+"THE ADMINISTRATOR"
    }
    else if(lucky==12){
        document.getElementById("P").innerHTML="YOU WILL PERSUE BANKING AND BECOME A PROFESSIONAL BANKER : "+name+" "+"THE BANKER"
    }
    else if(lucky==13){
        document.getElementById("P").innerHTML="YOU WILL PERSUE POLITICAL SCIENCE AND BECOME A SUCCESSIFUL PRESIDENT : THE PRESIDENT "+name
    }
    else if(lucky==14){
        document.getElementById("P").innerHTML="YOU WILL PERSUE CRIMINOLOGY AND BECOME A SUCCESSIFUL CID : CID "+name
    } 

    else if(lucky==15){
        document.getElementById("P").innerHTML="YOU WILL PERSUE MILLITARY COURSES AND BECOME A SUCCESSIFUL SOLDIER :SOLDIER "+name
    }
    else {
        document.getElementById("P").innerHTML="YOU WILL PERSUE ADMINISTRATION AND BECOME A PROFESSIONAL AMBASSADOR : "+name+" "+"THE AMBASSADOR"
}
}