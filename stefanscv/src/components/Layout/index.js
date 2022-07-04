import './index.scss';

const Layout = props => {
  return (
    <div className="App">
      <div className="page">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
