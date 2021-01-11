import React, { useEffect, useReducer } from 'react';
import { API } from 'aws-amplify';
import { List } from 'antd';
import { listTodos } from '../graphql/queries';
import { styles, initialState, reducer } from '../components/notes';
import 'antd/dist/antd.css';

const NotesApi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const notesData = await API.graphql({
        query: listTodos
      });
      dispatch({ type: 'SET_NOTES', notes: notesData.data.listTodos.items });
    } catch (err) {
      console.log('error', err);
      dispatch({ type: 'ERROR' });
    }
  };

  const renderItem = item => {
    return (
      <List.Item style={styles.item}>
        <List.Item.Meta title={item.name} description={item.description} />
      </List.Item>
    );
  };
  return (
    <div style={styles.container}>
      <h1>I am the NotesAPI Page</h1>
      <List
        loading={state.loading}
        dataSource={state.notes}
        renderItem={renderItem}
      />
    </div>
  );
};

export default NotesApi;
