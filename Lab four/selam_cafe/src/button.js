function Button(probs) {
    return(
        <input id={probs.id} type='button' value={probs.value} onClick={probs.onClick}/>
    )
}

export default Button;