import Footer from './components/footer/footer'
import Header from './components/header/header'
import './styles/styles.scss'

export const metadata = {
	title: 'Учебный центр ITdrom',
	authors: [{ name: 'Aleksandr A. Salnikov', url: 'https://t.me/AlexITdrom' }],
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
