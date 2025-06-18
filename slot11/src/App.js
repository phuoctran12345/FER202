import React from 'react';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import CompleteForm from './components/CompleteForm';

function App() {
  return (
    <div className="App">
      {/* Chọn component muốn hiển thị */}
      <ValidatedInput />
      <EmailPasswordForm />
      <CompleteForm />
    </div>
  );
}

export default App;
