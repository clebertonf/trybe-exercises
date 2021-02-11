// Exercicio 01 

const JSX = <h1>Hello JSX!</h1>;

// Exercicio 02

const JSX = <div>
    <h1>Tecnologias</h1>
    <p>Lista tecnologias abaixo:</p>
    <ul>
        <li>Java Script</li>
        <li>Node.js</li>
        <li>React</li>
    </ul>
</div>

// Exercicio 03

const JSX = (
    <div>
    {/* Fiz um comentario aqui! */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

// Exercicio 04

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  
  const element = document.getElementById('challenge-node');
  
  ReactDOM.render(JSX, element);

// Exercicio 05

const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );

// Exercicio 06 

const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br/>
      <p>Be sure to close all tags!</p>
      <hr/>
    </div>
  );

// Exercicio 07

const MyComponent = function() {
    // Change code below this line
  return <div> 
    <h3> Ola mundo! </h3>
  </div>
  
    // Change code above this line
  }

// Exercicio 08

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
    return <div>
              <h1>Hello React!</h1>
          </div>
  
  
      // Change code above this line
    }
  };

// Exercicio 09

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */
           <ChildComponent />
           }
  
  
          { /* Change code above this line */}
        </div>
      );
    }
  };

