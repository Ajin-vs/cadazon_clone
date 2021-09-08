import {useForm} from 'react-hook-form'

function CreateAccount(){

    let {register,handleSubmit,formState:{errors}} = useForm()
    const handleFormSubmit =(userObj)=>{
        console.log("userObj",userObj);
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
            
            <div className="col col-lg-4 col-md-5 col-sm-12 col-12">
                <button type="submit"  className="btn btn-primary mt-3 w-100"  >Create an Account</button>
            </div>
        </form>
        </div>
    )
}


export default CreateAccount;