import  React, {useState } from "react";
import '../styles/App.css';

const App = function(){
    const [name1,setName1] = useState("");
    const [name2,setName2] = useState("");
    const [result,setResult] = useState("");
    const relation = function(){
        if(name1.length>3 && name2.length>3){
            let obj = {};
            let count = 0;
            let array = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]
            for (let i=0;i<name1.length;i++){
                if(obj[name1[i]]){
                    obj[name1[i]]++;
                }
                else{
                    obj[name1[i]]=1
                }
            }
            for (let i=0;i<name2.length;i++){
                if(obj[name2[i]] && obj[name2[i]]>0){
                    count++;
                    obj[name2[i]]--;
                }
            }
            let len = ((name1.length+name2.length)-(count*2))%6;
            setResult(array[len])
        }
    }
    const clear = function(){
        setName1("");
        setName2("");
    }
    return <div id="main">
        <input type="text" value={name1} data-testid="input1" onChange={e=>setName1(e.target.value)}/>
        <input type="text" value={name2} data-testid="input2" onChange={e=>setName2(e.target.value)}/>
        <button onClick={relation} data-testid="calculate_relationship">Find Relation</button>
        <button onClick={clear} data-testid="clear">Clear</button>
        <h1 data-testid="answer" >{result}</h1>
    </div>
}


export default App;
