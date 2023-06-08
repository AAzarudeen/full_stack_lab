import React from 'react'
import Button from './button'
import Stock from './Stock'
function App() {
  const[total,setTotal] = React.useState(0)
  const[cookies,setCookies] = React.useState(10)
  const[muffin,setMuffin] = React.useState(10)
  const buy = (evt) =>{
    if (evt.target.id == "muffin") {
      if(muffin > 0){
        setTotal(total+1)
        setMuffin(muffin-1)
        return
      }
      alert("No stock")
    }
    if (evt.target.id == "chip") {
      if(cookies > 0){
        setTotal(total+1)
        setCookies(cookies-1)
        return
      }
      alert("No stock")
    }
  }

  return (
    <div>
      <h1>Salem Cafe</h1>
      <h2>Total Items sold : {total}</h2>
      <Button id="muffin" value="Buy Blueberry Muffin" onClick={buy}/>
      <Button id="chip" value="Buy Chocolate Chip Cookies" onClick={buy}/>
      <Stock value={muffin+" Muffins left"}/>
      <Stock value={cookies+ " Cookies left"}/>
    </div>
  );
}

export default App;