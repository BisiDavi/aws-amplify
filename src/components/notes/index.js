export const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: { name: '', description: '' }
};

export const reducer = (state, action) => {
  const { type, notes } = action;
  switch (type) {
    case 'SET_NOTES':
      return {
        ...state,
        notes,
        loading: false
      };
    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};

export const styles = {
  container: { padding: 20 },
  input: { marginBottom: 10 },
  item: { textAlign: 'left' },
  p: { color: '#1890ff' }
};
