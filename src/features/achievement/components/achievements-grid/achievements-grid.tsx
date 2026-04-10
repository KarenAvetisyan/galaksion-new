import { StaticImageData } from 'next/image';
import { GridCard } from './grid-card';
import { CountryCard } from './country-card';

import browserIcon from '@assets/images/achievements/browser-icon.svg';
import platformIcon from '@assets/images/achievements/platform-icon.svg';
import OSIcon from '@assets/images/achievements/os-icon.svg';
import langIcon from '@assets/images/achievements/lang-icon.svg';
import blackWhiteIcon from '@assets/images/achievements/blackwhite-icon.svg';
import wifiIcon from '@assets/images/achievements/wifi-icon.svg';
import timeIcon from '@assets/images/achievements/time-icon.svg';
import { animationProps } from '@lib/utils';

const cards: { title: string; text?: string; imageData: StaticImageData }[] = [
  {
    title: 'Browser',
    imageData: browserIcon,
    text: 'Target your audience based on their browsing preferences. Galaksion enables you to select specific browsers, ensuring your ads are displayed optimally and reach users where they spend most of their online time.',
  },
  {
    title: 'Platform',
    imageData: platformIcon,
    text: "Mobile/Desktop\nOptimize your campaigns for specific devices with Galaksion’s platform targeting. Whether you want to engage users on mobile or desktop, Galaksion makes it easy to maximize engagement and conversion rates with platform targeting.",
  },
  {
    title: 'OS + OS version = Operating System',
    imageData: OSIcon,
    text: 'Android/iOS\nMac OS/Windows/Chrome OS\nReach users on their preferred operating systems with precision. Galaksion supports targeting for Android and iOS devices, as well as Mac OS, Windows, and Chrome OS. You can even specify OS versions to ensure performance for your ads',
  },
  {
    title: 'Browser language',
    text: 'Connect with users in their native language by targeting browser language settings. This option helps you deliver more personalized and relevant content, enhancing user engagement and improving conversion rates.',
    imageData: langIcon,
  },
  {
    title: 'Black and White Lists',
    text: 'Boost your campaign’s success with Galaksion’s Black and White Lists — an essential tool for optimizing your traffic strategy. By blocking low-performing zones, you can focus on high-converting areas, driving better engagement and maximizing your profit.',
    imageData: blackWhiteIcon,
  },
  {
    title: 'ISP (Internet Service Provider)',
    text: 'Target users based on their internet service provider, adding an extra layer of precision to your campaigns. This option is particularly useful for campaigns that need to reach users in specific locations or with certain connection qualities.',
    imageData: wifiIcon,
  },
  {
    title: 'Time targeting',
    text: 'Optimize your campaigns by targeting specific periods of the day or week. With time targeting, you can ensure your ads are seen when your audience is most active, increasing the chances of engagement and conversions.',
    imageData: timeIcon,
  },
];

const getCols = (index: number) => {
  const pos = index + 1;

  if (pos % 7 === 0) return 4;
  if (pos % 6 === 0) return 4;
  if (pos % 5 === 0) return 4;
  if (pos % 4 === 0) return 5;
  if (pos % 3 === 0) return 4;
  if (pos % 2 === 0) return 3;
  if (pos % 1 === 0) return 3;

  return 3;
};

export const AchievementsGrid = () => {
  return (
    <div className="mb-6 grid grid-cols-12 gap-5">
      <CountryCard />
      {cards.map(({ title, text, imageData }, index) => (
        <GridCard
          key={title}
          title={title}
          text={text}
          imageData={imageData}
          cols={getCols(index)}
          {...animationProps('fadeIn,scaleUp', { delay: 1200 + +index * 200 })}
        />
      ))}
    </div>
  );
};
