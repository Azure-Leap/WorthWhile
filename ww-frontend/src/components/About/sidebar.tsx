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
          <Link href={"/ab/about"}>
            <MenuItem> About Us </MenuItem>
          </Link>
          <Link href="/ab/terms">
            <MenuItem> Terms of Services </MenuItem>
          </Link>

          <Link href="/ab/privacy">
            <MenuItem> Provicy Policy </MenuItem>
          </Link>

          <Link href="/ab/contact">
            <MenuItem> Contact </MenuItem>
          </Link>

          <Link href="/ab/faq">
            <MenuItem> FAQ </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Side2;
