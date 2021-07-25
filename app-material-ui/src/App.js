import { ThemeProvider} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import theme from './ThemeConfig'
import NavBar from './components/NavBar'
import MenuList from './components/List'
import HiddenList from './components/HiddenList'
function App() {
  
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default App;
