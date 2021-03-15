import React from "react"
import classes from "./admin.module.css";

class AdminViewInv extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            medicinedata:[],
            count:0
        };
    }

    deleting = (e) => {
        const deletingitem = []
        const gettingdatafromlocalstore = localStorage.getItem("medicinedata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const datalength = afterparsemedicinedata.length
        for(let i = 0; i < datalength; i++){
            if(e.target.id != i){
                deletingitem.push(afterparsemedicinedata[i])
            }
            else{
                let list = document.getElementById("list"+i)
                list.style.display = "none"
            }
        }
        localStorage.setItem("medicinedata",JSON.stringify(deletingitem))
    }

    editing = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("medicinedata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let Name = document.getElementById("Name"+i)
                let ManufacturerName = document.getElementById("ManufacturerName"+i)
                let Price = document.getElementById("Price"+i)
                let Stock = document.getElementById("Stock"+i)
                let Discount = document.getElementById("Discount"+i)
                let Nameinput = document.getElementById("Nameinput"+i)
                let ManufacturerNameinput = document.getElementById("ManufacturerNameinput"+i)
                let Priceinput = document.getElementById("Priceinput"+i)
                let Stockinput = document.getElementById("Stockinput"+i)
                let Discountinput = document.getElementById("Discountinput"+i)
                Name.style.display="none"
                ManufacturerName.style.display="none"
                Price.style.display="none"
                Stock.style.display="none"
                Discount.style.display="none"
                Nameinput.style.display="block"
                ManufacturerNameinput.style.display="block"
                Priceinput.style.display="block"
                Stockinput.style.display="block"
                Discountinput.style.display="block"
            }
        }
    }

    updating = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("medicinedata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let Name = document.getElementById("Name"+i)
                let ManufacturerName = document.getElementById("ManufacturerName"+i)
                let Price = document.getElementById("Price"+i)
                let Stock = document.getElementById("Stock"+i)
                let Discount = document.getElementById("Discount"+i)
                let Nameinput = document.getElementById("Nameinput"+i)
                let ManufacturerNameinput = document.getElementById("ManufacturerNameinput"+i)
                let Priceinput = document.getElementById("Priceinput"+i)
                let Stockinput = document.getElementById("Stockinput"+i)
                let Discountinput = document.getElementById("Discountinput"+i)
                Name.style.display="block"
                ManufacturerName.style.display="block"
                Price.style.display="block"
                Stock.style.display="block"
                Discount.style.display="block"
                Nameinput.style.display="none"
                ManufacturerNameinput.style.display="none"
                Priceinput.style.display="none"
                Stockinput.style.display="none"
                Discountinput.style.display="none"

                Name.innerText = Nameinput.value
                ManufacturerName.innerText = ManufacturerNameinput.value
                Price.innerText = Priceinput.value
                Stock.innerText = Stockinput.value
                Discount.innerText = Discountinput.value
            }
        }

        const deletingitemupdating = []
        const gettingdatafromlocalstoreupdating = localStorage.getItem("medicinedata")
        const afterparsemedicinedataupdating = JSON.parse(gettingdatafromlocalstoreupdating)
        for(let i = 0; i < afterparsemedicinedataupdating.length; i++){
            const idgettings = e.target.id.split("n")[1]
            if(idgettings != i){
                deletingitemupdating.push(afterparsemedicinedataupdating[i])
            }
            else{
                let Name = document.getElementById("Name"+i).innerText
                let ManufacturerName = document.getElementById("ManufacturerName"+i).innerText
                let Price = document.getElementById("Price"+i).innerText
                let Stock = document.getElementById("Stock"+i).innerText
                let Discount = document.getElementById("Discount"+i).innerText
                const pre = {
                    Name: Name,
                    ManufacturerName: ManufacturerName,
                    Price: Price,
                    Stock: Stock,
                    Discount: Discount
                }
                deletingitemupdating.push(pre)
            }
        }
        localStorage.setItem("medicinedata",JSON.stringify(deletingitemupdating))
    }

    render() {
        const gettingdatafromlocalstore = localStorage.getItem("medicinedata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        let display
        if(afterparsemedicinedata !== null){
            display = afterparsemedicinedata.map((data,index) => {
            return(
                <tr id={"list"+index} key={index} className={classes.tabledatarow}>
                    <td>
                        <p id={"Name"+index}>
                            {data.Name}
                        </p>
                        <input type="text" id={"Nameinput"+index} style={{display:"none",margin:"auto"}} />
                    </td>
                    <td>
                        <p id={"ManufacturerName"+index}>
                            {data.ManufacturerName}
                        </p>
                        <input type="text" id={"ManufacturerNameinput"+index} style={{display:"none",margin:"auto"}} />
                    </td>
                    <td>
                        <p id={"Price"+index}>
                            {data.Price} $
                        </p>
                        <input type="number" id={"Priceinput"+index} style={{display:"none",margin:"auto"}} />
                    </td>
                    <td>
                        <p id={"Stock"+index}>
                            {data.Stock}
                        </p>
                        <input type="number" id={"Stockinput"+index} style={{display:"none",margin:"auto"}} />
                    </td>
                    <td>
                        <p id={"Discount"+index}>
                            {data.Discount} %
                        </p>
                        <input type="number" id={"Discountinput"+index} style={{display:"none",margin:"auto"}} />
                    </td>

                    <td id={"editbutton"+index}>
                        <i className="fa fa-pencil-square-o" id={"editicon"+index} aria-hidden="true" onClick={(e) => {e.target.style.display="none";document.getElementById("updatebutton"+index).style.display="block" ;this.editing(e)}}></i>
                        <button id={"updatebutton"+index} style={{margin:"auto"}} className={classes.updatebutton} onClick={(e) => {e.target.style.display="none";document.getElementById("editicon"+index).style.display="block" ;this.updating(e)}}>Update</button>
                    </td>
                    <td id={"deletebutton"+index} onClick={(e) => this.deleting(e)}>
                        <i className="fa fa-trash" aria-hidden="true" id={index}></i>
                    </td>
                </tr>
            )
            }
        )}else{
            display = () => {
                return(<h1>No Data</h1>)
            }
        }
        return(
            <div className={classes.listmaincontainer}>
                <h1>Inventory List</h1>
                <table className={classes.tablemain}>
                    <tbody>
                        <tr className={classes.tablehadingrow}>
                            <th>
                                Name
                            </th>
                            <th>
                                Manufacturer Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Stock
                            </th>
                            <th>
                                Discount
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {localStorage.getItem("medicinedata") === null ? <h1>No Data</h1> : display}
                        {/*{display}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminViewInv