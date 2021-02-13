import {useHistory} from 'react-router-dom'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function UserKoan() {

    const history = useHistory()
    const dispatch = useDispatch()
    const reflection = useSelector(store=>store.reflection)

    const handleClick = (condition) => {
        if(condition){
            dispatch({type: 'REFLECTION'})
        }
        else{
            history.push('/user')
        }
    }
    
    useEffect(()=>{
        dispatch({type: 'REFLECTION'})
    }, [])


    return(
        <div>
            <h1>koans</h1>
            <p>{reflection.koan_text}</p>
            <div>
                <button onClick={()=>handleClick(true)}>Reflect on Something else</button>
            </div>
            <div>
                <button onClick={()=>handleClick(false)}>Back to Portal</button>
            </div>
        </div>

    )
}
