import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

function Ex61() {

    const [result,setResult] = useState(null);

    const isDict = dict => {
        return typeof dict === "object" && !Array.isArray(dict);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8086/insert_book', {
            book_id: parseInt(data.get("book_id")),
            book_name: data.get("book_name"),
            book_price: data.get("book_price"),
            book_quantity: data.get("book_quantity"),
            book_address: data.get("book_address")
        }).then((resposnse)=>{
            console.log(resposnse.data);
        })
    }

    function showOne() {
        axios.get('http://localhost:8086/show_one_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAll() {
        axios.get('http://localhost:8086/show_all_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAlllte5() {
        axios.get('http://localhost:8086/show_all_lte5_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAllgte2() {
        axios.get('http://localhost:8086/show_all_gte2_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAllgt3() {
        axios.get('http://localhost:8086/show_all_gt3_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAlllte2() {
        axios.get('http://localhost:8086/show_all_lte2_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAlllt5() {
        axios.get('http://localhost:8086/show_all_lt5_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAllgt3orbookpriceet10() {
        axios.get('http://localhost:8086/show_all_gt3_or_bookprice_equalto10_book', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function updateid7() {
        axios.patch('http://localhost:8086/show_all_update', {params:{

        }}).then((response)=>{
            console.log(response.data)
            // setResult(response.data)
        })
    }

    if(result == null) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    Book ID: <input type="text" name="book_id" />
                    <br/>
                    Book Name: <input type="text" name="book_name" />
                    <br/>
                    Price <input type="text" name="book_price" />
                    <br/>
                    Quantity <input type="text" name="book_quantity" />
                    <br/>
                    Address <input type="text" name="book_address" />
                    <br/><br/>
                    <input type="submit" value="Save Book Data" />
                </form>
                <br/>
                <button onClick={()=>showOne()}>Display First Book in Database</button>
                <br/>
                <button onClick={()=>showAll()}>Display All Books</button>
                <br/> 
                <button onClick={()=>showAlllte5()}>Display First 5 Books</button>
                <br/> 
                <button onClick={()=>showAllgte2()}>Display All books where id greater than or equal to 2 Books</button>
                <br/> 
                <button onClick={()=>showAllgt3()}>Display All books where id greater than 3 Books</button>
                <br/> 
                <button onClick={()=>showAlllte2()}>Display All books where id less than or equal to 2 Books</button>
                <br/>
                <button onClick={()=>showAlllt5()}>Display All books where id less than 5 Books</button>
                <br/> 
                <button onClick={()=>showAllgt3orbookpriceet10()}>Display All books where id greater than 3 or book price is equal to 10 Books</button>
                <br/>
                <button onClick={()=>updateid7()}>Update the book price to 100 where id is equal to 7 </button>
                <br/> 
            </div>
        );
    }
    else {
            if(isDict(result)) {
                return (
                    <div>
                        <table border="1">
                            <tr>
                                <th> Book ID </th> 
                                <th> Book Name </th>
                                <th> Book Quantity </th>  
                                <th> Book Price </th> 
                                <th> Book Address </th>
                            </tr>
                            <tr>
                                <td> {result.book_id} </td>
                                <td> {result.book_name} </td>
                                <td> {result.book_quantity} </td>
                                <td> {result.book_price} </td>
                                <td> {result.book_address} </td>
                            </tr>
                        </table>
                    </div>
                );
            
        }
        else {
            console.log("java");
            return (
                <div>
                    <table border="1">
                        <tr>
                            <th> Book ID </th> 
                            <th> Book Name </th> 
                            <th> Book Quantity </th> 
                            <th> Book Price </th>
                            <th> Book Address </th>
                        </tr>
                        {result.map((obj)=>{
                            return(
                                <tr>
                                    <td> {obj.book_id} </td>
                                    <td> {obj.book_name} </td>
                                    <td> {obj.book_quantity} </td>
                                    <td> {obj.book_price} </td>
                                    <td> {obj.book_address} </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            );
        }
    }
}

export default Ex61;
