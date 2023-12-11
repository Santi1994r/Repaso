import { Link, Route } from "wouter";
import "./App.css";

function App() {
  return (
    <>
      <Link href="/src/Components/Home">
        <a className="">Home</a>
      </Link>
      <Link href="/users/1">
      <a className="link">Profile</a>
    </Link>

    <Route path="/about">About Us</Route>
    <Route path="/users/:name">{(params) => <div>Hello, {params.name}!</div>}</Route>
    <Route path="/inbox" component={InboxPage} />
    </>
  );
}

export default App;
