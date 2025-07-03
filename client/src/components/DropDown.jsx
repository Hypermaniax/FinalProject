import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import provinceJson from "../jsonFile/provinceAndCity.json";
export default function DropDown({handleClick}) {
  return (
    <Menu
      menuButton={
        <MenuButton className={`border h-full w-full  p-2 rounded-lg`}>
          Location To go
        </MenuButton>
      }
      transition
    >
      {Object.entries(provinceJson).map(([Province, cities], index) => (
        <SubMenu key={index} label={Province}>
          {cities.map((city, index) => (
            <MenuItem key={index} onClick={() => handleClick(city)}>
              {city}
            </MenuItem>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
}
