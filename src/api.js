export async function check(n) {
  const response = await fetch(`https://api.isevenapi.xyz/api/iseven/${n}`);
  return await response.json();
}
