// Welcoming the user to the app
const welcomeUser=()=>{
    let welcome=document.getElementById('userName')
    let userName=welcome.value; //Getting the user name
    let user=document.querySelector('.user'); // A welcome div
    let html='';
    let welcome_user=[] //array would later be filled with an html element
    let userNameArray=[] //array containg user name
    // incase user inputs an empty value this would run
    if (userName === ''){
        alert('Please input your name');
        return;
    }
    // else this would run
    else{
        userNameArray.push(userName)
        userNameArray.forEach(userName=>{
            let Name=userName[0].toUpperCase()+userName.slice(1); //Capitializing the first letter
            welcome.value='';
            html+=`<h2 style="text-align:center;padding-bottom:1em;">Welcome ${Name}, to your Todo app</h2>`;          
            welcome_user.push(html)
            user.innerHTML=welcome_user
        })
    }
};



const profilePic = document.getElementById("profile-pic");
profilePic.addEventListener("change", () => {
  // check this to see how the API works - https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  // and this - https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  // and this - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
  const file = profilePic.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // Set the image source to the reader result
    const imagePreview = document.querySelector("#picture");
    imagePreview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});


// User data 
let userList=document.querySelector('.userList');
let data =[];
const userData=()=>{
    let user_Data= document.getElementById('user-data'); //Getting the inputed data
    let userInput=user_Data.value;
 
    if(userInput===''){ //this would run if user inputs a empty data
        alert('Fill in your data');
        return;
    }
    
    // else if the data isn't empty run this:
    else{
        let userOutput=document.createElement('div'); //creted a div
        userOutput.classList.add('userOutput'); //added a class to the div
        let un_li=document.createElement('ul'); //created an un-ordered list
        un_li.style.listStyle='none'; //Gave style to it
        let sub_li=document.createElement('li'); //created a list
        sub_li.textContent=userInput //Gave it text of whatever the user puts as data
        //created a trash icon
        let trash=document.createElement('i')
        trash.classList.add('fa', 'fa-trash-o')
        trash.setAttribute('aria-hidden',"true")
        // push the elements into a parent div
        un_li.appendChild(sub_li)
        userOutput.appendChild(un_li);
        userOutput.appendChild(trash)
        data.unshift(userOutput)
            data.forEach(data=>{
                user_Data.value='';
                userList.appendChild(data);
            })  
    } 
    //Created a deleted action
        // add click event listener to userList
        userList.addEventListener('click', (event) => {
            // get the clicked element
            const clickedElement = event.target;
            
            // check if the clicked element is a trash icon
            if (clickedElement.classList.contains('fa-trash-o')) {
                // get the index of the clicked element's parent div in the data array
                const index = data.indexOf(clickedElement.parentElement);
                
                // remove the clicked element's parent div from the data array
                if (index > -1) {
                data.splice(index, 1);
                }
                
                // remove the clicked element's parent div from the DOM
                clickedElement.parentElement.remove();
            }
            });

}  
