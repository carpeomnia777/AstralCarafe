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
    function myfun3(){
        var txt
    var person= prompt('enter name')
    
    if (person==null){
        txt="you cancelled"
    }
    else{
        txt="hello "+ person
    }
    document.getElementById('pro').innerHTML=txt
    }