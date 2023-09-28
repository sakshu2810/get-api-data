import UserList from "./userList/userList";
import AppHeader from "./header/appHeader";
import theme from "./theme/theme";
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <UserList />
    </ThemeProvider>
  );
}

export default App;
