import React from "react";
import {
	EuiButton,
	EuiFieldText,
	EuiForm,
	EuiFormRow,
	EuiPage,
	EuiPageBody,
	EuiPageContent,
	EuiPageContentBody,
	EuiPageContentHeader,
	EuiPageContentHeaderSection,
	EuiSpacer,
	EuiTitle,
} from "@elastic/eui";
import {useHistory} from "react-router-dom";

export function Login() {
	const history = useHistory();

	return <EuiPage>
		<EuiPageBody component="div">
			<EuiPageContent verticalPosition="center" horizontalPosition="center">
				<EuiPageContentHeader>
					<EuiPageContentHeaderSection>
						<EuiTitle>
							<h2>Login</h2>
						</EuiTitle>
					</EuiPageContentHeaderSection>
				</EuiPageContentHeader>
				<EuiPageContentBody>
					<EuiForm component="form">
						<EuiFormRow label="Username">
							<EuiFieldText name="username"/>
						</EuiFormRow>
						<EuiFormRow label="Password">
							<EuiFieldText name="username" type="password"/>
						</EuiFormRow>
						<EuiSpacer/>
						<EuiButton type="submit" fill onClick={() => history.push("/main")}>
							Login
						</EuiButton>
					</EuiForm>
				</EuiPageContentBody>
			</EuiPageContent>
		</EuiPageBody>
	</EuiPage>;
}