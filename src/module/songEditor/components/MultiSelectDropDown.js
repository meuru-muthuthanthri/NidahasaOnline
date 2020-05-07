import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import _ from 'lodash';

const useStyles = makeStyles(() => ({
  chip: {
    margin: '2px',
  },
}));

export default function MultiSelectDropDown({ text, items, onSelect }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onSelect(state);
  };

  const handleChange = ({ target }) => {
    const { checked, name } = target;
    if (checked) {
      setState(state.concat(name));
    } else {
      setState(state.filter(item => item !== name));
    }
  };

  const menuItems = items.map(item => (
    <MenuItem key={item.name}>
      <FormControlLabel
        control={<Checkbox checked={state.includes(item.id)} onChange={handleChange} name={item.id} color="primary"/>}
        label={item.name}
      />
    </MenuItem>
  ));

  const selected = state.map(id => (
    <Chip
      key={id}
      icon={<CategoryOutlinedIcon />}
      label={_.find(items, (item => item.id === id)).name}
      size="small"
      disabled
      className={classes.chip}
    />
  ));

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} variant="contained" fullWidth>
        {selected.length > 0 ? selected : text}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems}
      </Menu>
    </div>
  );
}
