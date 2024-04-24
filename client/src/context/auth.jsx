import axios from "axios";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  Children,
} from "react";


const AuthContext = createContext();
const AuuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    user: null,
    token: "",

  });


axios.defaults.headers.common['Authorization']=auth?.token

  useEffect(()=>{
const data = localStorage.getItem("auth")
if(data){
  const parseData=JSON.parse(data)
setauth({
  ...auth,
  user:parseData,
  token:parseData.userToken

})
}
//eslint-disable-next-line
  },[])
  return (
    <AuthContext.Provider value={[auth, setauth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuuthProvider };
