import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./UserDashBoard.style.scss";
import union from "../../assets/images/Union.png";
import lends from "../../assets/images/lendsqr.png";
import { BiSearch } from "react-icons/bi";
import { FiBell, FiUserCheck, FiUserPlus, FiUsers } from "react-icons/fi";
import {
  MdOutlineArrowDropDown,
  MdAdminPanelSettings,
  MdMiscellaneousServices,
  MdOutlineCleanHands,
  MdOutlineSupervisorAccount,
  MdHouseboat,
  MdOutlineRoomPreferences,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import face from "../../assets/images/image 4 (1).png";
import {
  AiOutlineMoneyCollect,
  AiOutlineRadarChart,
  AiOutlineTranslation,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiCalendarTodoLine, RiUserSettingsLine } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { SlOrganization } from "react-icons/sl";
const drawerWidth = 240;

interface Props {
  children: any;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export const NavLinks = () => {
  return (
    <div className="container nav-flex-div">
      <div>
        <input placeholder="Search for anything " className="input-search" />
        <button className="search-btn">
          <BiSearch className="b-icon" style={{ color: "white" }} />
        </button>
      </div>
      <div className="person">
        <div
          style={{
            textDecoration: "underline",
            textDecorationColor: "#213F7D",
          }}
        >
          {" "}
          Docs
        </div>
        <FiBell /> {/* <div className="img-face-div"> */}
        <img src={face} alt="geyt" className="img-face" /> {/* </div> */}
        Adeedji
        <MdOutlineArrowDropDown />{" "}
      </div>
    </div>
  );
};
export const Toolbars = () => {
  return (
    <div className="imgs-disp-div">
      <div className="img-cont">
        {" "}
        <img src={union} alt="heu" className="img-union" />
      </div>
      <div className="img-cont2">
        <img src={lends} alt="lend" className="imgs-lend" />
      </div>
      <Toolbar />
    </div>
  );
};

export default function UserDashBoard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbars />
      <Divider />
      <List style={{ color: "#213F7D" }}>
        <ul className="ul-list">
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <SlOrganization
              style={{
                fontSize: "20px",
              }}
            />
            <div
              style={{
                marginLeft: "5px",
              }}
            >
              {" "}
              Switch Organization
            </div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <BsHouseAdd
              style={{
                fontSize: "20px",
              }}
            />
            <div
              style={{
                marginLeft: "5px",
              }}
            >
              Dashboard
            </div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                marginLeft: "5px",
              }}
            >
              {" "}
              CUSTOMERS
            </div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FiUsers
              style={{
                fontSize: "20px",
              }}
            />
            <div> Users</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <RiUserSettingsLine
              style={{
                fontSize: "20px",
              }}
            />
            <div
              style={{
                marginLeft: "5px",
              }}
            >
              {" "}
              Guarantors
            </div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineCleanHands
              style={{
                fontSize: "20px",
              }}
            />
            <div> Loans</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FaRegHandshake
              style={{
                fontSize: "20px",
              }}
            />
            <div> Decision Models</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <AiOutlineMoneyCollect
              style={{
                fontSize: "20px",
              }}
            />
            <div> Savings</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineProductionQuantityLimits
              style={{
                fontSize: "20px",
              }}
            />
            <div> Loan Requests</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FiUserCheck
              style={{
                fontSize: "20px",
              }}
            />
            <div> Whitelist</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FiUserPlus
              style={{
                fontSize: "20px",
              }}
            />
            <div> Karma</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>BUSINESSES</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <AiOutlineRadarChart
              style={{
                fontSize: "20px",
              }}
            />
            <div> Organization</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineCleanHands
              style={{
                fontSize: "20px",
              }}
            />
            <div> Loan Products</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineProductionQuantityLimits
              style={{
                fontSize: "20px",
              }}
            />
            <div> Loan Products</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <AiOutlineUserSwitch
              style={{
                fontSize: "20px",
              }}
            />
            <div>Saving Products</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <VscFeedback
              style={{
                fontSize: "20px",
              }}
            />
            <div> Fees and Charges</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <AiOutlineTranslation
              style={{
                fontSize: "20px",
              }}
            />
            <div> Transactions</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdMiscellaneousServices
              style={{
                fontSize: "20px",
              }}
            />
            <div> Services</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineSupervisorAccount
              style={{
                fontSize: "20px",
              }}
            />
            <div> Service Account</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdHouseboat
              style={{
                fontSize: "20px",
              }}
            />
            <div> Settlements</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <HiOutlineDocumentReport
              style={{
                fontSize: "20px",
              }}
            />
            <div> Reports</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>SETTINGS</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <MdOutlineRoomPreferences
              style={{
                fontSize: "20px",
              }}
            />
            <div>Preferences</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <RiCalendarTodoLine
              style={{
                fontSize: "20px",
              }}
            />
            <div> Fees and Pricing</div>
          </li>
          <li
            style={{
              fontSize: "medium",
              alignItems: "center",
              display: "flex",
            }}
          >
            <IoMdHelpBuoy
              style={{
                fontSize: "20px",
              }}
            />
            <div> Audit Logs</div>
          </li>
        </ul>
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#FFFFFF",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#171744" }} />
          </IconButton>
          <div>
            <NavLinks />
          </div>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}
