import {
  Link,
} from 'react-router-dom';

const nav = () => (
  <nav>
    <h1>Math Site</h1>
    <ul className="navUl">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default nav;
