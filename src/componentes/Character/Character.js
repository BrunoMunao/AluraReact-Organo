import './Character.css'

const Character = (props) => {
    let charImage = ''
    if(props.partyMember.image === '')
         charImage = "https://pbs.twimg.com/media/FeG09JKUcAAG2dD.png"
    else
         charImage = props.partyMember.image

    return(
        <div className='card'>
            <div className='card header' style={{backgroundColor: props.cor}}>
                <img src={charImage} alt={props.partyMember.job}/>
            </div>
            <div className='card text'>
                <h4>{props.partyMember.nickname}</h4>
                <h5>{props.partyMember.job}</h5>
            </div>
        </div>
    )
}

export default Character