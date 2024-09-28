import Link from 'next/link'
import './page.scss'
import Image from 'next/image'

const contact = () => {
	return (
		<main className='contact'>
			<section className='contact-about'>
				<div className='container'>
					<h2>О нас</h2>
					<p>
						ITdrom — это ведущий образовательный центр в сфере IT в Узбекистане. Наша миссия — предоставить качественное образование по ключевым
						направлениям IT, чтобы помочь людям освоить современные технологии и успешно развивать карьеру в цифровом мире.
					</p>
				</div>
			</section>
			<section className='contact-pictures'>
				<div className='container'>
					<h2>Наши классы</h2>
					<div className='pictures'>
						<Image src='/jpg/i30002.jpg' width={500} height={300} alt=''></Image>
						<Image src='/jpg/-mNAYY8qWy0.jpg' width={500} height={300} alt=''></Image>
						<Image src='/jpg/Risunok5.jpg' width={500} height={300} alt=''></Image>
						<Image src='/jpg/i30002.jpg' width={500} height={300} alt=''></Image>
						<Image src='/jpg/-mNAYY8qWy0.jpg' width={500} height={300} alt=''></Image>
						<Image src='/jpg/Risunok5.jpg' width={500} height={300} alt=''></Image>
					</div>
				</div>
			</section>
			<section className='contact-main'>
				<div className='container'>
					<h2>Контакты</h2>
					<Link target='_blank' href='https://www.instagram.com/itdrom.uz/'>Бесплатная консультация</Link>
					<Link href='/#feedback'>Напишите нам</Link>
					<Link href='tel:+998998461856'>(99) 846-18-56</Link>
				</div>
			</section>

			<section className='contact-map'>
				<div className='container'>
					<div style={{ width: '100%', height: '450px' }}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2519.679730475416!2d69.31252393522952!3d41.32145649086819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1727500642199!5m2!1sru!2s'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</section>
		</main>
	)
}

export default contact
