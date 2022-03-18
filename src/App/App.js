import { useState } from 'react';
import { Content } from '../Content';
import { Control } from '../Control';
import { Create } from '../Create';
import { Header } from '../Header';
import { Nav } from '../Nav';
import './App.css';

function App() {
  const [state, setState] = useState({
    mode: 'read',
    list: [
      { id: 1, title: 'HTML', desc: 'HTML is ...' },
      { id: 2, title: 'CSS', desc: 'CSS is ...' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is ...' },
    ],
    welcome: { title: 'Welcome', desc: 'World Wide Web' },
    selected_id: 2,
    next_id: 4,

  })

  let contents = null;
  if (state.mode === 'welcome') {
    contents = <Content title={state.welcome.title} desc={state.welcome.desc}></Content>
  } else if (state.mode === 'read') {
    const item = state.list.find(element => element.id === state.selected_id)
    if (item === undefined) {
      setState({ ...state, mode: 'welcome' })
    } else {
      contents = <Content title={item.title} desc={item.desc}></Content>
    }
  } else if (state.mode === 'create') {
    contents = <Create onSubmit={(title, desc) => {
      let new_list = [...state.list]
      new_list.push({ id: state.next_id, title, desc })
      setState({ ...state, list: new_list, selected_id: state.next_id, next_id: state.next_id + 1, mode: 'read' })
    }}></Create>
  } else if (state.mode === 'update') {
    console.log('update mode')
  } else if (state.mode === 'delete') {
    console.log('delete mode')
  }


  return (
    <div className="App">
      <Header title='WWW' desc='World Wide Web' onClick={() => {
        setState({ ...state, mode: 'welcome' })
      }}></Header>
      <Nav list={state.list} onClick={(id) => {
        setState({ ...state, mode: 'read', selected_id: id })
      }}></Nav>
      <Control onClick={(mode) => {
        setState({ ...state, mode })
      }}></Control>
      {contents}
    </div>
  );
}

export default App;
