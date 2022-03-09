import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Boxes from "./components/pages/Boxes";
import Products from "./components/pages/Products";
import BoxList from "./components/BoxList";
import BoxPage from "./components/BoxPage";
import configureStore from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"boxes"} element={<Boxes/>}>
                            <Route index element={<BoxList/>}/>
                            <Route path={":id"} element={<BoxPage/>}/>
                        </Route>
                        <Route path={"products"} element={<Products/>}>
                            <Route index element={<BoxList/>}/>
                            <Route path={":id"} element={<BoxPage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

