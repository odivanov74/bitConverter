function Hex(props)
{
    let inDec = props.inDec;    

    return(
        <div>{inDec.toString(16)}</div>
    )
}

export default Hex;