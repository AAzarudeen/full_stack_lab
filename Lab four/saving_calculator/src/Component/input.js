function Input(probs) {
    return(
        <input  placeholder={probs.placeholder} 
                value={probs.value} 
                type="number" 
                onChange={probs.onChange}/>
    )
}
export default Input