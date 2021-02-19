import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export default function ZendoEnd() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [saved, setSaved] = useState(true)

    //buttons save koans or navigate back to portal
    const handleClick = (save) => {
        if (save) {
            dispatch({ type: 'SAVE_KOAN', payload: { koan: save } })
            setSaved(false)
        }
        else {
            console.log('leave room')
            history.push('/user')
        }

    }
    //logs that sound plays, and sets sound to null so it only plays once
    const handlePlay = (event) => {
        let sound = event.target;
        sound = null;
        console.log('sound played')
    }

    //allows user to save koan for later and navigate back to the portal
    //two bells sound on component load/end of meditation
    const sessionInfo = useSelector(store => store.zendo)
    return (
        <>
            <audio id="musicplayer" type="audio/mp3" autoPlay onPlay={(event) => handlePlay(event)}>
                <source src="/zendo/end_2_bells.mp3" />
            </audio>

            <div className="header">
                <p>Thank You for sitting with us, save this koan for later or return to the portal</p>
                <div>
                    <p>{sessionInfo.koan.koan_text}</p>
                    {saved ? <button className="submit" onClick={() => handleClick(sessionInfo.koan.id)}>Save</button> : <span class="submit">Saved</span>}
                </div>

                <button className="delete" onClick={() => { handleClick(false) }}>Back to User Portal</button>
            </div>

        </>

    )
}
