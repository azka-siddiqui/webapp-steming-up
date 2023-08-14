import { motion } from "framer-motion";
import Head from "next/head";

import transition from "./anim/Transitions"

import Footer from "./Footer.jsx";

const Layout = ({ children, reverseAnim, noAnim, name }) => {
    const pageTitle = `MYAC${name ? ` | ${name}` : ""}`;
    const pageDescription = "OurCity works to voice the opinions of the 145,000 youth in Mississauga and better engage youth in their community.";

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="%PUBLIC_URL%/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="3427" />
                <meta property="og:image:height" content="1227" />
            </Head>

            {noAnim ? (
                <div className="w-full flex-grow bg-white">
                    {children}
                </div>
            ) : (
                <motion.div
                    className="w-full flex-grow bg-white"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ ...transition, duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}

            <Footer />
        </div>
    )
}

export default Layout;