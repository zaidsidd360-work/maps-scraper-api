import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BusinessImages = ({ photos }: { photos?: string[] }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className="mt-4">
			{photos?.map((photo, index) => (
				<div key={index}>
					<img
						src={photo}
						alt={`Business photo ${index + 1}`}
						className="w-full h-32 object-cover rounded-lg"
					/>
				</div>
			))}
		</Slider>
	);
};

export default BusinessImages;
