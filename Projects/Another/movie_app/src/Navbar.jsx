

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🎬 MyMovieSite</h2>

      <ul style={styles.links}>
        <li style={styles.link}>Home</li>
        <li style={styles.link}>Movies</li>
        <li style={styles.link}>About</li>
        <li style={styles.link}>Contact</li>
      </ul>

      <button style={styles.button}>Login</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 28px",
    background: "#1a1a1a",
    color: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    color: "#e50914",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "26px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    cursor: "pointer",
    fontSize: "15px",
    color: "#ddd",
    transition: "color 0.2s",
  },
  button: {
    padding: "8px 18px",
    border: "none",
    borderRadius: "6px",
    background: "#e50914",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Navbar;