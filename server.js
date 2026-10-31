
app.listen(PORT, "0.0.0.0", () => {
    console.log("Tinkym AI is running on port " + PORT);
});

process.on("uncaughtException", (err) => {
    console.error("CRASH ERROR:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("PROMISE ERROR:", err);
});
