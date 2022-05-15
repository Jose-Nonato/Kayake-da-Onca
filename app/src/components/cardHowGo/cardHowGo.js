function CardHowGo(props){
    return(
        <div className="card__how__go">

        <div className='imgBx'>
            <img src={props.imgCard} alt={props.alternativeText}/>
        </div>
        
        <div className='infoBtn'>   
            <button onClick={props.abrir}>+</button>
        </div>
        <div className='content'>
            <div className='infoText'>
                <h3>{props.title}</h3>
                <p>
                    Donec commodo, lacus ut rutrum aliquam, 
                    nibh elit rutrum risus, finibus venenatis tellus 
                    sapien at quam. Donec rhoncus turpis massa, 
                    quis pellentesque turpis vestibulum in. 
                </p>
            </div>
        </div>
    </div>
    )
}

export default CardHowGo