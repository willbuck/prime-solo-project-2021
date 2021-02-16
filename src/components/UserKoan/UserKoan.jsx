import {useHistory} from 'react-router-dom'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MountainAbout from '../Mountains/MountainAbout'

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
            
            <MountainAbout />
        </div>

    )
}
