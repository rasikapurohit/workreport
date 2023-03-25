import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  const grade = localStorage.getItem('grade');
  
  function MenuOption ({ grade }) {
    if (grade === "A") {
      return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/dashboard">Home</Navbar.Brand>
            <Nav className='me-auto'>
            <Nav.Link href="/submission">Submit Work Report </Nav.Link>
            <Nav.Link href="/approve">Approve Work Report </Nav.Link> 
            <Nav.Link href="/report">Reports</Nav.Link>     
            </Nav> 
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: {localStorage.getItem('name')}							 
            </Navbar.Text> 					      
            </Navbar.Collapse>						
            </Container>
        </Navbar>
      );
    } // end of "A" if

    else if (grade === "B") {
      return (
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/dashboard">Home</Navbar.Brand>
            <Nav className='me-auto'>
            <Nav.Link href="/submission">Submit Work Report</Nav.Link>
            <Nav.Link href="/report">Reports</Nav.Link>     
            </Nav> 
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: {localStorage.getItem('name')}
            </Navbar.Text>        
            </Navbar.Collapse>
        </Container>
        </Navbar>
      );
    } //end of "B" if

    else {
      return(
				<Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/dashboard">Home</Navbar.Brand>
            <Nav className='me-auto'>
            <Nav.Link href="/submission">Submit Work Report</Nav.Link>    
            </Nav> 
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: {localStorage.getItem('name')}
            </Navbar.Text>        
            </Navbar.Collapse>
            </Container>
        </Navbar>

      )
    }
  }

    return (
    <div>
      <MenuOption grade={grade} />
    </div>
  )
    };



export default Menu;