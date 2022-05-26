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
                Voce praticante de kayak, canoagem ou interessado em esportes ao ar livre, venha desfrutar da bela paisagem natural , enquanto realiza atividades fisicas, podendo  programar seus trajetos de maneira rapida e pratica
                </p>
            </div>
        </div>
    </div>
    )
}

export default CardHowGo