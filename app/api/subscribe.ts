import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, error: 'Invalid email' });
    }

    try {
      const response = await fetch('https://api.beehiiv.com/v2/publications/{pub_5c9a8894-8fcc-40e1-847c-2d3970377d73}/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true, // optional, depending on your use case
        }),
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        const errorData = await response.json();
        res.status(response.status).json({ success: false, error: errorData.message });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
