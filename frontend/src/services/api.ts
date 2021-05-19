export async function getAllImages() {
  const res = await fetch("http://localhost:5000/api/");
  return await res.json();
}

export async function sendImage(label: string, imageURL: string) {
  const res = await fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ label, imageURL }),
  });
  return res.json();
}

export async function deleteImage(id: string) {
  const res = await fetch("http://localhost:5000/api", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return res.json();
}
