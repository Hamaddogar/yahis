import React, { useState } from 'react'

const Test = () => {
    const [state, setstate] = useState({})

    const updatestate = (event) => {
        state[event.target.id] = event.target.value

        setstate({ ...state })
    }


    const getdata = () => {
        localStorage.setItem("yayisdata",JSON.stringify(state))

    }
    return (
        <div>
            UserName <input id="name" onChange={updatestate} />
    fatherName <input id="fathername" onChange={updatestate} />
            <select onChange={updatestate} id="city">
                <option value=""> ---select city ---</option>
                 <option value ="faisalabad">faisalabad</option>
                 <option value ="faisalabad">faisalabad</option>
                 <option value ="lahore">lahore</option>




            </select>



            <button onClick={getdata}>GetData</button>

        </div>
    )


}
export default Test