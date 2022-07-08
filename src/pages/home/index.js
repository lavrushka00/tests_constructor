import React from "react"

import './home.scss'
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setTests, } from "../../redux/slices/testsSlice";

import { fetchTests } from "../../redux/slices/testsSlice";

import TestList from "./testList"
const Home = () => {
  

    const dispatch = useDispatch()
    
    const userID = useSelector((state) => state.auth.data.userData_._id)
    const tests = useSelector((state) => state.tests.data)
    
    React.useEffect(() => {
        dispatch(fetchTests(userID))
    }, [])

   
    return (
        <div className="home">
            <div className="container">
                <div className="home_header">
                    <span >Мои тесты</span>
                    <div className="create_test" >создать тест</div>
                </div>

                <div className="main">
                    <div className="test_options">
                        <span>Название</span>
                        <span>Дата создания</span>
                        <span>Действия</span>
                        
                    </div>
            
                    {console.log(tests)}
                  {/* {tests.length  ? <TestList tests = {tests}/> : <span>нет тестов</span>}   */}
                
                </div>
            </div>
        </div>
    )
}

export default Home