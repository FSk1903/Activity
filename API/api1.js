function func(){
fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
    .then((data)=>{
        return data.json();
    })
    
    .then((objectData)=>{
        console.log(objectData);
        
        let tableData="";
            document.getElementById('apitable').innerHTML=
            `<tr>
            <th scope="Name">name</th>
            <th scope="Office">office</th>
            <th scope="Position">position</th>
            <th scope="Salary">salary</th>
            </tr>`
        objectData.data.map((values)=>{

            tableData+=`<tr>
                        <td>${values.name}</td>
                        <td>${values.office}</td>
                        <td>${values.position}</td>
                        <td>${values.salary}</td>
                        </tr>`;
        });
        document.getElementById("tablebody").innerHTML=tableData;
    }).catch((err)=>{
        console.log(err);
    })
}
