import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const NavBar = ({ drawerwidth = 240 }) => {
    return (
        <AppBar position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerwidth}px)` },
                ml: { sm: ` ${drawerwidth}px` }
            }}
        >
            <Toolbar>
                <IconButton color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />


                </IconButton>
                <Grid container direction='row'
                    justifyContent='space-between'
                    alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

                    <IconButton sx={{ color: 'white' }}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
