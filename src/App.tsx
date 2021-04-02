import styled from 'styled-components';
import {TopBar} from './components/TopBar'
import {Footer} from './components/Footer'
import {LeftSlide} from './components/LeftSlide'


const Main = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	background-color: #f5f7f9;
`;

const CentralWrapper = styled.div`
	flex: 1 0 auto;
`;

const Content = styled.main`
	flex-grow: 3;
`;

const Container = styled.div`
	padding: 1.5em 2em;
	display: flex;
`;

function App() {
  return (
	  <Main>
		  <TopBar />
		  <CentralWrapper>
			  <Container>
				<LeftSlide />
				<Content>
					<h1>Content</h1>		  
				</Content>
			  </Container>
		  </CentralWrapper>
		  {/* <Footer /> */}
	  </Main>
  );
}

export default App;
