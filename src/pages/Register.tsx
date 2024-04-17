
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { useForm } from 'react-hook-form'

import instance from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interface/IUser'
const userSchema = Joi.object({
    email:Joi.string().email({tlds:{allow:false}}).required(),
    password:Joi.string().required()
})
const Register = () => {
    const Navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver:joiResolver(userSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })
 
    const onSubmit = async(user:IUser)=>{
        try {
            await instance.post('/signup', user)
            alert("Dang ky thanh cong")
            Navigate('/login')
        } catch (error) {
            console.log(error)
            alert("Dang ky that bai")
        }
    }
  return (
   <section className="login">
  <div className="wrapper-log">
    <div className="title">
      <h1>TypeScript</h1>
    </div>
    <div className="form-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng ký</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" {...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors?.email && ( <div id="emailHelp" className="form-text text-danger">{errors?.email?.message}</div>)}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" />
          {errors?.password && ( <div id="emailHelp" className="form-text text-danger">{errors?.password?.message}</div>)}
        </div>
        <button type="submit" className="btn btn-primary">Đăng Ký</button>
      </form>
    </div>
  </div>
</section>

  )
}

export default Register