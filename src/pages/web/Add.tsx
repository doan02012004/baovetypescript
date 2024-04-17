

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { useForm } from 'react-hook-form'
import useProductMutation from '../../hooks/useProductMutation'
import { IProduct } from '../../interface/IProduct'
const productSchema = Joi.object({
    name:Joi.string().required(),
    desc:Joi.string().required(),
    image:Joi.string().required(),
    price:Joi.number().min(1).required(),
})
const Add = () => {
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver:joiResolver(productSchema),
        defaultValues:{
            name:"",
            price:"",
            image:"",
            desc:""
        }
    })
    const mutation = useProductMutation('add');
    const onSubmit:(product:IProduct)=>void = (product:IProduct)=>{
        mutation.mutate({product:product})
    }
  return (
    <section className="add-products">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Thêm sản phẩm</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
        <input type="text" {...register('name')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
       {errors?.name && ( <div id="emailHelp" className="form-text text-danger">{errors?.name?.message}</div>)}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Ảnh</label>
        <input type="text" {...register('image')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {errors?.image && ( <div id="emailHelp" className="form-text text-danger">{errors?.image?.message}</div>)}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Giá</label>
        <input type="text" {...register('price')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {errors?.price && ( <div id="emailHelp" className="form-text text-danger">{errors?.price?.message}</div>)}
      </div>
   
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Mô tả</label>
        <textarea {...register('desc')} className="form-control"  cols={80} rows={10} style={{resize: 'none'}} defaultValue={""} />
        {errors?.desc && ( <div id="emailHelp" className="form-text text-danger">{errors?.desc?.message}</div>)}
      </div>
      <button type="submit" className="btn btn-primary">Thêm Sản Phẩm</button>
    </form>
  </section>
  )
}

export default Add