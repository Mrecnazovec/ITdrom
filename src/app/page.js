'use client'

import Image from 'next/image'
import './page.scss'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

	const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('Форма отправлена успешна!')
		setFormData({name:'', phone:'', message:''})
  };

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
			text: 'С 0 до Python-разработчика',
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
			text: 'Ежедневная поддержка преподавателей и менторов',
		},
		{
			imgPath: '/svg/king.svg',
			title: 'Гарантия трудоустройства',
			text: 'После окончания обучения мы будем с вами вплоть до вашего трудоустройства',
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
					<p className='formatted'>
						Мы предлагаем офлайн и онлайн курсы по IT-направлениям, обеспечивая гибкость обучения: от классического формата с практическими занятиями
						в аудиториях до дистанционных видеолекций, доступных из любой точки мира, что позволяет студентам выбирать между живым общением с
						преподавателями или самостоятельным освоением материала в удобное время
					</p>
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
						невероятное портфолио
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

					<p className='formatted'>
						Интенсивы - Учебные стримы и видеоуроки, цель которых полный разбор какой либо темы. Например: JavaScript для всех
					</p>
					<p className='formatted'>
						Мастер классы - Практические стримы и видеоуроки, цель которых разобрать какой либо кейс. Например: Написание банковского приложение
						используя Next.js и MongoDB
					</p>
				</div>
				<div className='container homeSection-infoBox homeSection-form'>
					<h2 className='h3'>Остались вопросы?</h2>
					<p className='formatted'>Напиши нам!</p>

					<form id='feedback' onSubmit={handleSubmit}>
						<label htmlFor='name'>Имя:</label>
						<br />
						<input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Ваше имя' required />
						<br />
						<br />

						<label htmlFor='phone'>Номер телефона:</label>
						<br />
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder='+998 XX XXX-XX-XX'
							required
						/>
						<br />
						<br />

						<label htmlFor='message'>Сообщение:</label>
						<br />
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							placeholder='Ваше сообщение'
							rows='4'
							required
						></textarea>
						<br />
						<br />

						<button type='submit'>Отправить</button>
					</form>
				</div>
			</section>
		</main>
	)
}
