'use client';

import { Button } from '@components/ui/button';
import { Stack } from '@components/ui/stack';
import { Headline, Text } from '@components/typography';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import {
    Collapse,
    CollapseButton,
    CollapseContent,
} from '@components/ui/collapse';
import { animationProps } from '@lib/utils';
import { useUnit } from 'effector-react';
import { feedbackModalOpenned } from '@components/modals/feedback-modal';

const questions = [
    {
        question: 'How do I start advertising with Galaksion?',
        answer: (
            <div className="grid">
                <Text className="mb-3">Getting started is quick and easy:</Text>

                <ul className="mb-3 list-decimal pl-5 md:pl-8 [&_li]:marker:text-base md:[&_li]:marker:text-xl">
                    <li className="list-item">
                        <Text>Sign up for free on Galaksion’s platform.</Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Fill in the legal info in the “Profile” Section.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>Make the deposit in the “Payments” section.</Text>
                    </li>
                    <li className="list-item">
                        <Text>Choose your pricing model.</Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Pick your ad format and set up targeting settings.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>Define your budget and campaign schedule.</Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Launch your campaign and track performance in
                            real-time.
                        </Text>
                    </li>
                </ul>

                <Text>
                    Our dedicated personal managers are here to guide you
                    through the process.
                </Text>
            </div>
        ),
    },
    {
        question: 'What is the minimum deposit amount in Galaksion?',
        answer: (
            <div className="grid">
                <Text className="mb-3">The minimum deposit is $50.</Text>
            </div>
        ),
    },
    {
        question: 'How can I add funds to my Galaksion’s account?',
        answer: (
            <div className="grid">
                <Text>
                    Go to the "Payments" section in your SSP account, choose a
                    payment method, enter the amount, and click "Make a
                    deposit".
                </Text>
            </div>
        ),
    },
    {
        question: 'What payment methods does Galaksion accept?',
        answer: (
            <div className="grid">
                <Text>
                    Credit Card, Paxum, Wire Transfer, or other methods on
                    request from your personal manager.
                </Text>
            </div>
        ),
    },
    {
        question:
            'How can I find average rates and available traffic for my campaign?',
        answer: (
            <div className="grid">
                <Text>
                    Go to the "Traffic volumes" section, enter your campaign's
                    settings, and get detailed information on your case.
                </Text>
            </div>
        ),
    },
    {
        question: 'How does Galaksion ensure traffic quality?',
        answer: (
            <div className="grid">
                <Text className="mb-3">
                    We prioritize quality and security with:
                </Text>

                <ul className="mb-3 list-decimal pl-5 md:pl-8 [&_li]:marker:text-base md:[&_li]:marker:text-xl">
                    <li className="list-item">
                        <Text>
                            Antifraud system: advanced algorithms to detect and
                            block bots and malware.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Reliable publishers: only real, high-quality traffic
                            sources are allowed.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Continuous monitoring: our team ensures your
                            campaigns run safely and effectively.
                        </Text>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        question: 'Can I track and optimize my campaigns in real time?',
        answer: (
            <div className="grid">
                <ul className="mb-3 list-decimal pl-5 md:pl-8 [&_li]:marker:text-base md:[&_li]:marker:text-xl">
                    <li className="list-item">
                        <Text>
                            Real-time stats: monitor clicks, impressions, CTR,
                            and ROI using Galaksion’s features, including Delta
                            in Statistics to compare campaigns’ statistical
                            parameters for selected days and CPA-paid tests
                            Detalization.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Detailed reports: analyse performance by device,
                            GEO, and other factors.
                        </Text>
                    </li>
                    <li className="list-item">
                        <Text>
                            Third-party tracking integration: use tools like
                            Voluum, Binom, or RedTrack.
                        </Text>
                    </li>
                </ul>
            </div>
        ),
    },
];

export const HomeFaqSection = () => {
    const openModal = useUnit(feedbackModalOpenned);

    const button = (
        <Button size="lg" className="w-full" onClick={openModal}>
            Ask a question
        </Button>
    );

    return (
        <Section intersection className="md:pt-5">
            <SectionCol cols={3} className="justify-between">
                <SectionCaption
                    className="hidden md:block"
                    {...animationProps('fadeIn,slideRight', { delay: 1000 })}
                >
                    frequently asked questions
                </SectionCaption>
                <SectionCaption
                    className="md:hidden"
                    {...animationProps('fadeIn')}
                >
                    FAQ
                </SectionCaption>
                <div
                    className="hidden w-full md:block"
                    {...animationProps('fadeIn')}
                >
                    {button}
                </div>
            </SectionCol>
            <SectionCol cols={9}>
                <SectionTitle {...animationProps('fadeIn,scaleUp')}>
                    FAQ
                </SectionTitle>
                <SectionText
                    className="mb-10 md:w-[60vw]"
                    {...animationProps('fadeIn,slideUp', { delay: 500 })}
                >
                    Find answers to all frequent questions below. Have more
                    details to clarify? Reach out to your account manager on the
                    platform for a personal consultation.
                </SectionText>
                <Stack direction="column" gap={3}>
                    {questions.map((question, index) => (
                        <Collapse
                            key={index}
                            {...animationProps('fadeIn,slideUp', {
                                delay: 500 + +index * 300,
                            })}
                        >
                            <CollapseButton className="flex flex-col gap-2 py-0 text-start">
                                <Text className="hidden md:block">
                                    0{+index + 1}
                                </Text>
                                <Headline className="text-xl md:text-3xl">
                                    {question.question}
                                </Headline>
                            </CollapseButton>
                            <CollapseContent className="md:w-10/12">
                                {question.answer}
                            </CollapseContent>
                        </Collapse>
                    ))}
                    <div
                        className="w-full md:hidden"
                        {...animationProps('fadeIn')}
                    >
                        {button}
                    </div>
                </Stack>
            </SectionCol>
        </Section>
    );
};
