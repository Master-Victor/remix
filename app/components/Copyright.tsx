import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" style={{ paddingLeft: '280px',paddingTop: '112px', display: 'inline-block' }}>
      © 2022 Customer Products. All rights reserved.
      {new Date().getFullYear()}.
    </Typography>
  );
}