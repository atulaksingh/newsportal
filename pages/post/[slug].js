import Rect from "react";
import AddTop from "../../components/Advertisement/AddTop";
import Detailspage from "../../components/Detailspage";
import { useRouter } from "next/router";
import InstagramEmbed from "react-instagram-embed";

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="">{slug}</div>
      <div>
        <div className="">
          <AddTop />
        </div>
        <Detailspage />
      </div>
    </>
  );
}
export default slug;
