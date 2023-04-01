import { useReducer} from "react";
import Digitbutton from "./Button";
import "./css/calc.css"
import Operationbutton from "./Obutton";
export const ACTIONS={
    ADD_DIGIT:'add-digit',
    CHOOSE_OPERATION:'choose-operation',
    CLEAR:"clear",
    DELETE_DIGIT:'delete-digit',
    EVALUATE:'evaluate',

}

// payload for getting the values of the variable of states
function reducer(state,{type,payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    currentoperand:payload.digit,
                    overwrite:false,
                }
            }
            if(payload.digit === "0" && state.currentoperand === "0" ) return state
            if(payload.digit === "." && state.currentoperand.includes(".") )return state
            return {
                ...state,
                currentoperand:`${state.currentoperand || ""}${payload.digit}`,
            }
            case ACTIONS.CHOOSE_OPERATION:
                if (state.currentoperand == null  && state.preoperand == null){
                    return state
                }
                if (state.preoperand == null){
                    return {
                        ...state,
                        operation: payload.operation,
                        preoperand : state.currentoperand,
                        currentoperand : null,
                    }
                    // state.currentoperand = state.currentoperand + operation
                }
                if (state.currentoperand == null){
                    return {
                        ...state,
                    operation :payload.operation,
                    }
                }
                return {
                    ...state,
                    preoperand : evaluate(state),
                    operation : payload.operation,
                    currentoperand :null,
                }
        case ACTIONS.CLEAR:
            return {}
        case ACTIONS.EVALUATE:
            if(state.operation==null || state.preoperand == null || state.currentoperand== null){
                return state
            }
            return {
                ...state,
                overwrite:true,
                
                currentoperand:evaluate(state),
                preoperand:null,
                operation:null,
            }        
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    currentoperand:null,
                    overwrite:false
                }
            }
            if (state.currentoperand==null){
                return state
            }
            if(state.currentoperand.length === 1){
                return {
                    ...state,
                    currentoperand:null
                }
            }
            return {
                ...state,
                currentoperand : state.currentoperand.slice(0,-1)
            }
    }
}
const INTEGER_FORMATTER =new Intl.NumberFormat("en-us",{maximumFractionDigits:0,})
function formatOperand(operand){
   if (operand == null) return 
   const [integer,decimal]=operand.split('.')
   if (decimal == null) return INTEGER_FORMATTER.format(integer) 
   return `INTEGER_FORMATTER.format(integer).${decimal}`
}
function evaluate({currentoperand,preoperand,operation}){
    const prev = parseFloat(preoperand)
    const curr =parseFloat(currentoperand)
    if(isNaN(prev) || isNaN(curr)) return ""
    let computation = 0
    switch (operation){
        case "+":
            computation= prev+curr
            break
        case "-":
            computation= prev-curr
            break
        case "*":
            computation= prev*curr
            break
        case "/":
            computation= prev/curr
            break
        
    }
    return computation.toString();
}

function Calulator(){
    const [{ currentoperand,preoperand,operation},dispatch]=useReducer(reducer,{})
    return (
       <>
       <div className="calculator-grid">
        <div className="output">
            <div className="preoperand">
                {formatOperand(preoperand)}{operation}
            </div>
            <div className="currentoperand">
                {formatOperand(currentoperand)}
            </div>
        </div>
        <button className="span-two" onClick={()=> dispatch({type:ACTIONS.CLEAR })}>AC</button>
        <button onClick={()=> dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
        <Operationbutton operation="/" dispatch={dispatch}/>
        
        
       
        <Digitbutton digit="1" dispatch={dispatch}/>
        <Digitbutton digit="2" dispatch={dispatch}/>
        <Digitbutton digit="3" dispatch={dispatch}/>
        <Operationbutton operation="*" dispatch={dispatch}/>
        <Digitbutton digit="4" dispatch={dispatch}/>
        <Digitbutton digit="5" dispatch={dispatch}/>
        <Digitbutton digit="6" dispatch={dispatch}/>
        <Operationbutton operation="+" dispatch={dispatch}/>
        <Digitbutton digit="7" dispatch={dispatch}/>
        <Digitbutton digit="8" dispatch={dispatch}/>
        <Digitbutton digit="9" dispatch={dispatch}/>
        <Operationbutton operation="-" dispatch={dispatch}/>
        <Digitbutton digit="." dispatch={dispatch}/>
        <Digitbutton digit="0" dispatch={dispatch}/>
        <button className="span-two" onClick={() => dispatch({type: ACTIONS.EVALUATE
        })}>=</button>
       </div>
       </> 
    );
}
export default Calulator;