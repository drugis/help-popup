import {Link} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import {CSSProperties} from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React, {MouseEvent, useContext, useEffect, useState} from 'react';
import {HelpContext} from '../HelpContext/HelpContext';

export default function InlineHelp({
  helpId,
  omitQuestionMark,
  children
}: {
  helpId: string;
  omitQuestionMark?: boolean;
  children: any;
}) {
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  const [link, setLink] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const {getHelpInfo, baseUrl} = useContext(HelpContext);

  useEffect(() => {
    const {title, text, link} = getHelpInfo(helpId);
    setTitle(title);
    setText(text);
    setLink(baseUrl + link);
  });

  const style: CSSProperties = {
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    textDecorationThickness: '1px',
    textDecorationColor: 'darkgray',
    cursor: 'help',
    alignItems: 'center'
  };

  function openPopover(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function closePopover() {
    setAnchorEl(null);
  }

  function renderQuestionMark(): JSX.Element {
    if (omitQuestionMark) {
      return <></>;
    } else {
      return <sup style={{color: 'darkgray'}}>?</sup>;
    }
  }

  return !link ? (
    <span>{children}</span>
  ) : (
    <>
      <span onClick={openPopover} style={style}>
        {children}
      </span>
      {renderQuestionMark()}
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
            <Typography>{text}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href={link} target="_blank">
              <Typography>View in manual</Typography>
            </Link>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}
