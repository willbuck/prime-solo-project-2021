import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function ZendoEnd () {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () =>{
        console.log('leave room')
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
