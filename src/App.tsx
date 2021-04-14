import styled from 'styled-components';

import {TopBar} from './components/TopBar'
import {Footer} from './components/Footer'
import {LeftSlide} from './components/LeftSlide'
import {Colors} from './helpers/Colors'
import { Publications } from './components/Publications';
import { Workspace } from './components/Workspace';


const Main = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	background-color: ${Colors.Background};
`;

const CentralWrapper = styled.div`
	flex: 1 0 auto;
`;

const Content = styled.main`
	flex-grow: 2;
	margin: 0em 3em 1em 1em;
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
					<Publications />
					<Workspace />
				</Content>
			  </Container>
		  </CentralWrapper>
		  {/* <Footer /> */}
	  </Main>
  );
}

export default App;
