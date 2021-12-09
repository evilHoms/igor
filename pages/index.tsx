import Footer from 'common/Footer';
import NavScroll from 'common/NavScroll';

import Home from 'components/Home';
import Welcome from 'components/Home/Welcome';
import Intro from 'components/Home/Intro';
import Description from 'components/Home/Desctiption';
import Statistics from 'components/Home/Statistics';

import HomeLinks from 'components/Home/constants/home-links';

export default function HomePage() {
  return (
    <>
		<NavScroll links={[HomeLinks.Welcome, HomeLinks.Intro, HomeLinks.Description, HomeLinks.Statistics, HomeLinks.Footer]} />
		<Home>
			<Welcome name={HomeLinks.Welcome} />
			<Intro name={HomeLinks.Intro} />
			<Description name={HomeLinks.Description} />
			<Statistics name={HomeLinks.Statistics} />
		</Home>
		<Footer name={HomeLinks.Footer} />
	</>
  )
}
