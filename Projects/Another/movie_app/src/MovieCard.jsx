
const MovieCard = ({ name, rating, releaseDate, price, image }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={name} style={styles.image} />

            <div style={styles.body}>
                <h2 style={styles.title}>{name}</h2>

                <p style={styles.rating}>⭐ {rating} / 10</p>

                <p style={styles.text}>📅 Released: {releaseDate}</p>

                <p style={styles.price}>₹{price}</p>

                <button style={styles.button}>Book Ticket</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: "240px",
        background: "#1e1e1e",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
    },
    image: {
        width: "100%",
        height: "340px",
        objectFit: "cover",
    },
    body: {
        padding: "12px",
        color: "#fff",
    },
    title: {
        margin: "0 0 8px",
        fontSize: "18px",
    },
    rating: {
        margin: "0 0 6px",
        color: "#ffd700",
        fontSize: "14px",
    },
    text: {
        margin: "0 0 6px",
        fontSize: "13px",
        color: "#bbb",
    },
    price: {
        margin: "0 0 10px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#4caf50",
    },
    button: {
        width: "100%",
        padding: "9px",
        border: "none",
        borderRadius: "8px",
        background: "#e50914",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export default MovieCard;