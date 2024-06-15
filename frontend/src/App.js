import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateMemo from './components/CreateMemo';
import MemoList from './components/MemoList';
import SearchMemos from './components/SearchMemos';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/create-memo" component={CreateMemo} />
          <Route path="/memos" component={MemoList} />
          <Route path="/search" component={SearchMemos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
