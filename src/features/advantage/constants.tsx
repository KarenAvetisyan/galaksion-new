import { paths } from '@config/routing';
import { Advantage } from './types';

export const advantages: Advantage[] = [
  {
    key: 'antifraud-system',
    iconName: 'marketing/figure4',
    title: 'Antifraud\nsystem',
    shortDesc:
      'Our IT development team leads the way in innovating new data analysis methods to protect our partners from fraudulent activities.',
    path: paths.features('antifraud-system'),
  },
  {
    key: 'direct-traffic',
    iconName: 'marketing/figure27',
    title: 'Direct\ntraffic',
    shortDesc: 'At Galaksion, we source our traffic exclusively from credible, direct websites, ensuring exceptional quality and transparency.',
    path: paths.features('direct-traffic'),
  },
  {
    key: 'cpa-pricing-model',
    iconName: 'marketing/figure36',
    title: 'CPA pricing\nmodel',
    shortDesc: 'Galaksion is one of the pioneers in introducing a CPA pricing model. Embrace a new era where payment is exclusively based on conversions!',
    path: paths.features('cpa-pricing-model'),
  },
  {
    key: 'base-of-creatives',
    iconName: 'marketing/figure25',
    title: <>Free tested base<br />of creatives</>,
    shortDesc: 'Utilize pre-made and proven creatives with the highest conversion rates available.',
    path: paths.features('base-of-creatives'),
  },
  {
    key: 'personal-manager-for-everyone',
    iconName: 'marketing/figure7',
    title: <>Personal manager<br />for everyone</>,
    shortDesc: 'Our digital marketing experts, with over 30 years of combined experience, are available 24/7 to provide valuable insights and optimize your campaigns for the best results, regardless of your network spending.',
    path: paths.features('personal-manager-for-everyone'),
  },
  {
    key: 'opportunity-to-test',
    iconName: 'marketing/figure11',
    title: <>Opportunity to test up <br />to 10 creatives <br />in 1 campaign</>,
    shortDesc: 'Launch a campaign and determine the top-performing option among 10 choices. Use the assistance of our auto-optimizer if needed.',
    path: paths.features('opportunity-to-test'),
  },
  {
    key: 'ai-rotation-system',
    iconName: 'marketing/figure15',
    title: 'AI Rotation\nSystem',
    shortDesc: 'Explore the capabilities of our AI rotation system for optimal campaign performance.',
    path: paths.features('ai-rotation-system'),
  },
  {
    key: 'deposit',
    iconName: 'marketing/figure21',
    title: 'Minimum top-up amount (deposit)',
    shortDesc: 'We\'ve confirmed that achieving a high ROI does not need significant investments.',
    path: paths.features('deposit'),
  },
  {
    key: 'optimization',
    iconName: 'marketing/figure1',
    title: 'Optimization/Scaling tools',
    shortDesc: 'Our experienced optimization team and the latest platform updates provide both conventional and cutting-edge user acquisition methods. Manage your ad campaigns effortlessly and achieve your goals with a user-friendly interface, expert support, and efficient automatic optimization algorithms.',
    path: paths.features('optimization'),
  },
];
