import React from "react";
import vr from "./img/desktop/image-interactive.jpg";
import img1 from "./img/desktop/image-deep-earth.jpg";
import img2 from "./img/desktop/image-night-arcade.jpg";
import img3 from "./img/desktop/image-soccer-team.jpg";
import img4 from "./img/desktop/image-grid.jpg";
import img5 from "./img/desktop/image-from-above.jpg";
import img6 from "./img/desktop/image-pocket-borealis.jpg";
import img7 from "./img/desktop/image-curiosity.jpg";
import img8 from "./img/desktop/image-fisheye.jpg";
import img_mobile_1 from "./img/mobile/image-deep-earth.jpg";
import img_mobile_2 from "./img/mobile/image-night-arcade.jpg";
import img_mobile_3 from "./img/mobile/image-soccer-team.jpg";
import img_mobile_4 from "./img/mobile/image-grid.jpg";
import img_mobile_5 from "./img/mobile/image-from-above.jpg";
import img_mobile_6 from "./img/mobile/image-pocket-borealis.jpg";
import img_mobile_7 from "./img/mobile/image-curiosity.jpg";
import img_mobile_8 from "./img/mobile/image-fisheye.jpg";

function Main() {
  return (
    <main>
      <div className="card">
        <div className="card-img">
          <img src={vr} />
        </div>
        <div className="card-textbox">
          <div className="header-tag"> the leader in interactive vr</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            nobis voluptas, sed itaque aspernatur provident atque nesciunt
            ratione officia accusamus corrupti rerum quisquam assumenda
            voluptate mollitia, magni ea quaerat eligendi!
          </p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="header-tag no-padding">our creation</div>
          <button className="dashbaord-header-btn">
            <p>view all</p>
          </button>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-item">
            <div data-content="Deep Earth" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_1} alt="avatar" />
              <img className="img-desktop" src={img1} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="NIght Arcade" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_2} alt="avatar" />
              <img className="img-desktop" src={img2} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="soccer team" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_3} alt="avatar" />
              <img className="img-desktop" src={img3} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="the grid" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_4} alt="avatar" />
              <img className="img-desktop" src={img4} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="from up above vr" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_5} alt="avatar" />
              <img className="img-desktop" src={img5} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="pocket borealis" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_6} alt="avatar" />
              <img className="img-desktop" src={img6} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="the curiosity" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_7} alt="avatar" />
              <img className="img-desktop" src={img7} alt="avatar" />
            </div>
          </div>
          <div className="dashboard-item">
            <div data-content="make it fisheye" className="dashboard-item-img">
              <img className="img-mobile" src={img_mobile_8} alt="avatar" />
              <img className="img-desktop" src={img8} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
