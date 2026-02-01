export async function getItems(token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function addItem(token: string, item: { name: string; price: number }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  });
  return res.json();
}
