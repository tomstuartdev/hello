'use client'
import React, { useState, useEffect } from 'react';
import { DollarSign, Users, Music, Instagram, Twitter, Video, Crown, Lock } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// Move interface outside component
interface InputFieldProps {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: string;
  step?: string;
}

// Move InputField component outside main component
const InputField: React.FC<InputFieldProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  onChange, 
  type = "number", 
  min = "0", 
  step = "1" 
}) => (
  <div className="mb-4 w-full">
    <label className="block mb-2 flex items-center gap-2 text-md font-semibold text-[#000ß]">
      <Icon className="w-10 h-10 text-[#FFF] p-2 rounded-lg bg-black" />
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      min={min}
      step={step}
      className="w-full px-3 py-2 bg-white/10 h2 text-lg dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
    />
  </div>
);

const RevenueCalculator = () => {
  const [mounted, setMounted] = useState(false);

  // Initialize with empty strings
  const [monthlyListeners, setMonthlyListeners] = useState('');
  const [instagramFollowers, setInstagramFollowers] = useState('');
  const [twitterFollowers, setTwitterFollowers] = useState('');
  const [tiktokFollowers, setTiktokFollowers] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [subscriptionPrice, setSubscriptionPrice] = useState('');
  const [trackCount, setTrackCount] = useState('');
  const [averageTrackPrice, setAverageTrackPrice] = useState('');

  // Platform revenue share
  const ARTIST_SHARE = 0.90;

  const [calculations, setCalculations] = useState({
    totalFollowing: 0,
    uniqueFollowing: 0,
    superfans: 0,
    subscriptionRevenue: 0,
    unlockRevenue: 0,
    totalRevenue: 0,
    platformFee: 0,
    netRevenue: 0,
    annualProjection: 0
  });

  // Set initial values after mount
  useEffect(() => {
    setMonthlyListeners('1000');
    setInstagramFollowers('5000');
    setTwitterFollowers('2000');
    setTiktokFollowers('3000');
    setConversionRate('0.5');
    setSubscriptionPrice('4.99');
    setTrackCount('10');
    setAverageTrackPrice('9.99');
    setMounted(true);
  }, []);

  // Generate 12-month projection data
  const generateProjectionData = (monthlyRevenue: number) => {
    const growth = 1.05;
    return Array.from({ length: 12 }, (_, i) => ({
      month: `Month ${i + 1}`,
      revenue: monthlyRevenue * Math.pow(growth, i)
    }));
  };

  // Calculate audience overlap and potential revenue
  useEffect(() => {
    if (mounted) {
      const totalFollowing = Number(monthlyListeners) + Number(instagramFollowers) + 
                           Number(twitterFollowers) + Number(tiktokFollowers);
      const overlapReduction = 0.7;
      const uniqueFollowing = totalFollowing * overlapReduction;
      const superfans = Math.floor(uniqueFollowing * (Number(conversionRate) / 100));
      
      const subscriptionRevenue = superfans * Number(subscriptionPrice);
      const unlockRevenue = superfans * (Number(trackCount) * Number(averageTrackPrice) * 0.3);
      
      const totalRevenue = subscriptionRevenue + unlockRevenue;
      const artistRevenue = totalRevenue * ARTIST_SHARE;
      const platformFee = totalRevenue * (1 - ARTIST_SHARE);
      
      setCalculations({
        totalFollowing,
        uniqueFollowing,
        superfans,
        subscriptionRevenue,
        unlockRevenue,
        totalRevenue,
        platformFee,
        netRevenue: artistRevenue,
        annualProjection: artistRevenue * 12
      });
    }
  }, [mounted, monthlyListeners, instagramFollowers, twitterFollowers, tiktokFollowers, 
      conversionRate, subscriptionPrice, trackCount, averageTrackPrice]);

  const audienceData = [
    { name: 'Monthly Listeners', value: Number(monthlyListeners), color: '#10B981' },
    { name: 'Instagram', value: Number(instagramFollowers), color: '#EC4899' },
    { name: 'Twitter', value: Number(twitterFollowers), color: '#3B82F6' },
    { name: 'TikTok', value: Number(tiktokFollowers), color: '#6366F1' }
  ];

  // Don't render until mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <div className="p-6">
        <div className="flex items-center w-full text-center gap-2 mb-6">
          <h1 className="text-[8rem] h2 uppercase tracking-tighter mx-auto mt-8 mb-12 leading-[5rem] text-black dark:text-[#A8FF00] font-bold">EARNINGS CALCULATOR</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Audience Metrics */}
            <div>
              <h3 className="text-2xl text-black dark:text-white h2 uppercase font-semibold tracking-tight mb-4">Audience Metrics</h3>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-x-4'>
                  <InputField
                    icon={Music}
                    label="Monthly Listeners"
                    value={monthlyListeners}
                    onChange={(e) => setMonthlyListeners(e.target.value)}
                  />
                  <InputField
                    icon={Instagram}
                    label="Instagram Followers"
                    value={instagramFollowers}
                    onChange={(e) => setInstagramFollowers(e.target.value)}
                  />
                </div>
                <div className='flex flex-row gap-x-4'>
                  <InputField
                    icon={Twitter}
                    label="Twitter Followers"
                    value={twitterFollowers}
                    onChange={(e) => setTwitterFollowers(e.target.value)}
                  />
                  <InputField
                    icon={Video}
                    label="TikTok Followers"
                    value={tiktokFollowers}
                    onChange={(e) => setTiktokFollowers(e.target.value)}
                  />
                </div>
                <InputField
                  icon={Users}
                  label="Superfan Conversion Rate (%)"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  step="0.1"
                />
              </div>
            </div>

            {/* Content & Pricing */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Content & Pricing</h3>
              <InputField
                icon={Crown}
                label="Monthly Subscription Price ($)"
                value={subscriptionPrice}
                onChange={(e) => setSubscriptionPrice(e.target.value)}
                step="0.01"
              />
              <InputField
                icon={Lock}
                label="Number of Unlockable Tracks"
                value={trackCount}
                onChange={(e) => setTrackCount(e.target.value)}
              />
              <InputField
                icon={DollarSign}
                label="Average Track Price ($)"
                value={averageTrackPrice}
                onChange={(e) => setAverageTrackPrice(e.target.value)}
                step="0.01"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Audience Analysis */}
            <div>

              <h3 className="text-2xl h2 uppercase font-semibold ">Audience Analysis</h3>
              <div className="h-48 mx-auto w-full mb-32">
                <PieChart width={300} height={300} className='mx-auto'>
                  <Pie
                    data={audienceData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {audienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
              <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className='font-semibold'>Total Following</span>
                  <span className="font-semibold h2 uppercase text-2xl">{calculations.totalFollowing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className='font-semibold'>Estimated Unique Following</span>
                  <span className="font-semibold h2 uppercase text-2xl">{calculations.uniqueFollowing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t dark:border-neutral-700 text-green-600">
                  <span className='font-semibold'>Projected Superfans</span>
                  <span className="font-semibold h2 uppercase text-2xl">{calculations.superfans.toLocaleString()}</span>
                </div>
              </div>

             
            </div>

            {/* Revenue Projection */}
            <div>
              <h3 className="text-2xl h2 uppercase font-semibold mb-4">Revenue Projection</h3>
              <div className="dark:bg-neutral-900 bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className='font-semibold'>Monthly Subscription Revenue</span>
                  <span className="font-semibold">${calculations.subscriptionRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Monthly Unlockable Revenue:</span>
                  <span className="font-semibold">${calculations.unlockRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Total Monthly Revenue:</span>
                  <span className="font-semibold">${calculations.totalRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Platform Fee (10%):</span>
                  <span className="font-semibold">-${calculations.platformFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t text-green-600 font-bold">
                  <span>Net Monthly Revenue:</span>
                  <span>${calculations.netRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t text-blue-600 font-bold">
                  <span>Projected Annual Revenue:</span>
                  <span>${calculations.annualProjection.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">12-Month Growth Projection</h4>
                <LineChart width={400} height={200} data={generateProjectionData(calculations.netRevenue)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toString()}`} />
                  <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
                </LineChart>
              </div>

              {/* CTA Section */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-semibold text-green-800 mb-2">Ready to start earning?</p>
                <p className="text-green-700 mb-4">Join thousands of artists already monetizing their content on our platform. Sign up now and turn your following into revenue!</p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RevenueCalculator;