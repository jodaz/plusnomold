import * as React from "react";
import {
  List,
  Datagrid,
  SimpleList,
  Filter,
  TextInput,
  TextField,
  DateField
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PayrollsFilter = props => (
  <Filter {...props}>
    <TextInput label="Cédula" source='document' />
  </Filter>
);

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Nóminas"
      exporter={false}
      filters={<PayrollsFilter />}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.employee.fullName}`}
          secondaryText={record => `${record.total_amount}`}
          tertiaryText={record => `${record.payment_date}`}
          linkType={"show"}
        />
      ) : (
        <Datagrid>
          <TextField source='document' label='Cédula' />
          <TextField source='employee.fullName' label='Nombre' />
          <DateField source="payment_date" label="Fecha de pago" />
        </Datagrid>
      )}
    </List>
  );
}

