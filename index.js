function validate() {
    if(document.myform.name.value==""){
        alert("enter your name")
        document.myform.name.focus()
        return false
    }
    if(document.myform.email.value==""){
        alert("enter your email")
        document.myform.name.focus()
        return false
    }
   
