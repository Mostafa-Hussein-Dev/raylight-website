import { Article, NodeInfo, Invoice, LoginState, Product } from "./types";

const API_URL = "";

export async function getNodeInfo(): Promise<NodeInfo> {
  const res = await fetch(`${API_URL}/api/nodeInfo`);
  return res.json();
}

export async function checkLogin(): Promise<LoginState> {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "GET",
  });
  return res.json();
}

export async function doLogin(key: string): Promise<LoginState> {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key }),
  });
  return res.json();
}

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${API_URL}/api/articles`);
  return res.json();
}

export async function getArticle(uuid: string): Promise<Article> {
  const res = await fetch(`${API_URL}/api/articles/${uuid}`);
  return res.json();
}

export async function createInvoice(): Promise<Invoice> {
  const res = await fetch(`${API_URL}/api/invoices`, {
    method: "POST",
  });
  return res.json();
}

export async function getPopularProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?featured=true&limit=10`);
  const data = await res.json();
  return data.products;
}
