import { Switch, Route, Link } from 'wouter';
import { Home } from './pages/Home.jsx';
import { Contact } from './pages/Contact.jsx';

export function App() {
  return (
    <div>
      <nav className=" bg-gray-200">
        <div className="flex gap-4 container mx-auto min-h-[4rem]  items-center ">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main className="container mx-auto py-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}
