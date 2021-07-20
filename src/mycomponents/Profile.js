import styled from 'styled-components'
import {Button , Form, Col, Row ,Container, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';




const MyProfile = styled.div`

.ss{
   
   
   width :1000px;
    padding-right : 40px;
    padding-top : 70px;
    height : 500px;

}

.pp{
    
}
.qq{
   
    padding-top:100px;
    padding-left : 80px;
    height :600px;
}
.outside{
    background-image: linear-gradient( 120deg ,rgb(187, 87, 187), rgb(192, 255, 252), lightblue);
   
}


`

export default function Profile() {


   const histry =  useHistory();


function onClickHandler(){


    histry.push("/login")

}


    return (
            <MyProfile>
<Row className = "outside">
    <Col className = "pp" >
    <Container className = "qq">
  
    <Col xs={6} md={4}>
      <Image src="./img/download.jpg" rounded />
    </Col>
    <Form.Group controlId="formFile" className="mb-3">
    <br />
    <Form.Control type="file" accept = "image/*" />
  </Form.Group>
 
</Container>
    </Col>
    <Col>
        <Form className = "ss">



            
        <Row className="mb-3">

        <Form.Group className="mb-3" controlId="formGridUsername">
    <Form.Label>UserName</Form.Label>
    <Form.Control placeholder="xyz abc" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGriddob">
    <Form.Label>Data of Birth </Form.Label>
    <Form.Control type = "date" placeholder="dd/mm/yy" />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="xyz@abc.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridNumber">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control placeholder="xyz abc" />
  </Form.Group>

    <Form.Group as={Col} controlId="formGridReligion">
      <Form.Label>Religion</Form.Label>
      <Form.Control type="text" placeholder="Enter Religion" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridHeight">
      <Form.Label>Height</Form.Label>
      <Form.Control type="number"  step = "0.1" placeholder="5'6" />
    </Form.Group>
  
   
    </Row>
  
        </Form>
       </Col>
        </Row>
        
                <Button onClick= {onClickHandler}> LOGOUT </Button>
               


</MyProfile>
    )
}
