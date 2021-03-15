import React from "react"
import classes from "./AdminPage.module.css"
import AdminAddMedicinePage from "../Components/AdminAddMedicinePage";
import AdminViewInv from "../Components/AdminViewInv";
import AdminAddSaleExec from "../Components/AdminAddSaleExec";
import AdminViewTeam from "../Components/AdminViewTeam";
import SaleCreateOrder from "../Components/SaleCreateOrder";
import SaleViewOrder from "../Components/SaleViewOrder";

class Homepage extends React.Component{
    constructor() {
        super();
        this.state = {
            activeTask:{addmedicine:true,viewinventory:false,addsale:false,viewteam:false}
        }
    }

    componentDidMount() {
        const addmedicine = document.getElementById("addmedicine")
        const viewinventory = document.getElementById("viewinventory")
        const addsale = document.getElementById("addsale")
        const viewteam = document.getElementById("viewteam")
        const addorder = document.getElementById("addorder")
        const vieworder = document.getElementById("vieworder")
        addmedicine.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:true,viewinventory:false,addsale:false,viewteam:false,addorder:false,vieworder:false}})
            addmedicine.style.backgroundColor = "#90999F"
            viewinventory.style.backgroundColor = "#F2F2F2"
            addsale.style.backgroundColor = "#F2F2F2"
            viewteam.style.backgroundColor = "#F2F2F2"
            addorder.style.backgroundColor = "#F2F2F2"
            vieworder.style.backgroundColor = "#F2F2F2"
        })
        viewinventory.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:false,viewinventory:true,addsale:false,viewteam:false,addorder:false,vieworder:false}})
            addmedicine.style.backgroundColor = "#F2F2F2"
            viewinventory.style.backgroundColor = "#90999F"
            addsale.style.backgroundColor = "#F2F2F2"
            viewteam.style.backgroundColor = "#F2F2F2"
            addorder.style.backgroundColor = "#F2F2F2"
            vieworder.style.backgroundColor = "#F2F2F2"
        })
        addsale.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:false,viewinventory:false,addsale:true,viewteam:false,addorder:false,vieworder:false}})
            addmedicine.style.backgroundColor = "#F2F2F2"
            viewinventory.style.backgroundColor = "#F2F2F2"
            addsale.style.backgroundColor = "#90999F"
            viewteam.style.backgroundColor = "#F2F2F2"
            addorder.style.backgroundColor = "#F2F2F2"
            vieworder.style.backgroundColor = "#F2F2F2"
        })
        viewteam.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:false,viewinventory:false,addsale:false,viewteam:true,addorder:false,vieworder:false}})
            addmedicine.style.backgroundColor = "#F2F2F2"
            viewinventory.style.backgroundColor = "#F2F2F2"
            addsale.style.backgroundColor = "#F2F2F2"
            viewteam.style.backgroundColor = "#90999F"
            addorder.style.backgroundColor = "#F2F2F2"
            vieworder.style.backgroundColor = "#F2F2F2"
        })
        addorder.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:false,viewinventory:false,addsale:false,viewteam:false,addorder:true,vieworder:false}})
            addmedicine.style.backgroundColor = "#F2F2F2"
            viewinventory.style.backgroundColor = "#F2F2F2"
            addsale.style.backgroundColor = "#F2F2F2"
            viewteam.style.backgroundColor = "#F2F2F2"
            addorder.style.backgroundColor = "#90999F"
            vieworder.style.backgroundColor = "#F2F2F2"
        })
        vieworder.addEventListener("click",() => {
            this.setState({activeTask:{addmedicine:false,viewinventory:false,addsale:false,viewteam:false,addorder:false,vieworder:true}})
            addmedicine.style.backgroundColor = "#F2F2F2"
            viewinventory.style.backgroundColor = "#F2F2F2"
            addsale.style.backgroundColor = "#F2F2F2"
            viewteam.style.backgroundColor = "#F2F2F2"
            addorder.style.backgroundColor = "#F2F2F2"
            vieworder.style.backgroundColor = "#90999F"
        })
    }

    signoutbutton = () => {
        localStorage.setItem("isLogged",false)
        localStorage.setItem("loginby",null)
        window.location.assign("/");
    }

    render() {
        return(
            <div>
                <div className={classes.heading}>
                    <h1>Admin</h1>
                    <button onClick={this.signoutbutton} className={classes.signoutbutton}>Sign Out</button>
                </div>
                <div className={classes.maincontainer}>
                    <div className={classes.sidecontainer}>
                        <div className={classes.sidesubcontainer}>
                            <p id={"addmedicine"} className={classes.p} style={{backgroundColor:"#90999F"}}>
                                Add Medicine to Inventory
                            </p>
                            <p id={"viewinventory"} className={classes.p}>
                                View Inventory
                            </p>
                        </div>
                        <div className={classes.sidesubcontainer}>
                            <p id={"addsale"} className={classes.p}>
                                Add Sales Executive
                            </p>
                            <p id={"viewteam"} className={classes.p}>
                                View Team
                            </p>
                        </div>
                        <div className={classes.sidesubcontainer}>
                            <p id={"addorder"} className={classes.p}>
                                Add Order
                            </p>
                            <p id={"vieworder"} className={classes.p}>
                                View Order
                            </p>
                        </div>
                    </div>
                    <div className={classes.headcontainer}>
                    {this.state.activeTask.addmedicine ? <AdminAddMedicinePage /> : this.state.activeTask.viewinventory ? <AdminViewInv /> : this.state.activeTask.addsale ? <AdminAddSaleExec /> : this.state.activeTask.viewteam ? <AdminViewTeam /> : this.state.activeTask.addorder ? <SaleCreateOrder /> :this.state.activeTask.vieworder ? <SaleViewOrder /> : <h1>Nothing</h1>}

                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage