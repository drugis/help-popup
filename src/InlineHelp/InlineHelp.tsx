import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import {CSSProperties} from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React, {MouseEvent, useContext, useEffect, useState} from 'react';
import {HelpContext} from '../HelpContext/HelpContext';

export default function InlineHelp({
  helpId,
  children
}: {
  helpId: string;
  children: any;
}) {
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  const [link, setLink] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const {getHelpInfo} = useContext(HelpContext);

  useEffect(() => {
    const {title, text, link} = getHelpInfo(helpId);
    setTitle(title);
    setText(text);
    setLink(link);
  });

  function openPopover(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function closePopover() {
    setAnchorEl(null);
  }

  const style: CSSProperties = {
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    cursor: 'help'
  };

  return (
    <>
      <span onClick={openPopover} style={style}>
        {children}
      </span>
      <Popover
        open={!!anchorEl}
        onClose={closePopover}
        anchorOrigin={{vertical: 'center', horizontal: 'center'}}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        anchorEl={anchorEl}
      >
        <Grid container component={Box} p={2} maxWidth="300px">
          <Grid item xs={12} style={{marginBottom: '10px'}}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            {text}
          </Grid>
          <Grid item xs={12}>
            <a href={link} target="_blank">
              View in manual
            </a>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}
