import { Link } from "react-router";
import { Header } from "../components/Header";
import logo from '../../public/error.png';


export function ErrorPage() {
  return(
    <>
      <title>Error</title>
      <Header/>
      
      <img src = {logo} />
    </>
    
  )
}