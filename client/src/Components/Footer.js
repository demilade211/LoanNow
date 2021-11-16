import React from "react";
import footerData from "../data/footerData";
import styles, { container, heading, subLinks, links, link} from "../stylesheets/footer.module.css";

function Footer() {
  return (
    <div className={container}>
      {footerData.map((data, i) => (
        <>
          <div className={styles[`box${i}`]} key={data.id}>
            <div className={heading}>{data.Header}</div>
            <div className={subLinks}>
                      {data.subLinks.map((val, index) => (
                        <ul className={[`link${index}`, links].join(', ')} key={ val.id}>
                  <li className={link}>{val.title}</li>
                </ul>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Footer;
