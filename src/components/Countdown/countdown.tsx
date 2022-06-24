import * as React from 'react';
import {TimerTitle, Container, Block, BlockContent, BlockText } from './countdown.styled';

type CountdownProps = {
    title: string;
    date: string;
    color?: string;
    backColor?: string;
    language?: {
        daysText: string;
        hoursText: string;
        minutesText: string;
        secondsText: string;
    }
}

const Countdown: React.FC<CountdownProps> = (props: CountdownProps) => {
    const { title, date, color, backColor, language } = props;
    const { daysText, hoursText, minutesText, secondsText } = language || {};

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    setInterval(() => {
        const then = new Date(date).getTime();
        const now = new Date().getTime();
        const distance = then - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, 1000);

	return (
		<>
			<Container backColor={backColor} color={color}>
                <TimerTitle>{title}</TimerTitle>

                <Block>
                    <BlockContent>{days}</BlockContent>
                    <BlockText>{daysText ? daysText : 'Days'}</BlockText>
                </Block>

                <Block>
                    <BlockContent>{hours}</BlockContent>
                    <BlockText>{hoursText ? hoursText : 'Hours'}</BlockText>
                </Block>

                <Block>
                    <BlockContent>{minutes}</BlockContent>
                    <BlockText>{minutesText ? minutesText : 'Minutes'}</BlockText>
                </Block>

                <Block>
                    <BlockContent>{seconds}</BlockContent>
                    <BlockText>{secondsText ? secondsText : 'Seconds'}</BlockText>
                </Block>
            </Container>
		</>
	);
};

export default Countdown;
