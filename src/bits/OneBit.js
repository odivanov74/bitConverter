function OneBit(props)
{
    return(
        <button onClick={() => props.reverseBit(props.weight, !props.status)}>{props.status ? "1" : "0" }</button>
    )
}

export default OneBit;