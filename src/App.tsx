import styled from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import {TopBar} from './components/TopBar'
import {Footer} from './components/Footer'
import {LeftSlide} from './components/LeftSlide'
import {Colors} from './helpers/Colors'

import {Home} from './components/Home/Home'
import {Publications} from './components/Publications/Publications'
import {People} from './components/People/People'
import {Entities} from './components/Entities/Entities'
import { Administration } from './components/Administration/Administration';
import {ClientContract} from './components/Contracts/ClientContract'
import {SupplierContract} from './components/Contracts/SupplierContract'
import { EstateContract } from './components/Contracts/EstateContract';
import {Corporate} from './components/Corporate/Corporate'
import {GroupNorms} from './components/Groups/GroupNorms'


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
	  <Router>
		<Main>
			<TopBar />
			<CentralWrapper>
				<Container>
					<LeftSlide />

					<Switch>
						<Content>
							<Route path="/groupNorms">
								<GroupNorms />
							</Route>
							<Route path="/corporate">
								<Corporate />
							</Route>
							<Route path="/clientContracts">
								<ClientContract />
							</Route>
							<Route path="/supplierContracts">
								<SupplierContract />
							</Route>
							<Route path="/estateContracts">
								<EstateContract />
							</Route>
							<Route path="/administration">
								<Administration />
							</Route>
							<Route path="/people">
								<People />
							</Route>
							<Route path="/entities">
								<Entities />
							</Route>
							<Route path="/publications" exact>
								<Publications />
							</Route>
							<Route path="/" exact>
								<Home />
							</Route>
						</Content>
					</Switch>
				</Container>
			</CentralWrapper>
		</Main>
	  </Router>
  );
}

export default App;
