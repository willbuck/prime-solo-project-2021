//need useHistory to go back one page
import {useHistory} from 'react-router-dom'


import {useSelector} from 'react-redux'

export default function ZendoArrive () {

    const sessionInfo = useSelector(store=>store.zendo)

    const history = useHistory()
    const backToSplash = () => {
        console.log('GET OUT')
        history.push('/user')
    }
    return(
        <>
        <p>Waiting for your {sessionInfo.duration / 60000} minute session to begin at {sessionInfo.time}</p>
        <p>We'll see some nice and encouraging things in this view</p>
        <p>We're waiting until the meditation starts</p>
        <button onClick={()=>backToSplash()}>Back to User Portal</button>
        </>
    )
}
