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

    const handlePlay = (event) =>{
        let sound = event.target;
        sound = null;
        console.log('sound played')
    }


    const sessionInfo = useSelector(store=>store.zendo)
    return(
        <>
        <audio id="musicplayer" type="audio/mp3" autoPlay onPlay={(event)=>handlePlay(event)}>
            <source src="/zendo/end_2_bells.mp3"/>
        </audio>
        <p>Thank You for sitting, here's your koan:</p>
        <div>
        <p>{sessionInfo.koan.koan_text}</p>
        <button className="submit" onClick={()=>handleClick(sessionInfo.koan.id)}>Save</button>
        </div>

        <button className="delete" onClick={()=>{handleClick(false)}}>Back to User Portal</button>
        </>

    )
}
