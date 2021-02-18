//need useHistory to go back one page
import {useHistory} from 'react-router-dom'

import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function ZendoArrive () {

    const sessionInfo = useSelector(store=>store.zendo)

    const dispatch = useDispatch()
    const history = useHistory()

    const backToSplash = () => {
        console.log('GET OUT')
        dispatch({type: 'UPDATE_EVENT', payload: {id: sessionInfo.id, left: true}})
        history.push('/user')
    }

    

    useEffect(()=>{
        dispatch({type: 'UPDATE_EVENT', payload: {id: sessionInfo.id}})
    })

    return(
        <>
        <div className="header">
        <h3>Waiting for our {sessionInfo.duration / 60000} minute meditation to start at {sessionInfo.time},</h3>
        <p>Please find your seat.</p>
        <button className="delete" onClick={()=>backToSplash()}>Back to User Portal</button>
        </div>
        </>
    )
}
