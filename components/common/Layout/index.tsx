import { FC } from 'react'
import Head from 'common/Head';
import Header from 'common/Header';
import Page from 'common/Page';

const Layout: FC = ({children}) => (
	<Page>
		<Head />
		<Header />
		{ children }
	</Page>

);

export default Layout;
