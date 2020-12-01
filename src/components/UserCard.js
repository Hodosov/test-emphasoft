import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        border: '1px solid #eee',
        height: '40px',
        marginTop: '5px',
        borderRadius: '5px',
        '&:hover': {
            background: '#eee'
        }
    },
})


export const UserCard = ({ name, id }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                name:<b> {name}</b>
            </div>
            <div>
                id: {id}
            </div>
        </div>
    )
}