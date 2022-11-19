import Rect from "react";
import AddTop from "../../components/Advertisement/AddTop";
import Detailspage from "../../components/Detailspage";
import { useRouter } from "next/router";
import InstagramEmbed from "react-instagram-embed";
import Layout from "../../components/layout/layout";

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Layout>
        {/* <div className="">{slug}</div> */}
        <div className="my-36">
          <div className="">
            <AddTop />
          </div>
          <Detailspage />
        </div>
      </Layout>
    </>
  );
}
export default slug;
