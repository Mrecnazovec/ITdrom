import Image from 'next/image'
import './page.scss'
import Link from 'next/link'

export default function Home() {
	const info = [
		{
			imgPath: '/svg/web.svg',
			title: 'Front-end для начинающих',
			text: 'С 0 до Front-end разработчика',
			id: 'web',
		},
		{
			imgPath: '/svg/security.svg',
			title: 'Основы кибербезопасности',
			text: 'С 0 до специалиста по кибербезопасности',
			id: 'security',
		},
		{
			imgPath: '/svg/python.svg',
			title: 'Python: основы программирования',
			text: 'С 0 до Python-разработчика.',
			id: 'python',
		},
		{
			imgPath: '/svg/design.svg',
			title: 'UI/UX дизайн для начинающих',
			text: 'С 0 до дизайнера',
			id: 'design',
		},
	]
	const benefits = [
		{
			imgPath: '/svg/plus.svg',
			title: 'Особый подход',
			text: 'Ежедневная поддержка преподавателей и менторов.',
		},
		{
			imgPath: '/svg/king.svg',
			title: 'Гарантия трудоустройства',
			text: 'После окончания обучения мы будем с вами вплоть до вашего трудоустройства.',
		},
		{
			imgPath: '/svg/society.svg',
			title: 'Различные форматы',
			text: 'Онлайн, офлайн, дистанционное обучение, а также мастер-классы и интенсивы',
		},
	]
	const sub = [
		{
			title: 'Тариф "Минимальный"',
			text: 'Для знакомства с платформой. Доступны исходники с интенсивов и мастер-классов. Мини чат разработчиков. ',
			price: '120 тыс. сумм',
		},
		{
			title: 'Тариф "Оптимальный"',
			text: 'Все плюсы тарифа "Минимальный". Вся коллекция интенсивов, доступ к мастер-классам.',
			price: '650 тыс. сумм',
		},
		{
			title: 'Тариф "VIP"',
			text: 'Все плюсы тарифа "Оптимальный". Ревью проектов. Макеты проектов. Чат разработчиков',
			price: '900 тыс. сумм',
		},
		{
			title: 'Тариф "Навсегда"',
			text: 'Все плюсы тарифа "VIP". Навсегда.',
			price: '6.4 млн. сумм',
		},
	]

	return (
		<main>
			<section className='homeSection'>
				<div className='container homeSection-infoBox'>
					<h1 className='visually-hidden'>ITdrom</h1>
					<h2 className='h3'>Записывайся на наши курсы и</h2>
					<h3 className='h2'>Стань настоящим профи</h3>

					<div className='listCourses'>
						{info.map((item, index) => (
							<Link className='articleLink' href={`courses#${item.id}`} key={index}>
								<article>
									<Image alt='' src={item.imgPath} width={88} height={88}></Image>

									<p className='title'>{item.title}</p>
									<p className='text'>{item.text}</p>
								</article>
							</Link>
						))}
					</div>
					<Link href='/courses' className='allCourses'>
						Посмотреть все курсы
					</Link>
				</div>
				<div className='container homeSection-infoBox homeSection-benefits'>
					<h2 className='h3'>Используй наши преимущества</h2>

					<div className='listCourses'>
						{benefits.map((item, index) => (
							<div className='articleLink' key={index}>
								<article>
									<Image alt='' src={item.imgPath} width={88} height={88}></Image>

									<div>
										<p className='title'>{item.title}</p>
										<p className='text'>{item.text}</p>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
				<div id='sub' className='container homeSection-infoBox homeSection-sub'>
					<h2 className='h3'>Попробуй новинку, ежемесячные тарифы!</h2>
					<h3 className='h2'>Подписки на интенсивы и мастер-классы</h3>
					<p className='description'>
						Мы предлагаем альтернативную программу обучения разработке. Начни уже практиковать свои знания по интенсивам и мастер-классам и создавать
						невероятное портфолио.
					</p>

					<div className='listCourses'>
						{sub.map((item, index) => (
							<div className='articleLink' href={item.id} key={index}>
								<article>
									<div className='textBox'>
										<p className='title'>{item.title}</p>
										<p className='text'>{item.text}</p>
									</div>
									<div>
										<p className='price allCourses'>{item.price}</p>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
