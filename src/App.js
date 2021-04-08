import { Container } from '@material-ui/core'
import { Classes } from './Components/Classes'
import { Home } from './Components/Home'
import { MyChat } from './Components/MyChat'
import { StudentViewClassPersonal } from './Components/StudentViewClassPersonal'
import { TutoryCommonStuUpdateView} from './Components/TutoryCommonStuUpdateView'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AdminToStuChat } from './Components/StudentViewCenter/AdminToStuChat'
import { Progress } from './Components/Progress'
import TeacherView from './Components/TeacherView'
import TeacherToAdminChat from './Components/TeacherVew/TeacherToAdminChat'
import TeacherClassWork from './Components/TeacherVew/TeacherClassWork'
import Teacher2StuPersonal from './Components/TeacherVew/Teacher2StuPersonal'


function App() {
  const Style = {
    backgroundColor: "#f7f3e9",
  }
 
  return (
    <div className="App" style={Style}>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mychat" component={MyChat} />
            <Route path="/stuview" component={TutoryCommonStuUpdateView} />
            <Route path="/clspersonal" component={StudentViewClassPersonal}/>
            <Route path="/class" component={Classes}/>
            <Route path="/adminmsg" component={AdminToStuChat}/>
            <Route path="/progress" component={Progress}/>
            <Route path="/techview" component={TeacherView}/>
            <Route path="/TeachToAdminChat" component={TeacherToAdminChat}/>
            <Route path="/TeachClsWork" component={TeacherClassWork}/>
            <Route path="/Tech2Stu" component={Teacher2StuPersonal}/>
          </Switch>
        </Router>
      </Container>
    </div>

  );
}

export default App;
