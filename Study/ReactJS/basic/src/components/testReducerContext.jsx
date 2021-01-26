import React, { useContext } from 'react';
import { TestContext } from '../App';

function TestReducerContext() {
    const testContext = useContext(TestContext);



    return (
        <div>
            <h1> Count State {testContext.count} </h1>
            <h2>Num State {testContext.num}</h2>
            <button onClick={() => testContext.dispatchCount({ type: 'tang' })}>Tang</button>
            <button onClick={() => testContext.dispatchCount({ type: 'giam' })}> Giam</button>
            <button onClick={() => testContext.dispatchNum({ type: 'nhan2' })}> Nhan</button>
            <button onClick={() => testContext.dispatchNum({ type: 'chia2' })}> Chia</button>



        </div>
    )
}

export default TestReducerContext
