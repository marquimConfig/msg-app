import * as React from 'react';
import {useState} from 'react'
import MaskedInput from './styles/MaskedInput';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, Button, Grid} from '@material-ui/core';
import {Box} from '@mui/system';
import {GlobalStyle} from './styles/global';
import Megalogo from './assets/img/logomega2.png';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function App() {
    const [name, setName] = useState('');
    const [cel, setCel] = useState('');
    const [msg, setMsg] = useState('');

    async function handleSendMsg(info: object) {
        const sendApi = true;
        if (name === '') {
            return alert('Nome do Cliente está vazio!');
        }
        if ((cel.length !== 15) || (cel === '')) {
            return alert('Celular do Cliente está vazio ou invalido!');
        }
        if (msg === '') {
            return alert('Selecione uma mensagem para enviar para o Cliente!');
        }
        if (sendApi) {
            console.log(name,cel,msg)
            return alert('Mensagem enviada');
        } else {

        }
    }


    const msgData = [
        {
            id: 0,
            messages: 'sss',
        },
        {
            id: 1,
            messages: 'Negocie seus débitos e volte a navegar. Evite o cancelamento e negativação.\n' +
                'Megalink 08004072597 ou pague em nosso site: https://central.megalink.net.br',
        },
    ]

    function handleMsg(id: number) {
        const src = msgData.filter((msgData) => (msgData.id === id))
        setMsg(`${name} , ${src[0].messages}`)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Grid
                key="container"
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}
            >
                <Box
                    key='main'
                    sx={{
                        position: 'absolute',
                        width: 'auto',
                        height: 590,
                        bgcolor: '#505050',
                        border: 1,
                        boxShadow: 1,
                        borderRadius: 9,
                        p: 2,
                        minWidth: 800,
                        minHeight: 590,
                    }}
                >
                    <Box
                        key='title'
                        sx={
                            {
                                left: 0,
                                top: 0,
                                bgcolor: '#1C8B20',
                                minWidth: 325,
                                minHeight: 200,
                                position: 'absolute',
                                borderRadius: '15% 0% 100% 0%',
                            }
                        }>
                        <Typography key="title1" variant="h4" sx={{m: '16% 0% 0% 10%', color: '#F9F9F9'}}>Envio
                            de</Typography>
                        <Typography key="title2" variant="h4"
                                    sx={{m: '0.4% 0% 0% 10%', color: '#F9F9F9'}}>Mensagem</Typography>
                    </Box>
                    <Box
                        key='logo'
                        sx={{
                            ml: '50%',
                            width: 200,
                            height: 200,
                        }}>
                        <img src={Megalogo} alt="Megalogo" className="photo"/>
                    </Box>

                    <Box
                        key='inputName'
                        sx={{m: '0% 0% 0% 5%'}}>
                        <TextField id="outlined-basic" label="Nome" value={name} variant="outlined"
                                   onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setName(e.target.value)}/>
                    </Box>
                    <Box
                        key='inputCel'
                        sx={{m: '2% 0% 0% 5%'}}>
                        <MaskedInput
                            name="celular"
                            label="Celular"
                            value={cel}
                            mask="(99) 99999-9999"
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCel(e.target.value)}
                        />
                    </Box>
                    <Box
                        key='inputMsg'
                        sx={{m: '2% 0% 0% 5%'}}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Mensagem"
                            multiline
                            value={msg}
                            rows={7}
                            onChange={(event) => setMsg(event.target.value)}
                        />
                    </Box>
                    <Box
                        key='Templates'
                        sx={{m: '-50% 0% 0% 45%'}}>
                        <Typography variant="h5">Templates</Typography>
                    </Box>
                    <Box
                        key="buttonTemplate">
                        {msgData.map(data => (
                            <Button
                                key={data.id}
                                sx={{m: '1% 0% 0% 45%'}}
                                style={{
                                    width: 400,
                                    height: 160,
                                    background: '#1c8b20',
                                    color: '#fff',
                                    borderRadius: '8%'
                                }}
                                onClick={() => handleMsg(data.id)}
                            >
                                {data.messages}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        key='sendMensager'
                        sx={{m: '1% 0% 0% 80%'}}>
                        <Button
                            color="success"
                            size="large"
                            variant="contained"
                            className="buttonLoginCustom"
                            onClick={handleSendMsg}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}