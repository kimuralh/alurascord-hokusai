import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import {useRouter} from 'next/router';
import React from 'react';
import appConfig from '../config.json';


function Titulo(props){
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            
            <style jsx>{`
                ${Tag}{
                    color:red;
                    font-size:24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

export default function PaginaInicial() {
    //const username = 'kimuralh';
    const [username, setUsername] = React.useState("kimuralh");
    const roteamento = useRouter();

    //desafio bloquear com 2 caracteres ou menos
    const bloqueio = username.length <= 2;

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[100],
            backgroundImage: 'url(https://wallpapercave.com/wp/wp2004133.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              //backgroundColor: appConfig.theme.colors.neutrals[700],
              backgroundColor: appConfig.theme.colors.primary[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit = {function (event){
                event.preventDefault();
                roteamento.push("/chat");
                //window.location.href = "/chat";
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              {/* exemplo com input
                <input 
                type="text"
                value={username} 
                onChange= {function (event) {
                    //console.log(`evento: ${event.target.value} variavel: ${username}`)
                    //valor desejado
                    const valor = event.target.value;
                    //mudando o valor da variável através do react e engatilhando todas as mudanças na página referentes à observação desta variável
                    setUsername(valor);
                }}
              />*/}
              
              <TextField
                value={username} 
                onChange= {function (event) {
                    //valor desejado
                    const valor = event.target.value;
                    //mudando o valor da variável através do react e engatilhando todas as mudanças na página referentes à observação desta variável
                    setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              
              <Button
                type='submit'
                label='Entrar'
                //desafio bloqueio
                disabled={bloqueio}
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                //backgroundColor: appConfig.theme.colors.neutrals[800],
                backgroundColor: appConfig.theme.colors.primary[300],
                border: '1px solid',
                //borderColor: appConfig.theme.colors.neutrals[999],
                borderColor: appConfig.theme.colors.primary[200],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                
                //desafio bloqueio
                src={bloqueio?"":`https://github.com/${username}.png`}
              />
              
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }