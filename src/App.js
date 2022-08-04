import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  align-items: center;
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
          <Chart/>
        </ChartDiv>

        <SidebarRightDiv>

        </SidebarRightDiv>  
      </Body>
      
    </div>
  );
}

export default App;
