import React, {useState} from "react";
import {EuiButton, EuiPage, EuiPageBody, EuiPageHeader, EuiPageSideBar, EuiSideNav} from "@elastic/eui";
import "./main.css";
import {Student} from "./entities/Student";
import {BrowserRouter, Route, Switch, useRouteMatch, useLocation} from "react-router-dom";
import {Course} from "./entities/Course";

export function Main() {
	let match = useRouteMatch();

	return <EuiPage>
		<EuiPageSideBar>
			<SideNav/>
		</EuiPageSideBar>
		<EuiPageBody component="div">
			<EuiPageHeader
				iconType="logoElastic"
				pageTitle="Main"
				rightSideItems={[
					<EuiButton fill>Create</EuiButton>,
					<EuiButton>Refresh</EuiButton>,
				]}
			/>
			<BrowserRouter>
				<Switch>
					<Route path={`${match.path}/student`}>
						<Student/>
					</Route>
					<Route path={`${match.path}/course`}>
						<Course/>
					</Route>
				</Switch>
			</BrowserRouter>
		</EuiPageBody>
	</EuiPage>;
}

function SideNav() {
	let location = useLocation();

	const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

	const toggleOpenOnMobile = () => {
		setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
	};

	const sideNav = [
		{
			name: 'Home',
			id: 0,
			items: [
				{
					name: 'Advanced settings',
					id: 1,
					onClick: () => {
					},
				},
				{
					name: 'Index Patterns (link)',
					id: 2,
					href: 'http://www.elastic.co',
				},
				{
					name: 'Saved Objects',
					id: 3,
					onClick: () => {
					},
					isSelected: true,
				},
				{
					name: 'Reporting',
					id: 4,
					onClick: () => {
					},
				},
			],
		},
		{
			name: 'Entities',
			id: 1,
			items: [
				{
					name: 'Student',
					id: 1,
					href: '/main/student',
					isSelected: location.pathname === '/main/student'
				},
				{
					name: 'Course',
					id: 2,
					href: '/main/course',
					isSelected: location.pathname === '/main/course'
				}
			],
		}
	];

	return (
		<EuiSideNav
			aria-label="Basic example"
			mobileTitle="Navigate within $APP_NAME"
			toggleOpenOnMobile={() => toggleOpenOnMobile()}
			isOpenOnMobile={isSideNavOpenOnMobile}
			style={{width: 192}}
			items={sideNav}
		/>
	);
};