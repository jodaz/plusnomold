import * as React from "react";
import fileDownload from 'js-file-download';
import { useNotify } from 'react-admin';
import ButtonMenu from './ButtonMenu';
import GetAppIcon from '@material-ui/icons/GetApp';
import { apiURL } from '../config';
import axios from 'axios';
import isEmpty from 'is-empty';

export default function (props) {
  const { onClick, record, ...rest } = props;
  const notify = useNotify();
  const url = `${apiURL}/employees/${record.id}/proofs/download`;

  const handleDownload = async () => {
    const {
      error,
      response
    } = await axios.get(url, { responseType: 'blob'})
          .then(res => ({ response: res.data }))
          .catch(error => ({ error: error.message.data }));
    if (!isEmpty(response)) {
      fileDownload(response, 'certificado.pdf');
      notify('¡La constancia de trabajo ha sido descargado!');
    }
    if (!isEmpty(error)) {
      notify('Ha ocurrido un error en su solicitud.')
    }
  };

  return (
    <ButtonMenu
      label=''
      icon={<GetAppIcon />}
      onClick={() => {
        handleDownload();
        onClick();
      }}
      {...rest}
    />
  );
}
