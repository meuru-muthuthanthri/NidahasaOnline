import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
  menuButton: {
    margin: '2px',
    color: 'white',
    padding: 0,
    textTransform: 'none',
    minWidth: '30px',
  },
  normalChord: {
    backgroundColor: '#150940',
  },
  originalChord: {
    backgroundColor: '#E82C02',
  },
  selectedChord: {
    backgroundColor: '#FF7B03',
  },
  dialog: {},
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const chords = ['Ab', 'A', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];

export default function CustomizedDialogs(args) {
  const [open, setOpen] = React.useState(false);
  const { original, selected, onSelect } = args;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();


  return (
    <div>
      <Button className={[classes.menuButton, classes.selectedChord]} onClick={handleClickOpen}>{selected}</Button>
      <Dialog className={classes.dialog} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Transpose to
        </DialogTitle>
        <DialogContent dividers>
          {chords.map(
            chord => {
              const classNames = [classes.menuButton];
              if (chord === original) {
                classNames.push(classes.originalChord);
              } else if (chord === selected) {
                classNames.push(classes.selectedChord);
              } else {
                classNames.push(classes.normalChord);
              }
              const onClick = () => {
                onSelect(chord);
                handleClose();
              };
              return (
                <Button className={classNames} key={chord} onClick={onClick}>{chord}</Button>
              );
            },
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
