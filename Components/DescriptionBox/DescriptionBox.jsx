import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          adipisci error aspernatur? Ea facere ut aspernatur rerum. Libero
          labore impedit nesciunt porro ad totam quis non, hic mollitia
          reprehenderit cumque voluptate accusantium consectetur rerum enim
          quam. Necessitatibus, obcaecati adipisci. Nesciunt illum doloremque
          incidunt cumque tempore!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          sit suscipit tempora dolore tempore eum facilis porro velit illum
          placeat?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
