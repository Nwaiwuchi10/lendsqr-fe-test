import React from "react";
import UserDashBoard from "../UserDashBoard/UserDashboard";
import "./UserProfile.style.scss";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineReconciliation } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";

import UserData from "./UserData";

const UserProfile = () => {
  return (
    <UserDashBoard>
      <>
        <div className="container user-profile">
          <div className="user-h">User</div>
          <div className=" disp">
            <div className="card-border-div useInfo-border">
              <div className="content-bort">
                <div className="circle-icon">
                  {" "}
                  <FiUsers className="fi-icon" />
                </div>
                <div className="u-u-users">USERS</div>
                <div className="numbers-bold">2,543</div>
              </div>
            </div>
            <div className="card-border-div">
              <div className="content-bort">
                <div className="circle-icon2">
                  {" "}
                  <HiOutlineUserGroup style={{ color: "#5718FF" }} />
                </div>
                <div className="u-u-users">ACTIVE USERS</div>
                <div className="numbers-bold">2,543</div>
              </div>
            </div>
            <div className="card-border-div">
              <div className="content-bort">
                <div className="circle-icon3">
                  {" "}
                  <AiOutlineReconciliation style={{ color: "#F55F44" }} />
                </div>
                <div className="u-u-users"> USERS WITH LOANS</div>
                <div className="numbers-bold">12,543</div>
              </div>
            </div>
            <div className="card-border-div">
              <div className="content-bort">
                <div className="circle-icon4">
                  {" "}
                  <BsDatabaseFill style={{ color: "#FF3366" }} />
                </div>
                <div className="u-u-users">USERS WITH SAVINGS</div>
                <div className="numbers-bold">102,543</div>
              </div>
            </div>
          </div>
        </div>
        <>
          <div>
            <UserData />
          </div>
        </>
      </>
    </UserDashBoard>
  );
};

export default UserProfile;
