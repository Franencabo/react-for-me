// import { Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam nobis. Rerum eaque aperiam quibusdam qui, blanditiis debitis alias natus quisquam, officia, et eius cupiditate ad temporibus delectus repudiandae autem.
                Placeat voluptates, vel sint cumque aliquam itaque iste! Error tempora odit rerum molestiae ullam dicta praesentium eligendi odio reiciendis impedit, nihil eveniet. Quaerat quas ad excepturi, illum incidunt quam blanditiis?
            </Typography> */}


            <NothingSelectedView />
            {/* <NoteView /> */}


            <IconButton size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}
