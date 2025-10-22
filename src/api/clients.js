export default async function handler(req, res) {
  try {
    const response = await fetch("https://cms.disagglobal.com/api/users");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    res.status(500).json({ error: "Failed to fetch clients" });
  }
}
