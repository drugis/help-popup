import Help from '@material-ui/icons/Help';
import React from 'react';
import InlineHelp from 'src/InlineHelp/InlineHelp';

export default function InlineQuestionMark({helpId}: {helpId: string}) {
  return (
    <InlineHelp helpId={helpId} omitQuestionMark={true}>
      <Help fontSize="small" style={{marginTop: '5px'}} />
    </InlineHelp>
  );
}
