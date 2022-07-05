import ContextMenuWrapperTrigger from "./components/ContextMenuWrapperTrigger";
import ContextMenu from "./components/ContextMenu";
import MenuItem from "./components/MenuItem";
import { FaRegCopy, FaList, FaEllipsisV } from "react-icons/fa";
import { Fragment } from "react";

function App() {
  // for custom theme you need to pass three values with given key
  const GreyTheme = {
    color: "white",
    background: "grey",
    hover: "#A9A9A9",
  };

  return (
    <Fragment>
      {/* triggerId - menu1 which has light theme */}
      <ContextMenuWrapperTrigger triggerId="menu1">
        Right click on me light..!
      </ContextMenuWrapperTrigger>

      {/* triggerId - menu2 which has dark theme */}
      <ContextMenuWrapperTrigger triggerId="menu3">
        Right click on me Custom..!
      </ContextMenuWrapperTrigger>

      {/* triggerId - menu3 which has custom theme grey theme as define above*/}
      <ContextMenuWrapperTrigger triggerId="menu2">
        Right click on me dark..!
      </ContextMenuWrapperTrigger>

      {/* Context Menu for dataTrigger - menu1 */}
      <ContextMenu dataTrigger="menu1" theme="light">
        <MenuItem>
          <FaRegCopy className="copy" />
          <span>Copy</span>
        </MenuItem>
        <MenuItem>
          <FaEllipsisV className="openwith" />
          <span>Open with</span>
        </MenuItem>
      </ContextMenu>

      {/* Context Menu for dataTrigger - menu2 */}
      <ContextMenu dataTrigger="menu2" theme="dark">
        <MenuItem>
          <FaRegCopy className="copy" />
          <span>Copy</span>
        </MenuItem>
        <MenuItem>
          <FaEllipsisV className="openwith" />
          <span>Open with</span>
        </MenuItem>
        <MenuItem>
          <FaList className="watchlist" />
          <span>Add to watchlist</span>
        </MenuItem>
      </ContextMenu>

      {/* Context Menu for dataTrigger - menu3 */}
      <ContextMenu dataTrigger="menu3" theme={GreyTheme}>
        <MenuItem>
          <FaRegCopy className="copy" />
          <span>Copy</span>
        </MenuItem>
        <MenuItem>
          <FaEllipsisV className="openwith" />
          <span>Open with</span>
        </MenuItem>
      </ContextMenu>
    </Fragment>
  );
}

export default App;
