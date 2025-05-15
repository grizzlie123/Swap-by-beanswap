export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.json({
    version: 'vNext',
    image: 'https://grizzlie123.github.io/Swap-by-beanswap/preview.png',
    buttons: [
      {
        label: 'Swap via BeanSwap',
        action: 'link',
        target: 'https://your-monad-dex-url.testnet/' // Ganti ke link tujuan swap
      }
    ]
  });
}
