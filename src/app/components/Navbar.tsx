import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/tracker">Tracker</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
