import React, { useState, useEffect } from "react";
import UserDashBoard from "../UserDashBoard/UserDashboard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetails.style.scss";
import goBack from "./imgs/Vectorback.png";
import fullStar from "./imgs/Vectorfullstart.png";
import emptyStar from "./imgs/Vectoremptystar.png";
import avatar from "./imgs/avatar.png";
const UserDetailScreen = () => {
  const { id } = useParams();
  const [UserData, setUserData] = useState<any>({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `  https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id} `
      );
      console.log(data);
      setUserData(data);
    };

    fetchPosts();
  }, []);
  return (
    <UserDashBoard>
      <div className="container userDetails">
        <Link to="/dashboard" className="mb-5 mt-4 user-goback">
          <img src={goBack} alt="go back" /> Back to Users
        </Link>

        <header className="user-header">
          <p className="user-detailsText">User Details</p>
          <div className="user-state">
            <button className="user-blacklist">Blacklist User</button>
            <button className="user-activate">Activate User</button>
          </div>
        </header>
        <div className="user-details">
          <div className="details-topContainer">
            <div className="user-profile">
              <img src={avatar} alt="avatar" />
              <div className="profile-username">
                <h1>
                  {UserData?.profile?.firstName} {UserData?.profile?.lastName}
                </h1>
                <p>{UserData?.accountNumber}</p>
              </div>
            </div>

            <div className="user-tier">
              <p>user's tier</p>
              <span>
                <img src={fullStar} alt="full star" />
                <img src={fullStar} alt="full star" />
                <img src={emptyStar} alt="empty star" />
              </span>
            </div>
            <div className="user-balance">
              <h2>₦{UserData?.accountBalance}</h2>
              <p>{UserData?.profile?.bvn}</p>
            </div>
          </div>
          <div className="user-nav">
            <li>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loan</li>
            <li>Savings</li>
            <li>App and System</li>
          </div>
        </div>

        <div className=" card useInfo-border">
          <div className="card-body">
            <div className="table-responsive">
              <div className="user-Info">
                <p className="mb-4">Personal Information</p>
                <div className="userInfo">
                  <div>
                    <p>FULL NAME</p>
                    <p>
                      {UserData?.profile?.firstName}{" "}
                      {UserData?.profile?.lastName}
                    </p>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <p>{UserData?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <p>{UserData?.email}</p>
                  </div>
                  <div>
                    <p>BVN</p>
                    <p>{UserData?.profile?.bvn}</p>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <p>{UserData?.profile?.gender}</p>
                  </div>
                  <div>
                    <p>TYPE OF RESIDENCE</p>
                    <p>{UserData?.profile?.address}</p>
                  </div>
                  <div>
                    <p>MARITAL STATUS</p>
                    <p>
                      {UserData?.profile?.maritalStatus
                        ? UserData?.profile?.maritalStatus
                        : "Single"}
                    </p>
                  </div>
                  <div>
                    <p>CHILDREN</p>
                    <p>
                      {UserData?.profile?.children ? (
                        UserData?.profile?.maritalStatus
                      ) : (
                        <div>NONE</div>
                      )}
                    </p>
                  </div>
                </div>
                <hr />
                <p className="mb-4">Education and Employment</p>
                <div className="userInfo">
                  <div>
                    <p>LEVEL OF EDUCATION</p>
                    <p>{UserData?.education?.level}</p>
                  </div>
                  <div>
                    <p>EMPLOYMENT STATUS</p>
                    <p>{UserData?.education?.employmentStatus}</p>
                  </div>
                  <div>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <p>{UserData?.education?.sector}</p>
                  </div>
                  <div>
                    <p>DURATION OF EMPLOYMENT</p>
                    <p>{UserData?.education?.duration}</p>
                  </div>
                  <div>
                    <p>OFFICE EMAIL</p>
                    <p>{UserData?.education?.officeEmail}</p>
                  </div>
                  <div>
                    <p>MONTHLY INCOME</p>

                    <p>
                      ₦{UserData?.education?.monthlyIncome[0]}
                      {" - "}₦{UserData?.education?.monthlyIncome[0]}
                    </p>
                  </div>
                  <div>
                    <p>LOAN REPAYMENT</p>
                    <p>₦{UserData?.education?.loanRepayment}</p>
                  </div>
                </div>

                <hr />
                <p className="mb-4">Socials</p>
                <div className="userInfo">
                  <div>
                    <p>TWITTER</p>
                    <p>{UserData?.socials?.twitter}</p>
                  </div>
                  <div>
                    <p>FACEBOOK</p>
                    <p>{UserData?.socials?.facebook}</p>
                  </div>
                  <div>
                    <p>INSTAGRAM</p>
                    <p>{UserData?.socials?.instagram}</p>
                  </div>
                </div>
                <hr />
                <p className="mb-4">Gurator</p>
                <div className="userInfo">
                  <div>
                    <p>FULL NAME</p>
                    <p>
                      {UserData?.guarantor?.firstName}{" "}
                      {UserData?.guarantor?.lastName}
                    </p>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <p>{UserData?.guarantor?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>EMAIL</p>
                    <p>
                      {UserData?.guarantor?.email
                        ? UserData?.guarantor?.email
                        : null}
                    </p>
                  </div>
                  <div>
                    <p>RELATIONSHIP</p>
                    <p>
                      {UserData?.guarantor?.relationship
                        ? UserData?.guarantor?.relationship
                        : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashBoard>
  );
};

export default UserDetailScreen;
