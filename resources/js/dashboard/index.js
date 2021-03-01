import * as React from 'react';
import { CardButton } from 'mui-extra';
import {
  Grid 
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const Index = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <CardButton
          loading={false}
          title={'Descargar constancia de trabajo'}
          total={1}
          icon={<GetAppIcon />}
          handleClick={() => console.log("Hello World")}
        />
      </Grid>
      <Grid item md={6}>
        <CardButton
          loading={false}
          title={'Descargar constancia de trabajo'}
          total={1}
          icon={<GetAppIcon />}
          handleClick={() => console.log("Hello World")}
        />
      </Grid>
    </Grid>
  );
};

export default Index;
