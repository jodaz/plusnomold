import * as React from "react";
import {
  List,
  Datagrid,
  SimpleList,
  DateField,
  Filter,
  TextInput,
  BooleanInput,
  TextField
} from 'react-admin';
import DownloadButton from './DownloadButton';
import { useMediaQuery } from '@material-ui/core';


const EmployeesFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source='name' alwaysOn />
    <TextInput label="Apellido" source="surname" />
    <TextInput label="Cédula" source="document" />
    <TextInput label="Cargo" source="chargue" />
    <TextInput label="División / Dirección" source="division" />
    <BooleanInput label="Activo" source="status" />
  </Filter>
);

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Nóminas"
      exporter={false}
      filters={<EmployeesFilter />}
      bulkActionButtons={false}
    >
      {isSmall ? (
          <SimpleList
            primaryText={record => `${record.fullName}`}
            secondaryText={record => `${record.professionalization_level}`}
            tertiaryText={record => `${record.payrolls_count} pagos recibidos`}
            linkType={"show"}
          />
        ) : (
          <Datagrid>
            <TextField source='document' label='Cédula' />
            <TextField source='fullName' label='Nombre' />
            <TextField source='chargue' label='Cargo' />
            <TextField source='division' label='División / Dirección' />
            <DateField source='admission_date' label='Fecha de ingreso' />
            <DownloadButton />
          </Datagrid>
      )}
    </List>
  );
}

