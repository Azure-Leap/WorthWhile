import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";

const Side2 = () => {
  return (
    <div>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level }) => {
              if (level === 0)
                return {
                  color: "#000",
                  backgroundColor: "#fff",
                };
            },
          }}
        >
          <MenuItem component={<Link href={"/ab/about"} />}>About Us</MenuItem>

          <MenuItem component={<Link href={"/ab/terms"} />}>
            Terms of Services
          </MenuItem>

          <MenuItem component={<Link href={"/ab/privacy"} />}>
            Privacy Policy
          </MenuItem>

          <MenuItem component={<Link href={"/ab/contact"} />}>Contact</MenuItem>

          {/* <MenuItem component={<Link href={"/ab/faq"} />}>FAQ</MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Side2;
