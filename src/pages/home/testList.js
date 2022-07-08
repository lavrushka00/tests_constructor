import React from "react";
import TestItem from "./testItem";



const TestList = ({tests}) => {
    console.log(tests)
  return (
    <div className="test_list">
      {tests.map((item) => 
        <TestItem item = {item} key = {item._id}/>
      )}
    </div>
  );
};

export default TestList;
