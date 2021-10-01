import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// Material Core
import { Typography, Radio, Button } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icon from "react-feather";
// test data
import { BannerData } from "../../../../logic/jsonData";
import useStyles from "./styles";

const Banner = () => {
	const classes = useStyles({});
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [activeSlider, setActiveSlider] = React.useState<Slider | null>(null);
	const { autoChange, autoPlaySpeed, slideContent } = BannerData;

	const settings = {
		infinite: true,
		dots: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: autoChange,
		adaptiveHeight: true,
		easing: "linear",
		autoplaySpeed: autoPlaySpeed,
		beforeChange: (current: number, next: number) => setCurrentIndex(next),
	};

	const handleSlideChange = (radio: number) => {
		activeSlider?.slickGoTo(currentIndex - radio);
	};

	return (
		<div style={{ position: "relative" }}>
			<div className={classes.sliderWrapper}>
				<Slider ref={(slider) => setActiveSlider(slider)} {...settings}>
					{slideContent.map((slide, index) => {
						return (
							<div key={index + 1} style={{ position: "relative" }}>
								<img src={slide.imageSrc} alt="concert at night" className={classes.image} />
								<div className={classes.absoluteLayer}>
									<div className={classes.textLayer}>
										<Typography variant="h5" gutterBottom style={{ color: "#ffffff" }}>
											{slide.secondaryText}
										</Typography>
										<Typography variant="h2" style={{ fontWeight: 700, color: "#ffffff" }}>
											{slide.primaryText}
										</Typography>
										<Typography
											variant="h2"
											gutterBottom
											style={{ fontWeight: 700, color: "#ffffff" }}
										>
											{slide.primaryText2}
										</Typography>
										<Link to="/shop" style={{ textDecoration: "none", width: "fit-content" }}>
											<Button
												color="secondary"
												variant="contained"
												disableElevation={false}
												style={{ width: "100%" }}
											>
												Shop Now
											</Button>
										</Link>
									</div>
									<div className={classes.arrowLayer}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<div
												onClick={() => handleSlideChange(1)}
												style={{
													pointerEvents: "fill",
													cursor: "pointer",
													width: "fit-content",
												}}
											>
												<Icon.ArrowLeftCircle size="48px" color="#ffffff" />
											</div>
											<div
												onClick={() => handleSlideChange(-1)}
												style={{
													pointerEvents: "fill",
													cursor: "pointer",
													width: "fit-content",
												}}
											>
												<Icon.ArrowRightCircle size="48px" color="#ffffff" />
											</div>
										</div>
										<div className={classes.radioDiv}>
											<Radio checked={currentIndex === 0} style={{ color: "white" }} />
											<Radio checked={currentIndex === 1} style={{ color: "white" }} />
											<Radio checked={currentIndex === 2} style={{ color: "white" }} />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Banner;
