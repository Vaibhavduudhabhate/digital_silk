const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
const img_tog = document.querySelectorAll(".newsPaper_img"); 
const show_more = document.querySelectorAll(".show_more")
show_more.forEach((data)=>{
    data.addEventListener('click',toggler)
})
function toggler() {
    img_tog.forEach((imageFull)=>{
        imageFull.classList.toggle('heading_of_tabs_inner_img_auto')
    })
}

const Best_vi =document.querySelector(".bb_best")
const show_article = document.querySelector(".Show_article")
show_article.addEventListener('click',New_toggle)

function New_toggle() {
    Best_vi.classList.toggle('show_article_new')
}


// Get the modal
var modal = document.getElementById("myModal");
var modal_content = document.getElementsByClassName("modal-content");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");
var span2 = document.getElementsByClassName("close_2");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function(){
    modal.style.display = "none"
}


// When the user clicks anywhere outside of the modal, close it
// modal.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

    
let formMe = document.getElementById('Form_me')
let form = document.querySelector("#form");
      let Name_oo = document.querySelector("#Name_oo");
      let company_name_oo = document.querySelector("#Company_name_oo");
      let email_oo = document.querySelector("#Email_oo");
      let phone_oo = document.querySelector("#Phone_oo");
      let message_oo = document.querySelector("#txtArea_oo");
      let Submit_btn = document.getElementById("Submit_btn");

      Submit_btn.addEventListener("click", function (e) {
        e.preventDefault();
        let name_value = Name_oo.value;
        let company_name_value = company_name_oo.value;
        let email_value = email_oo.value;   
        let phone_value = phone_oo.value;
        let message_value = message_oo.value;
        // let existingArray = [];
        // let newData = { 
        //     name: name_value,
        //     company_name: company_name_value,
        //     email: email_value,
        //     phone: phone_value,
        //     message: message_value
        // }; 
        // let existingArray = JSON.parse(localStorage.getItem('myobject')) || [];
        // existingArray.push({
        //     name: name_value,
        //     company_name: company_name_value,
        //     email: email_value,
        //     phone: phone_value,
        //     message: message_value
        // });
        // let updatedArrayString = JSON.stringify(existingArray);
        // localStorage.setItem('myobject', JSON.stringify(existingArray));

        localStorage.setItem('myobject',JSON.stringify([name_value,company_name_value,email_value,phone_value,message_value]))

        const New_name = document.getElementById("New_name");
        const new_Company_name = document.getElementById("Company_name");
        const new_Email = document.getElementById("Email");
        const new_Phone = document.getElementById("Phone");
        const new_Message = document.getElementById("Message");

        let formDataString = localStorage.getItem("myobject");
        let myobject = JSON.parse(formDataString)


            // if (formDataString) {
            // let dataArray = JSON.parse(formDataString);

            // if (dataArray.length > 0) {
            //     let lastElement = dataArray[dataArray.length - 1];
            //     console.log(lastElement);
            // } else {
            //     console.log("Array is empty.");
            // }
            // } else {
            // console.log("No data found in local storage.");
            // }


        New_name.textContent = myobject[0];
        new_Company_name.textContent = myobject[1];
        new_Email.textContent = myobject[2];
        new_Phone.textContent = myobject[3];
        new_Message.textContent = myobject[4];

        // window.location.href = "FormData.html";
        let Data_form = document.getElementById('Data_form')
        Submit_btn.onclick = function() {
        formMe.style.display ='none';
        Data_form.style.display = "block";
      }
      });
      
      document.querySelector('#thank_you').addEventListener('click',function(e){
          e.preventDefault();
        window.location.href = "index.html";
      })

      

    //   ////////////////////////////////////

    // document.addEventListener("DOMContentLoaded", function() {
    //     const tabs = document.querySelectorAll('.third-radio');
        
    //     tabs.forEach(tab => {
    //       tab.addEventListener('change', function() {
    //         // Get the ID of the selected tab
    //         const tabId = this.getAttribute('id').replace('tab', 'pills-');
            
    //         // Hide all tab content
    //         const tabContents = document.querySelectorAll('.tab-pane-4');
    //         tabContents.forEach(content => {
    //           content.style.display = 'none';
    //         });
            
    //         // Show the selected tab content
    //         const selectedTabContent = document.getElementById(tabId);
    //         if (selectedTabContent) {
    //           selectedTabContent.style.display = 'block';
    //         }
    //       });
    //     });
    //   });
      
