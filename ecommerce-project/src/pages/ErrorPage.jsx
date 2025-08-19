import { Link } from "react-router";
import { Header } from "../components/Header";
import logo from '../../public/error.png';


export function ErrorPage({cart}) {
  return(
    <>
      <title>Error</title>
      <Header cart = {cart}/>
      
      <img src = {logo} />
    </>
    
  )
}