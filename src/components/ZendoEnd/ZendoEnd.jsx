import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function ZendoEnd () {

    const history = useHistory()

    const handleClick = () =>{
        console.log('leave room')
        //update DB that user has left?
        history.push('/user')
    }


    const sessionInfo = useSelector(store=>store.zendo)
    return(
        <>
        <p>Thank You for sitting, here's your koan:</p>
        <p>{sessionInfo.koan.koan_text}</p>
        <button onClick={()=>{handleClick()}}>Back to User Portal</button>
        </>

    )
}
