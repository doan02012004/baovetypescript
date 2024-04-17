import React from 'react'
import { Link } from 'react-router-dom'
import useProductQuery from '../../hooks/useProductQuery'
import useProductMutation from '../../hooks/useProductMutation';

const List = () => {
    const query = useProductQuery();
    const mutation = useProductMutation('remove')
    const onRemove = (id:string|number)=>{
        if(confirm("Ban co muon xoa khong")){
            mutation.mutate({id:id})
        }
    }
  return (
   <>
    <h2>Danh Sách Sản Phẩm</h2>
      <div className="table-responsive">
        <Link to='/add'><button className="btn btn-primary">Thêm sản phẩm</button></Link><table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Giá</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {query?.data?.data.map((item,i)=>(
                 <tr key={i}>
                 <td>{i+1}</td>
                 <td>{item.name}</td>
                 <td>
                <img src={item.image} width="70px" alt={item.name} />
                 </td>
                 <td>{item.price}</td>
                 <td>{item.desc}</td>
                 <td>
                   <Link to={`/edit/${item.id}`}><button className="btn btn-warning">Edit</button></Link>
                   <button className="btn btn-danger" onClick={()=> onRemove(item.id)} >Xóa</button>
                 </td>
               </tr>
            ))}
          
          </tbody>
        </table>
      </div>
   </>
  )
}

export default List