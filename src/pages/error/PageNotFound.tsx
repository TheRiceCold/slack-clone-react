import styles from "@/styles/errors/Errors.module.sass";

import {useNavigate} from "react-router-dom";
import {SiSlack} from "react-icons/si";
import {FC} from "react";

import Link from "@/components/Link";

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.not_found}>
      <SiSlack size={100} color={'whitesmoke'}/>
      {/* <img src={images.page_not_found} style={{ height: "150px" }}/> */}
      <h4>Oops! The page your were looking for was not found</h4>
      <div className={styles.buttons}>
        <Link 
          onClick={() => navigate (-1)}
        >
          Go Back
        </Link>
        <Link onClick={() => navigate("")}>
          Home Page
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
