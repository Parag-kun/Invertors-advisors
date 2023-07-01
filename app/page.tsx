'use client'

import { useEffect, useState } from "react";

import Stats from '@components/Stats';
import FeaturedCompanies from "@components/FeaturedCompanies";
import Drawer from '@components/Drawer';
import DiscussionForum from "@components/DiscussionForum";
import MarketStories from "@components/MarketStories";
import { StatType } from "@types";

const Home = () => {
  const [stats, setStats] = useState<StatType[]>([]);
  const [tab, setTab] = useState<string>('discussion');

  useEffect(() => {
    fetch('http://localhost:3000/api/main')
      .then(res => res.json())
      .then(data => {
        setStats(data.stats);
      });
  }, [])

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-gray-100 relative">
      <Stats stats={stats} />
      <FeaturedCompanies />
      <div className="max-[600px]:hidden flex-1 flex items-center min-h-0 overflow-hidden relative">
        <Drawer />
        <DiscussionForum />
        <MarketStories />
      </div>
      <div className="min-[600px]:hidden flex-1 flex min-h-0 overflow-hidden">
        <Drawer />
        <div className="w-full">
          <div className="flex justify-between text-white w-full text-sm">
            <div
               className={`${tab == 'discussion' ? 'bg-sky-950' : 'bg-sky-900'} flex-1 py-3 text-center`}
               onClick={() => setTab('discussion')}
            >
              Discussion Forum
            </div>
            <div
               className={`${tab == 'stories' ? 'bg-sky-950' : 'bg-sky-900'} flex-1 py-3 text-center`}
               onClick={() => setTab('stories')}
            >
              Make Stories
            </div>
          </div>
          {
            tab == 'discussion'
            ? (
              <DiscussionForum />
            )
            : (
              <MarketStories />
            )
          }
        </div>
      </div>
      <button className="absolute right-4 bottom-4 w-16 h-16 text-[44px] flex items-center justify-center pb-2 font-extralight text-white rounded-full bg-sky-900">+</button>
    </div>
  )
};

export default Home;
