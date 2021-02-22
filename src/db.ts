import {observable} from "mobx";

export interface ICourse {
	id: string,
	name: string,
	code: string
}

export interface ICourses {
	[id: string]: ICourse
}

export interface IStudent {
	id: string,
	firstName: string,
	lastName: string,
	courses: string[]
}

export interface IStudents {
	[id: string]: IStudent
}

export interface IDB {
	student: IStudents,
	course: ICourses
}

@observable
export const db: IDB = {
	student: {
		"82571869-5b44-44fe-9bc8-5a37c7f3a909": {
			id: "82571869-5b44-44fe-9bc8-5a37c7f3a909",
			firstName: "Foo1",
			lastName: "Bar1",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df",
				"6f23a1bc-70fa-48f3-943e-98e685aae87e"
			]
		},
		"2fc233d1-e353-47fd-9949-4e7886fb335c": {
			id: "2fc233d1-e353-47fd-9949-4e7886fb335c",
			firstName: "Foo2",
			lastName: "Bar2",
			courses: [
				"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d",
				"6f23a1bc-70fa-48f3-943e-98e685aae87e"
			]
		},
		"945806de-bf02-4012-b227-3f448b6cc5e5": {
			id: "945806de-bf02-4012-b227-3f448b6cc5e5",
			firstName: "Foo3",
			lastName: "Bar3",
			courses: [
				"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d"
			]
		},
		"7b6a27c2-878b-4001-9e8d-6f76fac7cd08": {
			id: "7b6a27c2-878b-4001-9e8d-6f76fac7cd08",
			firstName: "Foo4",
			lastName: "Bar4",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df"
			]
		},
		"504d6a9a-4825-45bd-980b-d3130e0cafe9": {
			id: "504d6a9a-4825-45bd-980b-d3130e0cafe9",
			firstName: "Foo5",
			lastName: "Bar5",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df"
			]
		},
		"029da57b-b948-4731-aa57-6477ded02267": {
			id: "029da57b-b948-4731-aa57-6477ded02267",
			firstName: "Foo6",
			lastName: "Bar6",
			courses: [
				"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d",
				"b6c59625-fb59-42c5-840c-d014c8553766"
			]
		},
		"78d1a761-709a-4436-a441-b4b321ec999f": {
			id: "78d1a761-709a-4436-a441-b4b321ec999f",
			firstName: "Foo7",
			lastName: "Bar7",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df",
				"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d"
			]
		},
		"970a7d95-3c52-41c7-be52-075b13350a02": {
			id: "970a7d95-3c52-41c7-be52-075b13350a02",
			firstName: "Foo8",
			lastName: "Bar8",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df"
			]
		},
		"d1b546e8-d832-4f6c-b3bf-edea1a56bbea": {
			id: "d1b546e8-d832-4f6c-b3bf-edea1a56bbea",
			firstName: "Foo9",
			lastName: "Bar9",
			courses: [
				"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d"
			]
		},
		"a9a39de0-81f0-494e-8527-43abe5dfa6de": {
			id: "a9a39de0-81f0-494e-8527-43abe5dfa6de",
			firstName: "Foo10",
			lastName: "Bar10",
			courses: [
				"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df",
				"6f23a1bc-70fa-48f3-943e-98e685aae87e",
				"955ba97a-e883-4838-9099-c709ca0706ea"
			]
		},
	},
	course: {
		"57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df": {
			id: "57e0d3f5-cfd7-4d88-9f5f-556b3c6bc4df",
			name: "Epsilon1",
			code: "E1"
		},
		"3c5f7276-ddda-46fd-8e3e-c9d053c1a95d": {
			id: "3c5f7276-ddda-46fd-8e3e-c9d053c1a95d",
			name: "Epsilon2",
			code: "E2"
		},
		"6f23a1bc-70fa-48f3-943e-98e685aae87e": {
			id: "6f23a1bc-70fa-48f3-943e-98e685aae87e",
			name: "Epsilon3",
			code: "E3"
		},
		"955ba97a-e883-4838-9099-c709ca0706ea": {
			id: "955ba97a-e883-4838-9099-c709ca0706ea",
			name: "Epsilon4",
			code: "E4"
		},
		"b6c59625-fb59-42c5-840c-d014c8553766": {
			id: "b6c59625-fb59-42c5-840c-d014c8553766",
			name: "Epsilon5",
			code: "E5"
		},
	}
}