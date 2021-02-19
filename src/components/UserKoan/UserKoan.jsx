import {useHistory} from 'react-router-dom'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MountainAbout from '../Mountains/MountainAbout'


//shows a user a random koan from their library
export default function UserKoan() {

    const history = useHistory()
    const dispatch = useDispatch()
    const reflection = useSelector(store=>store.reflection)

    //gets user new koan from the library or sends the user back ot the
    const handleClick = () => {
            dispatch({type: 'REFLECTION'})
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
                <button className="submit" onClick={()=>handleClick()}>Show Me Another</button>
            </div>
            </div>


        </div>
        <div className="bumper"></div>
        <MountainAbout />
        </>

    )
}
