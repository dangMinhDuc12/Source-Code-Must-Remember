

// exact là thuộc tính nếu chính xác match với path này thì sẽ lọt vào
//props component của Route yêu cầu trả về một component nên ta phải truyền vào props này một anonymous function component và trong anonymous function component này sẽ return về component ta mong muốn chuyển hướng, chứ ta không truyền trực tiếp component vào
//Muốn lấy đối tượng match thông qua anonymous function component thì ta truyền {match} vào tham số của anonymous function đó, còn nếu viết bình thường thì props match có sẵn



import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import createRoutes from './Routes';





function App() {
    const username = useRef('');

    function onButtonClick() {
        console.log(username.current.value);
    }

    return (
        <Router>
            <div className="App">

                <Nav />

                <Switch>
                    {createRoutes()}



                </Switch>


            </div>

            <input ref={username} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </Router>

    );
}

export default App;




