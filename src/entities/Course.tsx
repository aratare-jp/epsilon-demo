import React, {useState} from "react";
import {
	EuiBasicTable, EuiButton,
	EuiFlexGroup,
	EuiFlexItem, EuiPageContent, EuiPageContentBody,
	EuiPageContentHeader,
	EuiPageContentHeaderSection, EuiTitle,
} from "@elastic/eui";
import {db} from "../db";

export const Course = () => {
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(5);

	const onTableChange = (p: any) => {
		const {index: pageIndex, size: pageSize} = p.page;
		setPageIndex(pageIndex);
		setPageSize(pageSize);
	};

	const pageOfItems = Object.values(db.course).slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
	const totalItemCount = Object.values(db.course).length;

	const columns = [
		{
			field: 'name',
			name: 'Name',
			truncateText: true
		},
		{
			field: 'code',
			name: 'Course Code',
			truncateText: true
		},
		{
			field: 'firstName',
			name: 'Number of students',
			render: (name: any, item: any) => {
				let students = Object.values(db.student).filter(i => i.courses.includes(item.id));

				return <EuiFlexGroup responsive={false} alignItems="center">
					<EuiFlexItem>
						{students.length}
					</EuiFlexItem>
				</EuiFlexGroup>
			},
		},
	];

	const pagination = {
		pageIndex,
		pageSize,
		totalItemCount,
		pageSizeOptions: [3, 5, 8]
	};

	return (
		<EuiPageContent>
			<EuiPageContentHeader>
				<EuiPageContentHeaderSection>
					<EuiTitle>
						<h2>Course</h2>
					</EuiTitle>
				</EuiPageContentHeaderSection>
				<EuiPageContentHeaderSection>
					<EuiButton fill iconType="plus">Create</EuiButton>
				</EuiPageContentHeaderSection>
			</EuiPageContentHeader>
			<EuiPageContentBody>
				<EuiBasicTable
					items={pageOfItems}
					columns={columns}
					pagination={pagination}
					onChange={onTableChange}
				/>
			</EuiPageContentBody>
		</EuiPageContent>
	);
};