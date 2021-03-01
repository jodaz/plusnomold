import * as React from "react";
// Icons
import IconButton from '@material-ui/core/IconButton';
import { Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

const ref =  React.createRef();

const MenuActions = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const childrenWithProps = children => {
    if (children) {
      return React.cloneElement(children, { onClick: handleClose, ref: ref, record: record });
    }
  }

  return (
    <div>
      <IconButton
        aria-label="Opciones"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '16ch',
          },
        }}
      >
        {childrenWithProps(children)}
      </Menu>
    </div>
  );
};

export default MenuActions;

