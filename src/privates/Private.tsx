
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    let check = true;
    if(user.id !=1){
        check = false
        alert("Ban khong co quyen")
    }
  return check? children : <Navigate to={'/'} />
}

export default Private