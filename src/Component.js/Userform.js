import { useRef } from 'react';
function Userform() {
    const Inputname=useRef('');
    const Fruitname=useRef(null);
    function handleonchange(event){
        event.preventDefault();
       console.log(Inputname.current.value);
       alert(Inputname.current.value + Fruitname.current.value);
    }

  return (
    <div style={{textAlign:'center',padding:'20px'}}>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" ref={Inputname}/>
        <br/>
        <select ref={Fruitname}>
            <option value="Grapes">Grapes</option>
            <option value="Lime">Lime</option>
            <option value="Mango">Mango</option>
            <option value="Banana">Banana</option>
        </select>
        <br/>
        <button onClick={handleonchange}>submit</button>
      </form>
    </div>
  )
}

export default Userform
