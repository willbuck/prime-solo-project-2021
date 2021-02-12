import {useHistory} from 'react-router-dom'

export default function UserKoan() {

    const history = useHistory()

    const handleClick = () =>{
        console.log('leave room')
        //update DB that user has left?
        dispatch({type: 'UPDATE_EVENT', payload: {id: sessionInfo.id, left: true}})
        history.push('/user')
    }


    return(
        <p>placeholder</p>
    )
}
