import React from "react";
import Chart from "react-google-charts";

const OrgChart =() => {

    const selectHandler = (e) => {
        console.log('selected ', e);
    }

 const data = [
            [{'v':'Mike Freeman', 'f':'Mike  zika <div><img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="50" height="50"></div><div style="color:red; font-style:italic">President</div>'},
                '', ''],
        [{'v':'Jim Morison', 'f':'Jim Morison <div><img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="50" height="50"></div><div style="color:red; font-style:italic">Vice President</div>'},
         'Mike Freeman', ''],
        [{'v':'Alice Hans', 'f':'Alice Hans <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWf-2tx4UrR6xz8lyfuHkXAAkf-L4xGv8QVg&usqp=CAU" alt="Girl in a jacket" width="50" height="50"></div><div style="color:red; font-style:italic">President</div>'}, 'Mike Freeman', ''],
        ['Bob', 'Jim Morison', 'Bob Sponge'],
        ['Carol', 'Bob', '']
    ]
      
      
     const options = {
        allowHtml: true,
      };
      
   

    return(
        <>
        
        <h1>Org chart</h1>
        <Chart
        selectHandler={(e)=>selectHandler(e)}
      chartType="OrgChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
       </>
        
    )
}

export default OrgChart;