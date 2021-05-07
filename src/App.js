import { Container } from '@material-ui/core'
import { Classes } from './Components/Classes'
import { Home } from './Components/Home'
import { MyChat } from './Components/MyChat'
import { StudentViewClassPersonal } from './Components/StudentViewClassPersonal'
import { TutoryCommonStuUpdateView } from './Components/TutoryCommonStuUpdateView'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AdminToStuChat } from './Components/StudentViewCenter/AdminToStuChat'
import { Progress } from './Components/Progress'
import TeacherView from './Components/TeacherView'
import TeacherToAdminChat from './Components/TeacherVew/TeacherToAdminChat'
import TeacherClassWork from './Components/TeacherVew/TeacherClassWork'
import Teacher2StuPersonal from './Components/TeacherVew/Teacher2StuPersonal'
import IfMyChatOpen from './Components/MyChat/IfMyChatOpen'
import LandingPage from './Components/LandingPage'
import { AuthProvider } from './Auth'


function App() {




  return (
    // <Container style={{ backgroundColor: "white", marginTop: "10px", paddingTop: "10px", marginBottom: "10px", borderRadius: "10px" }}>
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mychat/chat001" component={MyChat} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/mychat/:id" component={<MyChat />} />
          <Route path="/stuview" component={TutoryCommonStuUpdateView} />
          <Route path="/clspersonal" component={StudentViewClassPersonal} />
          <Route path="/class" component={Classes} />
          <Route path="/adminmsg" component={AdminToStuChat} />
          <Route path="/progress" component={Progress} />
          <Route path="/techview" component={TeacherView} />
          <Route path="/TeachToAdminChat" component={TeacherToAdminChat} />
          <Route path="/TeachClsWork" component={TeacherClassWork} />
          <Route path="/Tech2Stu" component={Teacher2StuPersonal} />
          {/* <Route path="/myChatOpen" component={IfMyChatOpen}/> */}
        </Switch>
      </Router>
      </AuthProvider>
    // </Container>
  );
}

export default App;
