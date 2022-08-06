import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import styled from 'styled-components';
import Summary from './components/Summary';
import SidebarRight from './components/SidebarRight';
// import Highlights from './components/Highlights';


const Body = styled.div`
  display: flex;
`
const SidebarDiv = styled.div`
  flex: 1;
`
const ChartDiv = styled.div`
  flex: 2;
`
const SidebarRightDiv = styled.div`
  flex: 1;
`

function App() {
  return (
    <div>
      <Navbar />
      <Body>
        <SidebarDiv>
          <Sidebar/>
        </SidebarDiv>
        
        <ChartDiv>
          <Summary />
          <Chart/>
        </ChartDiv>

        <SidebarRightDiv>
          <SidebarRight />
          {/* <Highlights /> */}
        </SidebarRightDiv>  
      </Body>
      
    </div>
  );
}

export default App;
