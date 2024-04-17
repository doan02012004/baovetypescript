


import { useForm } from 'react-hook-form'
import useProductMutation from '../../hooks/useProductMutation'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useProductQuery from '../../hooks/useProductQuery'
import { IProduct } from '../../interface/IProduct'

const Edit = () => {
    const {id} = useParams()
    const query = useProductQuery(id)
    useEffect(()=>{
        reset(query?.data?.data)
    },[id,query?.data?.data])
    const {register, handleSubmit, formState:{errors},reset}= useForm()
    const mutation = useProductMutation('update');
    const onSubmit = (product:IProduct)=>{
        mutation.mutate({id:product.id,product:product})
    }
  return (
    <section className="add-products">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Thêm sản phẩm</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
        <input type="text" {...register('name',{required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
       {errors.name && errors.name.type =="required" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc nhap</div>)}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Ảnh</label>
        <input type="text" {...register('image',{required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {errors?.image && errors?.image.type =="required" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc nhap</div>)}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Giá</label>
        <input type="text" {...register('price',{required:true, validate: (value)=> !isNaN(value), min:1})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {errors.price && errors.price.type =="required" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc nhap</div>)}
        {errors.price && errors.price.type =="validate" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc la so</div>)}
        {errors.price && errors.price.type =="min" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc la so duong</div>)}
      </div>
   
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Mô tả</label>
        <textarea {...register('desc',{required:true})} className="form-control"  cols={80} rows={10} style={{resize: 'none'}} defaultValue={""} />
        {errors?.desc && errors?.desc.type =="required" && ( <div id="emailHelp" className="form-text text-danger">Bat buoc nhap</div>)}
      </div>
      <button type="submit" className="btn btn-primary">Update Sản Phẩm</button>
    </form>
  </section>
  )
}

export default Edit