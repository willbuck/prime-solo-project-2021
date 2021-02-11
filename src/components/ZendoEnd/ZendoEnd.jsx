import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function ZendoEnd () {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = (save) =>{
        if(save){
            dispatch({type: 'SAVE_KOAN', payload: {koan: save}})
        }
        else{
        console.log('leave room')
        history.push('/user')
        }

    }


    const sessionInfo = useSelector(store=>store.zendo)
    return(
        <>
        <p>Thank You for sitting, here's your koan:</p>
        <div>
        <p>{sessionInfo.koan.koan_text}</p>
        <button onClick={()=>handleClick(sessionInfo.koan.id)}>Save</button>
        </div>

        <button onClick={()=>{handleClick(false)}}>Back to User Portal</button>
        </>

    )
}
