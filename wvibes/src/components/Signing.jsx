import { useLinkClickHandler, useNavigate } from "react-router-dom"
import { uploadName } from "../services/zaWave-api"

export default function Sign() {

    const nav = useNavigate()

    const sign = () => {
        const li= document.createElement('li');//
        const inp = document.querySelector('.new'); //the current input field
        li.textContent = inp.value //setting th eli to the value of the input AT THAT MOMENT
        document.querySelector('ul').appendChild(li);
        inp.value = null
        nav('/sign')
    }
    return(
        <div className = "sign">
            <h2>Dont be Shy Sign Some More</h2>

            <ul>
                <li>
                 Meik Man   
                </li>
            </ul>
            <div className = 'formII'>
            Signature x: <input className = 'new' type = 'text' name /> <br/>
            <button onClick={sign} > Add Signature </button>
            </div>


        </div>
    )

}