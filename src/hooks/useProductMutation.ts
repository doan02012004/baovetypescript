import { useMutation, useQueryClient } from '@tanstack/react-query'

import instance from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../interface/IProduct'

const useProductMutation = (action:string) => {
    const Navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn:async(option:{id?:string|number, product?:IProduct})=>{
            try {
                const options = {
                    id: option.id,
                    product: option.product
                }
                switch (action) {
                    case "remove":
                        await instance.delete(`/products/${options.id}`)
                        alert("Xoa thanh cong")
                        break;
                    case "add":
                        await instance.post(`/products`, options.product)
                        alert("Them thanh cong")
                        Navigate('/')
                        break;
                    case "update":
                        await instance.put(`/products/${options.id}`, options.product)
                        alert("Cap nhat thanh cong")
                        Navigate('/')
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey:['PRODUCT_KEY']})
        }
    })
  return mutation
}

export default useProductMutation