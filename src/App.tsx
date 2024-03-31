import {Refine, GitHubBanner, ErrorComponent} from '@refinedev/core';
import {DevtoolsPanel, DevtoolsProvider} from '@refinedev/devtools';
import {RefineKbar, RefineKbarProvider} from '@refinedev/kbar';

import dataProvider from '@refinedev/simple-rest';
import {BrowserRouter, Route, Routes, Outlet, Navigate} from 'react-router-dom';
import routerBindings, {
	UnsavedChangesNotifier,
	DocumentTitleHandler,
} from '@refinedev/react-router-v6';
import {Layout} from './components/layout';
import {Dashboard} from './pages/dashboard';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<GitHubBanner />
			<RefineKbarProvider>
				<DevtoolsProvider>
					<Refine
						dataProvider={dataProvider(
							'https://api.finefoods.refine.dev'
						)}
						routerProvider={routerBindings}
						resources={[
							{
								name: 'dashboard',
								list: '/dashboard',
							},
						]}
						options={{
							syncWithLocation: true,
							warnWhenUnsavedChanges: true,
							useNewQueryKeys: true,
							projectId: 'SvWsMS-NJj8Dy-On3PHl',
						}}>
						<Routes>
							<Route
								element={
									<Layout>
										<Outlet />
									</Layout>
								}>
								<Route
									index
									element={<Navigate to="/dashboard" />}
								/>
								<Route path="/dashboard">
									<Route index element={<Dashboard />} />
								</Route>
								<Route path="*" element={<ErrorComponent />} />
							</Route>
						</Routes>
						<RefineKbar />
						<UnsavedChangesNotifier />
						<DocumentTitleHandler />
					</Refine>
					<DevtoolsPanel />
				</DevtoolsProvider>
			</RefineKbarProvider>
		</BrowserRouter>
	);
}

export default App;
