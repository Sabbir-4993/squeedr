import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, Button, Space } from "antd";
import './calendarComponent.css';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import moment from 'moment'


const { datesGenerator } = require('dates-generator');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Container = styled.div`
	width: 530px;
	height: 590px;
	border: 1px solid black;
	margin: 0 auto;
	box-shadow: 10px 10px 0px black;
`;

const MonthText = styled.div`
	font-size: 26px;
	font-weight: bold;
	text-align: center;
`;

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [dates, setDates] = useState([]);
	const [calendar, setCalendar] = useState({
		month: selectedDate.getMonth(),
		year: selectedDate.getFullYear(),
		current: selectedDate.getFullYear(),
	});
	const [data, setData] = useState([{ timetext: "16:00 - 16:45", time: 16 }, { timetext: "15:00 - 15:45", time: 15 }, { timetext: "14:00 - 14:45", time: 14 }, { timetext: "13:00 - 13:45", time: 13 }, { timetext: "12:00 - 12:45", time: 12 }])
	const [Mainevents, setMainevents] = useState([])
	const [currentDateEvents, setCurrentDateEvents] = useState([])
	const [eventstobeMap, setevettobemap] = useState([])
	const [currentaddedEvent, setcurrentAddedEvent] = useState({})
	useEffect(() => {
		const body = {
			month: calendar.month,
			year: calendar.year,
		};
		const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

		setDates([...dates]);
		setCalendar({
			...calendar,
			nextMonth,
			nextYear,
			previousMonth,
			previousYear,
		});
	}, []);

	const checkSatSun = (date) => {
		let date1 = new Date(date.year, date.month, date.date)
		let day = date1.getDay()
		return day;

	}
	const addevent = async (e) => {


		for (let checkdupli = 0; checkdupli < Mainevents.length; checkdupli++) {
			for (let checkdupli2 = 0; checkdupli2 < Mainevents[checkdupli].events.length; checkdupli2++) {
				if (Mainevents[checkdupli].events[checkdupli2].time == data[e.key].time && Mainevents[checkdupli].events[checkdupli2].date == selectedDate.toDateString()) {
					alert("already added")
					return;
				}
			}
		}
		console.log("in addevent", data[e.key], selectedDate.getDate(), selectedDate.toDateString())
		let foundkey = false;
		for (let checkmain = 0; checkmain < Mainevents.length; checkmain++) {
			if (Mainevents[checkmain].keyDate == selectedDate.toDateString()) {
				let cloneMaineve = Mainevents;
				cloneMaineve[checkmain].events.push({ time: data[e.key].time, date: selectedDate.toDateString() })
				setMainevents(cloneMaineve)
				updateStatus(cloneMaineve)
				foundkey = true
			}
		}
		if (foundkey == false) {
			let cloneMaineve = Mainevents;
			cloneMaineve.push({ keyDate: selectedDate.toDateString(), events: [{ time: data[e.key].time, date: selectedDate.toDateString() }] })
			setMainevents(cloneMaineve)
			updateStatus(cloneMaineve)
		}

		setcurrentAddedEvent({ time: data[e.key].time, date: selectedDate.toDateString() })
		let clonedate = dates
		setDates(null)
		setDates(clonedate)
		let clonedata = data;
		setData(null)
		setData(clonedata)

	}

	const onClickNext = () => {
		const body = { month: calendar.nextMonth, year: calendar.nextYear };
		const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

		setDates([...dates]);
		setCalendar({
			...calendar,
			month: calendar.nextMonth,
			year: calendar.nextYear,
			current: body.year,
			nextMonth,
			nextYear,
			previousMonth,
			previousYear,
		});
	};

	const onClickPrevious = () => {
		const body = { month: calendar.previousMonth, year: calendar.previousYear };
		console.log(selectedDate.getFullYear());
		const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

		setDates([...dates]);
		setCalendar({
			...calendar,
			month: calendar.previousMonth,
			year: calendar.previousYear,
			current: body.year,
			nextMonth,
			nextYear,
			previousMonth,
			previousYear,
		});
	};

	const onSelectDate = (date) => {
		setSelectedDate(new Date(date.year, date.month, date.date));
		let founmye = false
		for (let findmyeve = 0; findmyeve < currentDateEvents.length; findmyeve++) {
			console.log("ll")
			if (currentDateEvents[findmyeve].keyDate == new Date(date.year, date.month, date.date).toDateString()) {
				console.log(currentDateEvents[findmyeve].keyDate, new Date(date.year, date.month, date.date).toDateString(), "dddddddddddddd")
				setevettobemap(currentDateEvents[findmyeve].events)
				founmye = true
			}
		}
		if (founmye == false) {
			console.log("in false onSelketv")
			setevettobemap([])
		}
		// let date1 = new Date(date.year, date.month, date.date)
		// let day = date1.getDay()
		// console.log("clicked", date, day)
	};

	const setmyEvents = () => {
		let founmye = false
		for (let findmyeve = 0; findmyeve < currentDateEvents.length; findmyeve++) {
			console.log("ll")
			if (currentDateEvents[findmyeve].keyDate == selectedDate.toDateString()) {
				console.log(currentDateEvents[findmyeve].events, "dddddddddddddd")
				setevettobemap(currentDateEvents[findmyeve].events)
				founmye = true
			}
		}
		if (founmye == false) {
			console.log("in false onSelketv")
			setevettobemap([])
		}
	}



	const updateStatus = (eventarr) => {
		console.log(eventarr, '')

		let Mymaineve = [];

		for (let findarr = 0; findarr < eventarr.length; findarr++) {
			if (eventarr[findarr].keyDate == selectedDate.toDateString()) {
				Mymaineve = eventarr[findarr].events
			}
		}

		let newarr = [];
		console.log("updateStatus'''''''", Mymaineve)
		if (Mymaineve.length > 0) {


			for (let j = 0; j < data.length; j++) {
				for (let i = 0; i < Mymaineve.length; i++) {
					let Currenthour = moment(new Date().toLocaleTimeString(), ["h:mm A"]).format("HH")
					if (new Date() > selectedDate || (new Date().toDateString() == selectedDate.toDateString() && Currenthour > Mymaineve[i].time) && (data[j].time == currentaddedEvent.time || data[j].time == Mymaineve[i].time)) {
						console.log("in1")
						newarr.push({ ...data[j], currStat: "pass", date: Mymaineve[i].date })
					}
					else if (Currenthour == Mymaineve[i].time && new Date().toDateString() == selectedDate.toDateString() && (data[j].time == currentaddedEvent.time || data[j].time == Mymaineve[i].time)) {
						console.log("in2")
						newarr.push({ ...data[j], currStat: "now", date: Mymaineve[i].date })
					}
					else if (new Date() < selectedDate && (data[j].time == currentaddedEvent.time || data[j].time == Mymaineve[i].time)) {
						console.log("in3")
						newarr.push({ ...data[j], currStat: "full", date: Mymaineve[i].date })
					}
					// else {
					// 	if (Mymaineve.length == 1) {
					// 		newarr.push({ ...data[j], currStat: "1", date: Mymaineve[i].date })
					// 	}
					// 	else {
					// 		for (let removB = 0; removB < newarr.length; removB++) {
					// 			console.log("in con222", data[j].time, data[j], newarr[removB].currStat)
					// 			if (newarr[removB].currStat != 'full' && newarr[removB].currStat != 'now' && newarr[removB].currStat != 'pass') {
					// 				console.log("NEED")
					// 				newarr.push({ ...data[j], currStat: "1", date: Mymaineve[i].date })
					// 			}
					// 		}
					// 	}
					// }
				}//loop1
			} //loop2
		}
		else {
			console.log("issue 1")
		}

		



		function getUniqueListBy(arr, key) {
			return [...new Map(arr.map(item => [item[key], item])).values()]
		}
		const arr1 = getUniqueListBy(newarr, 'time')
		console.log(newarr, arr1, "Our newArr")
		newarr = arr1
		if (newarr.length < 5) {
			console.log("in less than 555r")
			let helper = []
			for (let h = 0; h < newarr.length; h++) {
				helper.push(newarr[h].time )
			}

			// let intersection = newarr.filter(x => helper.includes(x.time));
			let difference = data.filter(x => !helper.includes(x.time)) 
			for(let di=0;  di<difference.length; di++)
			{
				newarr.push({ ...difference[di], currStat: "1", date: currentaddedEvent.date })
			}
		}

		let findincurrentDateEvents = false
		for (let final = 0; final < currentDateEvents.length; final++) {
			if (currentDateEvents[final].keyDate == selectedDate.toDateString()) {
				let clonecurrentDateEvents = currentDateEvents
				clonecurrentDateEvents[final].events = newarr

				setCurrentDateEvents(clonecurrentDateEvents);
				console.log("in found")
				findincurrentDateEvents = true
				newarr = []
			}
		}
		if (findincurrentDateEvents == false) {
			let clonecurrentDateEvents2 = currentDateEvents;
			clonecurrentDateEvents2.push({ keyDate: selectedDate.toDateString(), events: newarr })
			console.log("in found false")
			setCurrentDateEvents(clonecurrentDateEvents2);
			newarr = []
		}

		setmyEvents();

	}






	const checkevents = (date) => {
		let date1 = new Date(date.year, date.month, date.date)
		let events = 10
		let curr=null;
		for(let i=0; i<Mainevents.length; i++)
		{
			if(Mainevents[i].keyDate==date1.toDateString())
			{
				events = events - Mainevents[i].events.length;
			}
		}
		// for (let j = 0; j < curr.length; j++) {
		// 	if (curr[j].date == date1.toDateString()) {
		// 		events = events - 1
		// 	}
		// }
		
		return events
		// console.log(date1.toDateString())
	}

	const menu = (
		<Menu onClick={addevent
		}>
			{eventstobeMap.length > 0 ? eventstobeMap.map((ite, index) => (
				<Menu.Item placement="right" key={index} >
					{ite.timetext}
					<span className="tickgreen">
						{ite.currStat}

					</span>
				</Menu.Item>)
			) : [{ timetext: "16:00 - 16:45", time: 16, currStat: "1" }, { timetext: "15:00 - 15:45", time: 15, currStat: "1" }, { timetext: "14:00 - 14:45", time: 14, currStat: "1" }, { timetext: "13:00 - 13:45", time: 13, currStat: "1" }, { timetext: "12:00 - 12:45", time: 12, currStat: "1" }].map((ite, index) => (<Menu.Item placement="right" key={index} >
				{ite.timetext}
				<span className="tickgreen">
					{ite.currStat}

				</span>
			</Menu.Item>))}
		</Menu>
	);
	return (
		<div className='mainContainerCalendar'>
			<div className='mainCalendarDialog'>
				<div className='headerCalendarDialog'>
					<GrFormClose className='closeIconCalendar' />
					<p className='headerCalendarDialogP'>
						Booking:{' '}
						<span
							style={{
								color: 'black',
							}}>
							English Class
						</span>
					</p>
				</div>
				<div className='informationMonthCalendar'>
					<div className='monthNameCalendar'>
						<div className='leftIconDiv' onClick={onClickPrevious}>
							<AiOutlineLeft />
						</div>
						<div className='monthYearNameCalendar'>
							<p
								style={{
									marginBottom: '0rem',
									fontSize: '18px',
									color: '#596066',
									fontWeight: 'bold',
								}}>
								{months[calendar.month]},{' '}
								<span
									style={{
										color: '#868E96',
										fontWeight: 'normal',
									}}>
									{calendar.current}
								</span>
							</p>
						</div>
						<div className='rightIconDiv' onClick={onClickNext}>
							<AiOutlineRight />
						</div>
					</div>
					<div className='informationShowingCalendar'>
						<div className='availableDatesInfoDiv'>
							<GoPrimitiveDot
								style={{
									color: '#29BDEF',
								}}
							/>
							<p
								style={{
									marginBottom: '0rem',
									color: '#AEBACA',
								}}>
								Available Dates
							</p>
						</div>
						<div className='offFullDatesInfoDiv'>
							<GoPrimitiveDot
								style={{
									color: '#AEBACA',
								}}
							/>
							<p
								style={{
									marginBottom: '0rem',
									color: '#AEBACA',
								}}>
								Off / Full Dates
							</p>
						</div>
					</div>
				</div>
				<div className='mainCalendarComponent'>
					<div
						style={{
							width: '100%',
						}}>
						<table style={{ width: '100%', height: '100%' }}>
							<tbody>
								<tr
									style={{
										borderBottom: '#AEBACA 1px solid',
									}}>
									{days.map((day) => (
										<td
											key={day}
											style={{
												height: '10%',
											}}>
											<div style={{ textAlign: 'center', height: '100%' }}>
												<p
													style={{
														marginBottom: '0rem',
													}}>
													{day}
												</p>
											</div>
										</td>
									))}
								</tr>

								{dates.length > 0 &&
									dates.map((week) => (
										<tr key={JSON.stringify(week[0])}>
											{week.map((each) => (
												<td className={selectedDate.toDateString() == new Date(each.year, each.month, each.date).toDateString() ? "select_date" : null} key={JSON.stringify(each)}>
													<div onClick={() => onSelectDate(each)} style={{ textAlign: 'center', borderLeft: '#aebaca 1px solid', borderBottom: '#AEBACA 1px solid', width: '100%', height: '100%' }}>
														<p
															style={{
																marginBottom: '0rem',
															}}>
															{each.date}
														</p>
														{checkSatSun(each) != 0 && checkSatSun(each) != 6 && <p className="round_p">{checkevents(each)}</p>}
													</div>
												</td>
											))}
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='oneLineTextCalendar'>
					<p
						style={{
							marginBottom: '0rem',
						}}>
						<span
							style={{
								fontWeight: 'normal',
							}}>
							Starts from:{' '}
						</span>
						<span
							style={{
								color: '#29BDEF',
							}}>
							16:00 - 16:45&nbsp;
						</span>
						<span
							style={{
								color: '#596066',
							}}>
							on Tuesday 1st, April 2020.
						</span>
					</p>
				</div>

				<div className='selectMAinDiv'>
					<div className='selectMAinPDiv'>
						<p
							style={{
								marginBottom: '-0.5rem',
							}}>
							Start time:
						</p>

						<p
							style={{
								marginBottom: '0rem',
							}}>
							(next)
						</p>
					</div>
					<div className='selectMainComponentDiv'>
						<Dropdown trigger={['click']} onClick={setmyEvents} overlay={menu}>
							<Button className="date_btn">
								dd
							</Button>
						</Dropdown>
					</div>
					<div className='plainDiv'></div>
				</div>
				<div className='selectDateAndTimeMaimDiv'>
					<p
						style={{
							marginBottom: '0.2rem',
							fontWeight: 'bold',
							color: 'black',
						}}>
						Select A Date and Time
					</p>
					<p
						style={{
							marginBottom: '0rem',
							color: '#868E96',
						}}>
						Select a time slot from the list. You can select one or more...
					</p>
					<div>00000000</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarComponent;
