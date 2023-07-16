import React from "react";
import Head from "next/head";
import GoTop from "../Shared/GoTop";

import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
	const [loader, setLoader] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => setLoader(false), 2000);
	}, []);
	return (
		<>
			<Head>
				<title>Pet's Aahar - The perfect Balance Of Taste & Nutrition</title>
				<meta
					name="description"
					content="We want to create the best possible experience for both you and your dog by providing them with meals that are homemade, delicious, and nutritious. That's why we use only the finest ingredients and make sure each meal is packed with nutrition."
				/>
				<meta
					name="og:title"
					property="og:title"
					content="Pet's Aahar - The perfect Balance Of Taste & Nutrition"
				></meta>
				<meta
					name="instagram:card"
					content="Pet's Aahar - The perfect Balance Of Taste & Nutritione"
				></meta>
				<link
					rel="canonical"
					href="https://www.petsaahar.com/"
				></link>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dnexbv8oe/image/upload/v1689424789/web-_site_logo_size_120_by_32_n6n5th.png"
				/>
			</Head>

			{loader ? "Loading" : children}

			<GoTop scrollStepInPx="100" delayInMs="10.50" />
		</>
	);
};

export default Layout;
