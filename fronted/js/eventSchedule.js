
let setEvent=(dateTime)=> {
  //convert the given time in millisecond
 
    var givenTime = new Date(dateTime).getTime()
     // find the current time in millisecond
     , timeNow = new Date().getTime()
      // find the differ3nce between given time and  current time
     , offsetMillis = givenTime - timeNow;
     
     return offsetMillis;
 
 };
 const print_string=async(text)=>{
     //Access the Reverse Text
    let reverseText=await fetch(`http://localhost:4000/eventAtDate/${text}`) .then((response)=>response.json()).then((response)=>{
   return response.join("");
});
// show the text on webpage 
let showtext=document.getElementById("eventText");
    showtext.innerText=reverseText;
}

const eventSchedule=(event)=>{
    //map the given event
	event.map((item)=>{
    // Run function to find the difference of given time and current time in millisecond     
	let res=setEvent(item.dateTime);

     if(res>0){
    //Set the event at particular date
      let newString=  setTimeout(()=>{
          let result=  print_string(item.text)
        
           },res);
        }
        else{
            let showtext=document.getElementById("eventText");
          showtext.innerText="";
        }
         
	});
	   
  }

  // Export the function
  export {eventSchedule};