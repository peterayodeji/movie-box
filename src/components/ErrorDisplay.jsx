function ErrorDisplay({ error }) {
  return (
    <>
      <p>Oops! An error has occured 📛</p>
      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>{error.message}</p>
    </>
  );
}

export default ErrorDisplay;
