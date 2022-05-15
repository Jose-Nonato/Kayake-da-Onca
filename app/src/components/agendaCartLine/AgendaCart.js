

function AgendaCart(props){
    return(
        <div className="tableItems">
            
            <div className="titleProduct item">
                <span>{props.title}</span>
            </div>

            <div className="price item">
                <span>{props.price}</span>
            </div>

            <button onClick={props.removeFunc} className="btnRemove item">-</button>
        </div>
    )
}

export default AgendaCart