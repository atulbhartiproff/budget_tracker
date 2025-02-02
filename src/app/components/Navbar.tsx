import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <nav
        style={{
          color: "white",
          position: "fixed",
          top: "0",
          right: "0",
          width: "auto",
          padding: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Link href="/login">Login</Link>

        <Link href="/register">Register</Link>

        <Link href="/">Home</Link>
      </nav>
    </>
  );
};

export default Navbar;
