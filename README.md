React auto-hide on scroll navbar.

This will create a react-component navbar that will be hidden when the user scrolls down and visable when the user scrolls up.

First what we need to do it is:
setup

`npm install styled-components --save`

1. App Component with links object

```javascript
// App.js
const navlinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" }
];
const brand = { name: "peekaboo", to: "home" };

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand={brand} links={navlinks} />
      </div>
    );
  }
}
```

Navbar.js skelletoono

```javascript
//Navbar.js
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static propTypes = {...}

Component {
  constructor(props) {...}

  componentDidMount() {...}

  componentWillUnmount() {...}

  handleScroll() {...}

  render() {

    return (
      <div>
      ...
      </div>
    );
  }
}
```

**configure proptypes**

```javascript
static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      })
    )
  };
```

**constructor**

```javascript
constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
```

**c did mount & c will unm**

```javascript
componentDidMount() {
  window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}
```

**handle click**

```javascript
handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
```

**render links**

```javascript
render() {
  const {brand, links}=this.props;

    const NavLinks = () =>
      links.map((link, index) =>
        (<a key={index} href={link.to}> {link.name} </a> ));

return (
    <div>
      <a className="brand" href={brand.to}>
        {brand.name}
      </a>
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
}
```

**add function to toggle `active` and `hidden` classes**

```javascript
return <div className={this.state.show ? "active" : "hidden"}>{/*...*/}</div>;
```

2. Create our `StyledNavbar` component

```javascript
/* Navbar.js  */
const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: cornflowerblue;
  z-index: 1000;
  a {
    margin-right: 1rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }
`;

render() {
...
return (
    <StyledNavbar>
    ...
    </StyledNavbar>
  );
}
```

```javascript
const Transition = styled.div`
  .active {
    transition: 300ms all ease-in-out 100ms;
  }
  .hidden {
    transition: 300ms all ease-in-out 100ms;
    transform: translate(0, -4rem);
  }
`;
```

```javascript
//Navbar.js
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    const { brand, links } = this.props;

    const NavLinks = () =>
      links.map((link, index) => (
        <a key={index} href={link.to}>
          {link.name}
        </a>
      ));

    return (
      <Transitiom>
        <StyledNavbar>
          <a className="brand" href={brand}>
            {brand}
          </a>
          <nav>
            <NavLinks />
          </nav>
        </StyledNavbar>
      </Transitiom>
    );
  }
}
```

3. Add our constuctor and

```javascript
// Navbar.js
constructor(props) {
  super(props);

  this.state = {
    show: true,
    scrollPos: 0
  };

  this.handleScroll = this.handleScroll.bind(this);
}
```

4. Add our lifecycle methods.

```javascript
// Navbar.js
componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}

handleScroll() {}
```

5. Create our `handleScroll()` method.

```javascript
// Navbar.js
handleScroll() {
    const { scrollPos } = this.state;

    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
```

5. Attach bind to el

```javascript
// Navbar.js
return (
  <div className={this.state.show ? "navbar" : "navbar hidden"}>
    <nav>
      <NavLinks />
    </nav>
  </div>
);
```

6. Create `StyledNavbar` styled component

```javascript
// Navbar.js
import "./Navbar.css";

// ..
return (
  <div className={this.state.show ? "navbar" : "navbar hidden"}>{/* */}</div>
);
```

7. create transition styled component.
