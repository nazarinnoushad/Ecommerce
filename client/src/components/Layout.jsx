import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster} from 'sonner';

const Layout = ({ title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} /> 
      </Helmet>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position = "top-right"richColors/>
    </div>
  );
};

export default Layout;