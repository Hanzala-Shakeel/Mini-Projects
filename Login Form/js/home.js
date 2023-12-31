let current_user=JSON.parse(localStorage.getItem("current_user"));
function logout(){
   // swal("Are you sure you want to do this?", {
   //    buttons: ["no!", "yes"],
   //  });
      
   localStorage.removeItem("current_user");
   window.location.href="index.html"
}