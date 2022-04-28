import React from 'react';
import styled from 'styled-components'
import Header from './components/Hedaer'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Result from './components/Result.jsx'
import Footer from './components/Footer.jsx'

const AppStyle = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 100%;
  gap: 2rem 0;
`

function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
     <AppStyle>
        <Header variants={variants}/>
        <SearchBar />
        <NavBar variants={variants}/>
        <Result variants={variants}/>
      </AppStyle>
      <Footer />
    </>
  );
}
 
export default App;
