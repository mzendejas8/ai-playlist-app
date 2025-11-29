document.getElementById("generate").addEventListener("click", async () => {
  const mood = document.getElementById("mood").value;
  console.log("Mood:", mood);

  // SEND mood → backend AI server
  const response = await fetch("http://localhost:3000/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mood })
  });

  const data = await response.json();
  console.log("AI playlist:", data);

  // Clear the box
  document.getElementById("mood").value = "";
});
