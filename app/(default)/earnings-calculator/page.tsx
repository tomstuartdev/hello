'use client'
import React, { useState } from 'react';

import { Instagram, Music, Twitter, ArrowRight, ArrowLeft, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { InstagramFilled, SpotifyFilled, TikTokFilled, TikTokOutlined, TwitterCircleFilled } from '@ant-design/icons';
import Link from 'next/link';

const CreatorEarningsForm = () => {
  const [step, setStep] = useState(1);
  const [metrics, setMetrics] = useState({
    instagramFollowers: 10000,
    tiktokFollowers: 20000,
    twitterFollowers: 5000,
    spotifyListeners: 15000,
    trackCount: 12,
    trackPrice: 0.99,
    subscriptionPrice: 4.99,
    superfanRate: 2,
  });

  const calculateEarnings = () => {
    const totalFollowers = metrics.instagramFollowers + metrics.tiktokFollowers + metrics.twitterFollowers + metrics.twitterFollowers;
    const superfans = Math.floor((totalFollowers) * (metrics.superfanRate / 100));
    const monthlyEarnings = (superfans * metrics.subscriptionPrice) + 
                           (superfans * metrics.trackPrice * metrics.trackCount / 12);
    const equivalentStreams = monthlyEarnings / 0.00238
    
    return {
      monthly: monthlyEarnings,
      yearly: monthlyEarnings * 12,
      superfans: superfans,
      streams: equivalentStreams
    };
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-5xl/10 tracking-tighter h2 uppercase font-bold mb-6">Tell us about your online audience</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <InstagramFilled className="w-10 h-10 p-3 rounded-xl bg-pink-600 text-white" />
                  <span className='text-lg/6 ml-1 font-regular'>How many Instagram followers do you have?</span>
                </label>
                <input
                  type="number"
                  className="w-full h2 text-xl p-2 dark:bg-neutral-800 border-none rounded-lg"
                  value={metrics.instagramFollowers}
                  onChange={(e) => setMetrics({...metrics, instagramFollowers: parseInt(e.target.value) || 0})}
                  placeholder="Enter number of followers"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <TikTokOutlined className="w-10 h-10 p-3 rounded-xl bg-red-600 text-white" />
                  <span className='text-lg/6 ml-1 font-regular'>How many TikTok followers do you have?</span>
                </label>
                <input
                  type="number"
                  className="w-full h2 text-xl p-2 dark:bg-neutral-800 border-none rounded-lg"
                  value={metrics.tiktokFollowers}
                  onChange={(e) => setMetrics({...metrics, tiktokFollowers: parseInt(e.target.value) || 0})}
                  placeholder="Enter number of followers"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <TwitterCircleFilled className="w-10 h-10 bg-blue-400 p-3 rounded-xl text-white" />
                  <span className='text-lg/6 ml-1 font-regular'>How many Twitter followers do you have?</span>
                </label>
                <input
                  type="number"
                  className="w-full h2 text-xl p-2 dark:bg-neutral-800 border-none rounded-lg"
                  value={metrics.twitterFollowers}
                  onChange={(e) => setMetrics({...metrics, twitterFollowers: parseInt(e.target.value) || 0})}
                  placeholder="Enter number of followers"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <SpotifyFilled className="w-10 h-10 bg-green-400 p-3 rounded-xl text-black" />
                  <span className="text-lg/6 ml-1 font-regular">How many monthly listeners do you have?</span>
                </label>
                <input
                  type="number"
                  className="w-full h2 text-xl p-2 dark:bg-neutral-800 border-none rounded-lg"
                  value={metrics.spotifyListeners}
                  onChange={(e) => setMetrics({...metrics, spotifyListeners: parseInt(e.target.value) || 0})}
                  placeholder="Enter monthly listeners"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-5xl/10 h2 uppercase text-black dark:text-white tracking-tighter font-bold mb-6">Tell us about the content you can upload to TRAX</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className='text-lg/6'>How many pieces of unreleased content do you have to upload?</label>
                <input
                  type="number"
                  className="w-full dark:bg-neutral-800 p-2 border-none h2 uppercase text-2xl rounded-lg"
                  value={metrics.trackCount}
                  onChange={(e) => setMetrics({...metrics, trackCount: parseInt(e.target.value) || 0})}
                  placeholder="Enter number of tracks"
                />
              </div>

              <div className="space-y-2">
                <label className='text-lg/6'>How much would you charge per track? ($)</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full dark:bg-neutral-800 p-2 border-none h2 uppercase text-2xl rounded-lg"
                  value={metrics.trackPrice}
                  onChange={(e) => setMetrics({...metrics, trackPrice: parseFloat(e.target.value) || 0})}
                  placeholder="Enter average price"
                />
              </div>

              <div className="space-y-2">
                <label className='text-lg/6'>How much would you charge for a subscription to these tracks? ($)</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full dark:bg-neutral-800 p-2 border-none h2 uppercase text-2xl rounded-lg"
                  value={metrics.subscriptionPrice}
                  onChange={(e) => setMetrics({...metrics, subscriptionPrice: parseFloat(e.target.value) || 0})}
                  placeholder="Enter subscription price"
                />
              </div>

              <div className="space-y-2">
                <label className='text-lg/6'>What percentage of your followers are superfans? (%)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full dark:bg-neutral-800 p-2 border-none h2 uppercase text-2xl rounded-lg"
                  value={metrics.superfanRate}
                  onChange={(e) => setMetrics({...metrics, superfanRate: parseFloat(e.target.value) || 0})}
                  placeholder="Enter conversion rate"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        const earnings = calculateEarnings();
        return (
          <div className="space-y-6">
            <h2 className="text-5xl h2 uppercase font-bold mb-6">Your Earnings Potential</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-800">
                <h3 className="text-sm/6 uppercase font-medium mb-1">Monthly Earnings</h3>
                <div className="text-5xl h2 mt-4 text-right uppercase font-bold text-[#A8FF00]">
                  ${earnings.monthly.toFixed(2)}
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-neutral-800">
                <h3 className="text-sm uppercase font-medium mb-1">Yearly Earnings</h3>
                <div className="text-5xl h2 uppercase text-right mt-4 font-bold text-[#EDFF00]">
                  ${earnings.yearly.toFixed(2)}
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-neutral-800">
                <h3 className="text-sm uppercase font-medium mb-1">Superfans</h3>
                <div className="text-5xl text-right h2 mt-4 uppercase font-bold text-purple-600">
                  {earnings.superfans.toFixed(0)}
                </div>
              </div>
            </div>

            {/* <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { month: 'Current', earnings: earnings.monthly },
                  { month: 'Month 3', earnings: earnings.monthly * 1.1 },
                  { month: 'Month 6', earnings: earnings.monthly * 1.2 },
                  { month: 'Month 9', earnings: earnings.monthly * 1.3 },
                  { month: 'Month 12', earnings: earnings.monthly * 1.4 },
                ]}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="earnings" 
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{ fill: '#4F46E5' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div> */}

            <div className="mt-6 p-4 rounded-lg">
              <h3 className="font-medium  text-xl/6 mb-8">Based on your audience data and content, we estimate you could earn <span className='font-bold text-black dark:text-[#A8FF00]'>${(calculateEarnings().monthly * 0.6).toFixed(2)}</span> from subscriptions and <span className='font-bold text-black dark:text-[#A8FF00]'>${(calculateEarnings().monthly * 0.3).toFixed(2)}</span> from track sales each month.</h3>
              <h3 className="font-medium text-xl/6 text-right ml-12 mb-2">That&apos;s equivalent to <span className='font-bold text-black dark:text-[#A8FF00]'> {(earnings.streams.toLocaleString())} </span>monthly streams!</h3>
              
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-5xl bg-clear rounded-xl mx-auto p-2 sm:p-6">
      <div className="p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-2 bg-neutral-700 rounded-full">
            <div 
              className="h-2 bg-[#A8FF00] rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-lg h2 uppercase dark:text-[#A8FF00]">
            Step {step} of 3
          </div>
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-4 py-2 text-neutral-900 h2 uppercase text-2xl bg-white rounded-lg hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
          )}
          
          {step < 2 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-900 h2 uppercase text-2xl rounded-lg hover:bg-[#A8FF00] ml-auto"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-900 h2 uppercase text-2xl rounded-lg hover:bg-[#A8FF00] ml-auto"
            >
              Calculate Earnings
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 3 && (
            <Link href='https://trax.so' >
            <button
              type="button"
              
              onClick={() => setStep(3)}
              className="flex items-center gap-2 px-4 py-2 bg-[#A8FF00] text-neutral-900 h2 uppercase text-2xl rounded-lg hover:bg-[#A8FF00] ml-auto"
            >
              GET STARTED
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorEarningsForm;