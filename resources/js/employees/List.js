import * as React from "react";
import {
  List,
  Datagrid,
  SimpleList,
  DateField,
  Filter,
  TextInput,
  SelectInput,
  BooleanInput,
  TextField
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const levels = [
  { id: 'Fijo', name: 'Fijo' },
  { id: 'Comisionado', name: 'Comisionado' },
  { id: 'Contratado', name: 'Contratado' },
];

const EmployeesFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source='name' alwaysOn />
    <TextInput label="Apellido" source="surname" />
    <TextInput label="Cédula" source="document" />
    <BooleanInput label="Activo" source="status" />
    <SelectInput source="level" choices={levels} label="Nivel" allowEmpty={false}/>
  </Filter>
);

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Nóminas"
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
            <TextField source='professionalization_level' label='Nivel de profesionalización' />
            <DateField source='admission_date' label='Fecha de ingreso' />
          </Datagrid>
      )}
    </List>
  );
}

