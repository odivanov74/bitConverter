import OneBit from "./OneBit";  

function Bits(props)
{
    return(
        <div>
            {
                props.bits.map(bit => (
                    <OneBit
                        key = {bit.weight}
                        weight = {bit.weight}
                        status = {bit.status}
                        reverseBit = {props.reverseBit}
                    />
                ))
            }
        </div>
    )
}
export default Bits;