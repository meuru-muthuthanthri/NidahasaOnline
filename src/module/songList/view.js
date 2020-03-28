import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import { read } from '../../repository/SongReader';

import _ from 'lodash';

let songs = read();
console.log(_.keys(songs));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  gridList: {
    width: 'inherit',
    height: 'inherit',
  },
  button: {
    padding: '30px',
  },
  bRoot: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '20px 30px',
    marginBottom: '5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    fontSize: 20,
    justifyContent: 'left',
    marginLeft: '20px'
  }
}));

export default function () {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <GridList cellHeight={40} cols={1}>
        {_.keys(songs).map((songName, index) => (
            <Button variant="contained" color="primary" classes={{
              root: classes.bRoot, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}>
              {`${index + 1}. ${songName}`}
            </Button>
        ))}
      </GridList>
    </div>
  )
}
//
// return (
//   <div className={classes.root}>
//     <GridList cellHeight={180} className={classes.gridList}>
//       <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//         <ListSubheader component="div">December</ListSubheader>
//       </GridListTile>
//       {tileData.map(tile => (
//         <GridListTile key={tile.img}>
//           <img src={tile.img} alt={tile.title} />
//           <GridListTileBar
//             title={tile.title}
//             subtitle={<span>by: {tile.author}</span>}
//             actionIcon={
//               <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </GridListTile>
//       ))}
//     </GridList>
//   </div>
// );
// }
