import classes from "./LoginPage.module.css"
import {Component} from "react";

class Loginpage extends Component {

    componentDidMount() {
        localStorage.setItem("adminusername","test-admin")
        localStorage.setItem("adminuserpassword","test-admin")
        localStorage.setItem("saleusername","test-sales")
        localStorage.setItem("saleuserpassword","test-sales")
        const form = document.getElementById("loginbutton")
        form.addEventListener("click",(e) => {
            e.preventDefault()
            const user = document.getElementById("userid").value
            const password = document.getElementById("password").value
            const logingadminuser = localStorage.getItem("adminusername")
            const logingadminpassword = localStorage.getItem("adminuserpassword")
            const logingsaleuser = localStorage.getItem("saleusername")
            const logingsalepassword = localStorage.getItem("saleuserpassword")
            if(logingadminuser === user && logingadminpassword === password){
                console.log("Login Success")
                window.location.assign("/adminpage");
                localStorage.setItem("isLogged",true)
                localStorage.setItem("loginby","admin")
            }
            if(logingsaleuser === user && logingsalepassword === password){
                console.log("Login Success")
                window.location.assign("/salepage");
                localStorage.setItem("isLogged",true)
                localStorage.setItem("loginby","sale")
            }
        })
    }

    render()
    {
        localStorage.setItem("isLogged",false)
        localStorage.setItem("loginby",null)
        return (
            <div className={classes.loginpagemain}>
                <div className={classes.maincontainer}>
                    <form action="#" className={classes.formmain}>
                        <input type="text" placeholder={"     USERNAME"}
                               className={`${classes.formitem} ${classes.inputstyle}`} id={"userid"}/>
                        <input type="password" placeholder={"     PASSWORD"}
                               className={`${classes.formitem} ${classes.inputstyle}`} id={"password"}/>
                        <button type="submit" className={`${classes.formitem} ${classes.submitbutton}`}
                                id="loginbutton">LOGIN
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Loginpage