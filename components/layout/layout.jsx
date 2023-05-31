import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Head from "next/head";

const Layout = ({
  hideHeader = false,
  hideFooter = false,
  children,
  title = "News",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!hideHeader && (
        <nav className="fixed top-0 left-0 right-0 z-30">
          <Header />
        </nav>
      )}
      <main>{children}</main>

      {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
