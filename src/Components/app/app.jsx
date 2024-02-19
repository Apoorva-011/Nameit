import React from "react";
import './App.css'
import Header from "./../Header/Header";
import SearchBox from "./../SearchBox/SearchBox";
import ResultsContainer from "./../ResultsContainer/ResultsContainer";
import NameCard from "./../NameCard/NameCard";
const name =require('@rstacruz/startup-name-generator')
class App extends React.Component
{ state = {
  headerText:"Name it!",
  headerExpanded :true,
  suggestedNames:[],//initially empty but a string
  };


   handleInputChange =(inputText) =>
   {  //console.log(name(inputText)); //need only 
   //according to what we type
    this.setState
    ({headerExpanded: inputText.length >0?false : true,

    suggestedNames:inputText?name(inputText):[]})
      //console.log("Input text",inputText);
   };


  //cant directly return html
  render()
  { 
    return(    
      <div>        
         <Header
          headerExpanded={this.state.headerExpanded}
          headTitle ={this.state.headerText}/>
          <SearchBox onInputChage={
            this.handleInputChange
          } />
          <ResultsContainer suggestedNames=
             {this.state.suggestedNames}/>
          <NameCard />
        </div>
        );
  }  
}
 //button onClick={()=>(this.state.headerText="Did it work")}>magiicc</button>;
//first component functional
//function App()
//{
  //  return <h1>Functional component</h1>
//}
//<h3> {this.state.headerText} </h3> 
//onClick={()=>
 // <button
   //     {
   //       this.setState({
     //       headerText:"Wohoooo"
       //   });
      //  }}>
      //  Magic happens
       // </button>
export default App;