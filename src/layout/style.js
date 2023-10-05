import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.success.main,
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

export default useStyles;
