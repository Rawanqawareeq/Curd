export  const validtionuserData = (user)=>{
    let errors={};
    if(user.name.trim()==""){
        errors.name="username not required";
    }else if(user.name.trim().length < 3){
        errors.name="name must be  at least 3 characters";
    }
    if(user.email.trim()==""){
        errors.email="email not required";
    }else if(user.email.trim().length < 9){
        errors.email="email must be  at least 9 characters";
    }
    if(user.password.trim()==""){
        errors.password="password not required";
    }else if(user.password.trim().length < 4){
        errors.password="password must be  at least 4 characters";
        
    }
    return errors;
}