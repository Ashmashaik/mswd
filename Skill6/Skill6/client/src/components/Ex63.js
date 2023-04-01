import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

function Ex63() {

    const [result,setResult] = useState(null);

    const isDict = dict => {
        return typeof dict === "object" && !Array.isArray(dict);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8086/insert_detail', {
            id: parseInt(data.get("stu_id")),
            name: data.get("stu_name"),
            dept: data.get("dept"),
            age: data.get("age")
        }).then((resposnse)=>{
            console.log(resposnse.data);
        })
    }

    function showOne() {
        axios.get('http://localhost:8086/show_one_detail', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAll() {
        axios.get('http://localhost:8086/show_all_detail', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAlllte5() {
        axios.get('http://localhost:8086/show_all_lte5_detail', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    if(result == null) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    ID: <input type="text" name="stu_id" />
                    <br/>
                    Name: <input type="text" name="stu_name" />
                    <br/>
                    Department <input type="text" name="dept" />
                    <br/>
                    Age <input type="text" name="age" />
                    <br/><br/>
                    <input type="submit" value="Save Student Data" />
                </form>
                <br/>
                <button onClick={()=>showOne()}>Display First Student in Database</button>
                <br/>
                <button onClick={()=>showAll()}>Display All Students</button>
                <br/> 
                <button onClick={()=>showAlllte5()}>Display First 5 Books</button>
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
                                <th> ID </th> 
                                <th> Name </th> 
                                <th> Department </th> 
                                <th> Age </th>
                            </tr>
                            <tr>
                                <td> {result.id} </td>
                                <td> {result.name} </td>
                                <td> {result.dept} </td>
                                <td> {result.age} </td>
                            </tr>
                        </table>
                    </div>
                );
            
        }
        else {
            return (
                <div>
                    <table border="1">
                        <tr>
                            <th> ID </th> 
                            <th> Name </th> 
                            <th> Department </th> 
                            <th> Age </th>
                        </tr>
                        {result.map((obj)=>{
                            return(
                                <tr>
                                    <td> {obj.id} </td>
                                    <td> {obj.name} </td>
                                    <td> {obj.dept} </td>
                                    <td> {obj.age} </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            );
        }
    }
}

export default Ex63;
