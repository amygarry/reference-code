import StateComponenet from '../components/StateComonent'
import EffectComponent from '../components/EffectComponent'
import RefComponent from '../components/RefComponenet'
import ContextComponent from '../components/ContextComponent'
import Interact from '../components/Interact'

function Reference (){
    return(
        <div className="col-container">
            <h1>Reference</h1>
            <StateComponenet/>
            <EffectComponent/>
            <RefComponent/>
            <ContextComponent/>
            <Interact/>
        </div>
    )
}

export default Reference