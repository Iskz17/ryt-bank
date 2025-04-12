export const sampleTransactions = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  amount: Math.floor(Math.random() * 1000 + 1),
  date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
  description: `Transaction #${i + 1}`,
  type: i % 2 === 0 ? "credit" : "debit",
  isMasked: true,
}));
