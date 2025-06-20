import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaList, FaQuestionCircle, FaFire } from 'react-icons/fa';

import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';
import QuestionBankAdvanced from './components/QuestionBankAdvanced';

function App() {
  const [activeComponent, setActiveComponent] = useState('itemlist-advanced');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'itemlist-advanced':
        return <ItemList />;
      case 'quiz':
        return <QuestionBank />;
      case 'quiz-advanced':
        return <QuestionBankAdvanced />;
      default:
        return <QuestionBank />;
    }
  };

  const customStyles = {
    navbar: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      borderBottom: 'none'
    },
    navLink: {
      fontWeight: '500',
      padding: '10px 15px',
      margin: '0 5px',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      color: 'rgba(255,255,255,0.9) !important'
    },
    activeNavLink: {
      background: 'rgba(255,255,255,0.2)',
      color: 'white !important',
      fontWeight: '600'
    },
    brand: {
      fontWeight: '700',
      fontSize: '1.5rem',
      color: 'white !important'
    }
  };

  return (
      <div style={{minHeight: '100vh'}}>
        <Navbar expand="lg" style={customStyles.navbar}>
          <Container>
            <Navbar.Brand style={customStyles.brand}>
              🚀 useReducer Demo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => setActiveComponent('itemlist-advanced')}
                  style={{
                    ...customStyles.navLink,
                    ...(activeComponent === 'itemlist-advanced' ? customStyles.activeNavLink : {})
                  }}
                >
                  <FaList className="me-2" />
                  Quản Lý Danh Sách
                </Nav.Link>
                <Nav.Link
                  onClick={() => setActiveComponent('quiz')}
                  style={{
                    ...customStyles.navLink,
                    ...(activeComponent === 'quiz' ? customStyles.activeNavLink : {})
                  }}
                >
                  <FaQuestionCircle className="me-2" />
                  Quiz Cơ Bản
                </Nav.Link>
                <Nav.Link
                  onClick={() => setActiveComponent('quiz-advanced')}
                  style={{
                    ...customStyles.navLink,
                    ...(activeComponent === 'quiz-advanced' ? customStyles.activeNavLink : {})
                  }}
                >
                  <FaFire className="me-2" />
                  Quiz Nâng Cao
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{background: 'transparent', minHeight: 'calc(100vh - 80px)'}}>
          {renderComponent()}
        </div>
      </div>
  );
}

export default App;
