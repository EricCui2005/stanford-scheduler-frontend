'use client';
import Planner from './components/planner';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/solve');
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <Planner />
      </div>
    </>
  );
}
