import React, {useState} from "react";
import {
	EuiBasicTable,
	EuiButton, EuiButtonEmpty,
	EuiFieldText,
	EuiFlexGroup,
	EuiFlexItem,
	EuiForm,
	EuiFormRow,
	EuiModal, EuiModalBody, EuiModalFooter,
	EuiModalHeader,
	EuiModalHeaderTitle,
	EuiOverlayMask,
	EuiPageContent,
	EuiPageContentBody,
	EuiPageContentHeader,
	EuiPageContentHeaderSection,
	EuiSpacer,
	EuiTitle,
} from "@elastic/eui";
import {db, IStudent} from "../db";
import * as _ from "lodash";

export const Student = () => {
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(5);
	const [showModal, setShowModal] = useState(false);

	const onTableChange = (p: any) => {
		const {index: pageIndex, size: pageSize} = p.page;
		setPageIndex(pageIndex);
		setPageSize(pageSize);
	};

	const pageOfItems = Object.values(db.student).slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
	const totalItemCount = Object.values(db.student).length;

	const columns = [
		{
			field: 'firstName',
			name: 'First Name',
			truncateText: true
		},
		{
			field: 'lastName',
			name: 'Last Name',
			truncateText: true
		},
		{
			field: 'firstName',
			name: 'Full Name',
			render: (name: any, item: any) => {
				return <EuiFlexGroup responsive={false} alignItems="center">
					<EuiFlexItem>
						{item.firstName} {item.lastName}
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

	let newStudent: IStudent = {
		id: "invalid",
		firstName: "BAzz",
		lastName: "Boo",
		courses: []
	}

	return (
		<div>
			<EuiPageContent>
				<EuiPageContentHeader>
					<EuiPageContentHeaderSection>
						<EuiTitle>
							<h2>Student</h2>
						</EuiTitle>
					</EuiPageContentHeaderSection>
					<EuiPageContentHeaderSection>
						<EuiButton fill iconType="plus" onClick={() => setShowModal(true)}>Create</EuiButton>
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
			{showModal && <StudentModal student={newStudent} closeModalFn={setShowModal}/>}
		</div>
	);
};

function StudentModal(props: { student: IStudent, closeModalFn: any }) {
	let {student, closeModalFn} = props;
	let clone = _.cloneDeep(student);
	let [firstName, setFirstName] = useState(clone.firstName);
	let [lastName, setLastName] = useState(clone.firstName);

	function save() {
		db.student[clone.id] = clone;
	}

	return (
		<EuiOverlayMask>
			<EuiModal onClose={() => closeModalFn(false)}>
				<EuiModalHeader>
					<EuiModalHeaderTitle>
						{clone.id === "invalid" ? "Create" : "Edit"}
					</EuiModalHeaderTitle>
				</EuiModalHeader>
				<EuiModalBody>
					<EuiForm component="form">
						<EuiFormRow label="First Name">
							<EuiFieldText name="firstName"
										  value={firstName}
										  onChange={(v) => setFirstName(v.target.value)}/>
						</EuiFormRow>
						<EuiFormRow label="Last Name">
							<EuiFieldText name="lastName"
										  value={lastName}
										  onChange={(v) => setLastName(v.target.value)}/>
						</EuiFormRow>
					</EuiForm>
				</EuiModalBody>
				<EuiModalFooter>
					<EuiButtonEmpty onClick={() => closeModalFn(false)}>
						Cancel
					</EuiButtonEmpty>
					<EuiButton fill onClick={() => save()}>
						Save
					</EuiButton>
				</EuiModalFooter>
			</EuiModal>
		</EuiOverlayMask>
	)
}