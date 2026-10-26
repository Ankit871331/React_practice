
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.top}>
                <div style={styles.col}>
                    <h3 style={styles.logo}>🎬 MyMovieSite</h3>
                    <p style={styles.text}>
                        Book tickets for the latest blockbusters, anytime, anywhere.
                    </p>
                </div>

                <div style={styles.col}>
                    <h4 style={styles.heading}>Quick Links</h4>
                    <p style={styles.link}>Home</p>
                    <p style={styles.link}>Movies</p>
                    <p style={styles.link}>About</p>
                    <p style={styles.link}>Contact</p>
                </div>

                <div style={styles.col}>
                    <h4 style={styles.heading}>Follow Us</h4>
                    <p style={styles.link}>Instagram</p>
                    <p style={styles.link}>Twitter / X</p>
                    <p style={styles.link}>YouTube</p>
                    <p style={styles.link}>Facebook</p>
                </div>
            </div>

            <hr style={styles.line} />

            <p style={styles.copy}>
                © {new Date().getFullYear()} MyMovieSite. All rights reserved.
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        background: "#1a1a1a",
        color: "#fff",
        padding: "32px 28px 16px",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
    },
    top: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "24px",
    },
    col: {
        flex: "1 1 220px",
    },
    logo: {
        color: "#e50914",
        marginTop: 0,
        marginBottom: "10px",
    },
    heading: {
        marginTop: 0,
        marginBottom: "10px",
        fontSize: "16px",
        color: "#fff",
    },
    text: {
        fontSize: "14px",
        color: "#aaa",
        lineHeight: "1.5",
    },
    link: {
        margin: "6px 0",
        fontSize: "14px",
        color: "#bbb",
        cursor: "pointer",
    },
    line: {
        border: "none",
        borderTop: "1px solid #333",
        margin: "22px 0 12px",
    },
    copy: {
        textAlign: "center",
        fontSize: "13px",
        color: "#888",
        margin: 0,
    },
};

export default Footer;