import React from "react"
import classes from "./admin.module.css"
import "./admin.module.css"

class SaleViewOrder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            medicinedata:[],
            count:0
        };
    }

    componentDidMount() {

    }

    deleting = (e) => {
        const deletingitem = []
        const gettingdatafromlocalstore = localStorage.getItem("orderdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const datalength = afterparsemedicinedata.length
        let a = e.target.id
        for(let i = 0; i < datalength; i++){
            if(a != i){
                deletingitem.push(afterparsemedicinedata[i])
            }
            else{
                let list = document.getElementById("list"+i)
                list.style.display = "none"
            }
        }
        localStorage.setItem("orderdata",JSON.stringify(deletingitem))

    }

    editing = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("orderdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let orderid = document.getElementById("orderid"+i)
                let CustomerName = document.getElementById("CustomerName"+i)
                let CustomerContactNumber = document.getElementById("CustomerContactNumber"+i)
                let Products = document.getElementById("Products"+i)
                let PurchaseQuantity = document.getElementById("PurchaseQuantity"+i)
                let TotalAmount = document.getElementById("TotalAmount"+i)
                let orderidinput = document.getElementById("orderidinput"+i)
                let CustomerNameinput = document.getElementById("CustomerNameinput"+i)
                let CustomerContactNumberinput = document.getElementById("CustomerContactNumberinput"+i)
                let Productsinput = document.getElementById("Productsinput"+i)
                let PurchaseQuantityinput = document.getElementById("PurchaseQuantityinput"+i)
                let TotalAmountinput = document.getElementById("TotalAmountinput"+i)
                orderid.style.display="none"
                CustomerName.style.display="none"
                CustomerContactNumber.style.display="none"
                Products.style.display="none"
                PurchaseQuantity.style.display="none"
                TotalAmount.style.display="none"
                orderidinput.style.display="block"
                CustomerNameinput.style.display="block"
                CustomerContactNumberinput.style.display="block"
                Productsinput.style.display="block"
                PurchaseQuantityinput.style.display="block"
                TotalAmountinput.style.display="block"
            }
        }
    }

    updating = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("orderdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let orderid = document.getElementById("orderid"+i)
                let CustomerName = document.getElementById("CustomerName"+i)
                let CustomerContactNumber = document.getElementById("CustomerContactNumber"+i)
                let Products = document.getElementById("Products"+i)
                let PurchaseQuantity = document.getElementById("PurchaseQuantity"+i)
                let TotalAmount = document.getElementById("TotalAmount"+i)
                let orderidinput = document.getElementById("orderidinput"+i)
                let CustomerNameinput = document.getElementById("CustomerNameinput"+i)
                let CustomerContactNumberinput = document.getElementById("CustomerContactNumberinput"+i)
                let Productsinput = document.getElementById("Productsinput"+i)
                let PurchaseQuantityinput = document.getElementById("PurchaseQuantityinput"+i)
                let TotalAmountinput = document.getElementById("TotalAmountinput"+i)
                orderid.style.display="block"
                CustomerName.style.display="block"
                CustomerContactNumber.style.display="block"
                Products.style.display="block"
                PurchaseQuantity.style.display="block"
                TotalAmount.style.display="block"
                orderidinput.style.display="none"
                CustomerNameinput.style.display="none"
                CustomerContactNumberinput.style.display="none"
                Productsinput.style.display="none"
                PurchaseQuantityinput.style.display="none"
                TotalAmountinput.style.display="none"

                orderid.innerText = orderidinput.value
                CustomerName.innerText = CustomerNameinput.value
                CustomerContactNumber.innerText = CustomerContactNumberinput.value
                Products.innerText = Productsinput.value
                PurchaseQuantity.innerText = PurchaseQuantityinput.value
                TotalAmount.innerText = TotalAmountinput.value

            }
        }

        const deletingitemupdating = []
        const gettingdatafromlocalstoreupdating = localStorage.getItem("orderdata")
        const afterparsemedicinedataupdating = JSON.parse(gettingdatafromlocalstoreupdating)
        for(let i = 0; i < afterparsemedicinedataupdating.length; i++){
            const idgettings = e.target.id.split("n")[1]
            if(idgettings != i){
                deletingitemupdating.push(afterparsemedicinedataupdating[i])
            }
            else{
                let orderid = document.getElementById("orderid"+i).innerText
                let CustomerName = document.getElementById("CustomerName"+i).innerText
                let CustomerContactNumber = document.getElementById("CustomerContactNumber"+i).innerText
                let Products = document.getElementById("Products"+i).innerText
                let PurchaseQuantity = document.getElementById("PurchaseQuantity"+i).innerText
                let TotalAmount = document.getElementById("TotalAmount"+i).innerText
                const pre = {
                    OrderId: orderid,
                    CustomerName: CustomerName,
                    CustomerContactNumber: CustomerContactNumber,
                    Products: Products,
                    PurchaseQuantity: PurchaseQuantity,
                    TotalAmount: TotalAmount,
                }
                deletingitemupdating.push(pre)
            }
        }
        localStorage.setItem("orderdata",JSON.stringify(deletingitemupdating))
    }

    render() {
        const gettingdatafromlocalstore = localStorage.getItem("orderdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        let display
        if(afterparsemedicinedata !== null){
            display = afterparsemedicinedata.map((data,index) => {
                return(
                    <tr id={"list"+index} key={index} className={classes.tabledatarow}>
                        <td>
                            <p id={"orderid"+index}>
                                {data.OrderId}
                            </p>
                            <input type="number" id={"orderidinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"CustomerName"+index}>
                                {data.CustomerName}
                            </p>
                            <input type="text" id={"CustomerNameinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"CustomerContactNumber"+index}>
                                {data.CustomerContactNumber}
                            </p>
                            <input type="number" id={"CustomerContactNumberinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"Products"+index}>
                                {data.Products}
                            </p>
                            <input type="text" id={"Productsinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"PurchaseQuantity"+index}>
                                {data.PurchaseQuantity}
                            </p>
                            <input type="number" id={"PurchaseQuantityinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"TotalAmount"+index}>
                                {data.TotalAmount}
                            </p>
                            <input type="number" id={"TotalAmountinput"+index} style={{display:"none",margin:"auto"}} />
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
                <h1>Order List</h1>
                <table className={classes.tablemain}>
                    <tbody>
                        <tr className={classes.tablemain}>
                            <th>
                                Order Id
                            </th>
                            <th>
                                Customer Name
                            </th>
                            <th>
                                Customer Contact Number
                            </th>
                            <th>
                                Products
                            </th>
                            <th>
                                Purchase Quantity
                            </th>
                            <th>
                                Total Amount
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {localStorage.getItem("orderdata") === null ? <h1>No Data</h1> : display}
                        {/*{display}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SaleViewOrder