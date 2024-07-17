import React from 'react';

export default function Card(props) {
	return (
		<section className="card">
			<img
				src={`./public/images/${props.image}`}
				className="card-image"
				alt="card-img"
			/>
			<div className="card-body">
				<span className="location">
					<i className="fa-solid fa-location-dot location-icon"></i>{' '}
					{props.location.state}, {props.location.country}
				</span>
				<span className="maps">
					<a href={props.googleMapsUrl} target="_blank">
						View on Google Maps{' '}
					</a>
				</span>

				<h1 className="card-title">{props.title}</h1>
				<strong className="date">
					{props.startDate} - {props.endDate}
				</strong>
				<p className="description">{props.description}</p>
			</div>
		</section>
	);
}
