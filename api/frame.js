export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.status(200).json({
    version: 'vNext',
    name: 'Swap on Monad Testnet',
    image: 'https://grizzlie123.github.io/Swap-by-beanswap/preview.png',
    post_url: 'https://swap-by-beanswap.vercel.app/api/frame',
    buttons: [
      { label: 'Swap via BeanSwap' }
    ]
  });
}
