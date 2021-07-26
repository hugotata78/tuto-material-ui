import { ThemeProvider} from '@material-ui/core/styles'
import theme from './ThemeConfig'
import ContainerApp from './components/ContainerApp'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <ContainerApp />
    </ThemeProvider>
  );
}

export default App;
