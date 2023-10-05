import React from "react";
import {
  PostDetailsContainer,
  PostDetailsContentBox,
  PostDetailsMapBox,
  PostDetailsPostBox,
  PostDetailsSliderBox,
} from "./styles";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

import {
  EffectFlip,
  Pagination,
  Navigation,
  EffectCube,
  Autoplay,
} from "swiper/modules";
import {
  PostBoxButtonBox,
  PostBoxContent,
  PostBoxContentBox,
  PostBoxFunctionBox,
  PostBoxFunctionButton,
  PostBoxRatingBox,
  PostBoxTitle,
  PostBoxTitleBox,
  PostsPagePostBox,
} from "pages/posts/styles";
import { Rating } from "@mui/material";

const InfoDetails = () => {
  return (
    <PostDetailsContainer>
      <PostDetailsPostBox>
        <PostDetailsSliderBox>
          <Swiper
            autoplay={{
              delay: 5000,
            }}
            effect={"cube"}
            loop
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="slide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="slide"
              />
            </SwiperSlide>
          </Swiper>
        </PostDetailsSliderBox>

        <PostDetailsContentBox>
          <PostsPagePostBox>
            <PostBoxTitleBox>
              <PostBoxTitle>username</PostBoxTitle>
              <PostBoxTitle>date</PostBoxTitle>
            </PostBoxTitleBox>

            <PostBoxContentBox>
              <PostBoxContent>CONTENT EVENT</PostBoxContent>
            </PostBoxContentBox>

            <PostBoxFunctionBox>
              <PostBoxRatingBox>
                <Rating readOnly value={5} />
                <FavoriteBorderRoundedIcon color="warning" />
              </PostBoxRatingBox>
              <PostBoxButtonBox>
                <PostBoxFunctionButton variant="outlined">
                  Подписатся
                </PostBoxFunctionButton>
                <PostBoxFunctionButton variant="outlined">
                  Отложить
                </PostBoxFunctionButton>
                <PostBoxFunctionButton variant="outlined">
                  Скрыть
                </PostBoxFunctionButton>
              </PostBoxButtonBox>
            </PostBoxFunctionBox>
          </PostsPagePostBox>
        </PostDetailsContentBox>
      </PostDetailsPostBox>

      <PostDetailsMapBox>
        <img
          width={"500px"}
          height={"500px"}
          src="https://www.google.com/maps/d/thumbnail?mid=112WcPlOvnltvvE5jsCJjenzBPIo&hl=en_US"
          alt="google map"
        />
      </PostDetailsMapBox>
    </PostDetailsContainer>
  );
};

export default InfoDetails;
