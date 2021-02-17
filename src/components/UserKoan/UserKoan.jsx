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
        <>
        <div>
            <div className="head-container header">
            <h2>Your Saved Koans:</h2>
            <p className="koan-container">{reflection.koan_text}</p>
            <div>
                <button className="submit" onClick={()=>handleClick(true)}>Reflect on Something else</button>
            </div>
            </div>


        </div>
        <div className="bumper"></div>
        <MountainAbout />
        </>

    )
}
