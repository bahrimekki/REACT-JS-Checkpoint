import React from "react";
import {Card, CardDeck, Nav, Button, Jumbotron} from 'react-bootstrap/esm/';
import './App.css';
function App() {
  return (
    <div className="App">
        <Card>
          <Card.Header>
            <Jumbotron text-center>
              <h1>My First React js App</h1>
              <p>constructed by Bahri Makki as part of the REACT JS checkpoint</p> 
            </Jumbotron>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src="https://www.bootstrapdash.com/wp-content/uploads/2017/08/Use-Bootstrap-4-With-ReactJS.jpg" alt="hello"/>
            <br/><br/>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png" />
                <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text>
                    Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Retrieved from Wikipedia</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://www.so-peps.com/wp-content/uploads/2016/03/css-logo.png" />
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text>
                    Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Retrieved from Wikipedia</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://perrinalexandre.alwaysdata.net/image/projets/techno/javascript.png" />
                <Card.Body>
                  <Card.Title>javaScript</Card.Title>
                  <Card.Text>
                    JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Retrieved from Wikipedia</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://mareconversionpro.fr/wp-content/uploads/2017/04/bootstrap.png" />
                <Card.Body>
                  <Card.Title>Bootstrap</Card.Title>
                  <Card.Text>
                    Bootstrap est une collection d'outils utiles à la création du design de sites et d'applications web. C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Retrieved from Wikipedia</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png" />
                <Card.Body>
                  <Card.Title>React Js</Card.Title>
                  <Card.Text>
                    React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Retrieved from Wikipedia</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            <Card.Title>Constructed by Bahri Makki</Card.Title>
            <Card.Text>
              GitHub est centré vers l'aspect social du développement. En plus d'offrir l'hébergement de projets avec Git, le site offre de nombreuses fonctionnalités habituellement retrouvées sur les réseaux sociaux comme les flux, la possibilité de suivre des personnes ou des projets ainsi que des graphes de réseaux pour les dépôts.
            </Card.Text>
            <Button variant="primary" src="https://github.com/">Github</Button>
          </Card.Body>
        </Card>
    </div>
  );
}
export default App;
