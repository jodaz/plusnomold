<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <!-- CSRF Token -->
        <title> Certificado de solicitud aprobada </title>
        <style>
           body {
                font-family: 'Helvetica';
                font-size: 10px;
            }
            .header {
                width: 100%;
                position: relative;
                display: block;
            }
            .header div {
                display: inline-block;
            }
            #mayorLOGO {
                float: right;
            }
            table, td, th {
                border: 1px #000 solid;
            }
            td {
                font-size: 12px;
                padding: 2px 1px;
            }
            table {
                border-collapse: collapse;
                width: 100%;                
                margin-top: 5px;
            }
            .details td {
                text-align: center;
            }
            .details .object-payment {
                text-align: left;
                padding-left: 3px;
            }
            .tables {
                display:block;
            }
            .bill-info {
                width: 100%;
                clear: both;
                font-weight: bold;
            }
            .col-bill-info {
                float: left;
                width: 50%;
                font-size: 16px;
            }
            .total-amount {
                text-align: right;
            }
            .miscellaneus {
                font-size: 12px;
            }
            caption {
                font-weight: bold;
            }
            th {
                font-size: 10px;
                padding: 3px 1px;
            }
        </style>
    </head>

    <body>
        <div class="header">
            <div class="description">
                <div style="float:left; padding-right: 20px;">
                    <img src="{{ base_path().'/public/images/mayor_logo.jpg' }}" height="65px" width="85px" alt="logo" />
                </div>
               <p>
                    REPÚBLICA BOLIVARIANA DE VENEZUELA<br>
                    ALCALDÍA BOLIVARIANA DEL MUNICIPIO BERMÚDEZ<br>
                    DIRECCIÓN DE RECURSOS HUMANOS<br>
                    ESTADO SUCRE - MUNICIPIO BERMÚDEZ<br>
                </p>
            </div>
            <div id="mayorLOGO">
                <img src="{{ base_path().'/public/images/logo.png' }}" height="60px" width="80px" alt="logo" />
            </div>
        </div>
        <div class="section">
            <div style="margin-bottom: 20px;text-align:left;">
                <p>
                </p>
            </div>

            <p style="text-align: center;font-weight:bold;text-decoration:underline;">CONSTANCIA</p>

            <div style="text-align: justify;text-justify: inter-word;margin-right:50px;margin-top: 10px;margin-bottom:20px;text-indent:50px;">
                <p>La Suscrita Directora de Recusos Humanos de la Alcaldía del Municipio Bermúdez, por medio de la presente hace constar, que el (la)
                    ciudadano (a): {{ $employee->fullName }}, titular de la Cédula de Identidad Nº {{ $employee->document }}; trabaja en esta
                    institución desde el {{ $employee->admission_date }}, desempeñando el cargo de {{ $employee->professionalization_level }}; devengando un ingreso mensual de 
                    {{ $employee->payrolls->first()->total_amount }}.
                </p>

                <p>
                    Constancia que se expide a solicitud de la parte interesada en la ciudad de Carúpano, a los TANTOS DIAS DEL MES TAL DEL AÑO TAL.
                </p>
            </div>

            <p style="text-align:center;">
                ATENTAMENTE,<br>
                <br>
                <br>
                <br>
              ________________________________<br>
                <br>
                Nírcia Villegas<br>
                Alcaldía Bolivariana del Municipio Bermúdez<br>
            </p>
        </div>
    </body>
</html>
