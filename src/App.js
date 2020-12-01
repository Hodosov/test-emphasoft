import { useSelector } from "react-redux";
import { AuthForm } from "./components/AuthForm";
import { UserPage } from "./components/UserPage";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '500px',
    margin: '0 auto',
  }
})

function App() {

  const classes = useStyles()

  const isAuth = useSelector(state => state.isAuth)

  return (
    <div className={classes.root}>
      {isAuth
        ? <UserPage />
        : <AuthForm />}
    </div>
  );
}

export default App;
