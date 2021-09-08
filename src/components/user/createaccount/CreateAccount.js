import {useForm} from 'react-hook-form'
import { useState } from 'react';
function CreateAccount(){
    const [psw,setPsw] = useState(false)
    let {register,handleSubmit,formState:{errors}} = useForm()
    const handleFormSubmit =(userObj)=>{
        console.log("userObj",userObj);
        if(userObj.password !== userObj.conpassword){
            setPsw(true)
        }
        else{
            setPsw(false)
            
        }
    }
    return(
        <div className="col  col-lg-6 col-sm-12 col-12 col-md-7">
        <h1>Create New Customer Account</h1>
        <p>Personal Information</p>
        <hr/>
        <form className="form " onSubmit={handleSubmit(handleFormSubmit)} >
            <label className="form-label" htmlFor="firstname">  First Name *</label>
            <input type="text" id="firstname" {...register('firstname',{required:true})} className={`form-control`}/>
            {errors.firstname?.type==='required' && <p className="text-danger">username is required*</p>}

            <label className="form-label mt-2" htmlFor="secondname">Last Name *</label>
            <input id="secondname" {...register('lastname',{required:true})} className="form-control"/>
            {errors.lastname?.type === 'required' && <p className="text-danger">Second name is required *</p>}
            

            <p className="mt-5">Sign-in Information</p>
            <hr/>
            <label className="form-label" htmlFor="email">  Email *</label>
            <input type="email" id="email" {...register('email',{required:true})} className={`form-control`}/>
            {errors.email?.type==='required' && <p className="text-danger">email is required*</p>}

            <label className="form-label" htmlFor="psw">  Password *</label>
            <input type="password" id="psw" {...register('password',{required:true})} className={`form-control`} />
            {errors.password?.type==='required' && <p className="text-danger">password is required*</p>}

            <label className="form-label" htmlFor="cpsw"> confirm Password *</label>
            <input type="password" id="cpsw" {...register('conpassword',{required:true})} className={`form-control`} />
            {errors.conpassword?.type==='required' && <p className="text-danger">password is required*</p>}
            {psw && <p className="text-danger">enter same password</p>}
            <div className="col col-lg-4 col-md-5 col-sm-12 col-12">
                <button type="submit"  className="btn btn-primary mt-3 w-100"  >Create an Account</button>
            </div>
        </form>
        </div>
    )
}


export default CreateAccount;