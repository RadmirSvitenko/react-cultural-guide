import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  ListMemberCustomList,
  ListMemberCustomListItemText,
  PostDetailsBox,
  PostDetailsContainer,
  PostDetailsDescription,
  PostDetailsDescriptionBox,
  PostDetailsFunctionBox,
  PostDetailsInfo,
  PostDetailsInfoBox,
  PostDetailsListBox,
  PostDetailsMap,
  PostDetailsTime,
  PostDetailsTimeBox,
  PostDetailsTitle,
  PostDetailsTitleBox,
} from "./styles";

import { Button, IconButton, Rating } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { theme } from "theme";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "reducers/postDetailsSlice";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function CheckboxListSecondary() {
  const [currentTime, setCurrentTime] = useState();
  const post = useSelector((state) => state.post.post);
  console.log("post: ", post);

  const date = new Date();

  // setInterval(() => {
  //   const time = date.toLocaleTimeString();
  //   setCurrentTime(time);
  // }, 1000);

  const time = date.toLocaleTimeString();

  const dispatch = useDispatch();

  const { id } = useParams();

  const getPost = useCallback(async () => {
    dispatch(getPostDetails(`${id}`));
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <PostDetailsContainer>
      {/* <PostDetailsSliderBox>
        <Swiper
          loop
          autoplay={{
            delay: 5000,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
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
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt="slide"
            />
          </SwiperSlide>
        </Swiper>
      </PostDetailsSliderBox> */}

      <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"}>
        <PostDetailsBox>
          <PostDetailsTitleBox>
            <PostDetailsTitle>{post.title}</PostDetailsTitle>
            <PostDetailsTitle>{time}</PostDetailsTitle>
          </PostDetailsTitleBox>

          <PostDetailsDescriptionBox>
            <PostDetailsDescription>{post.description}</PostDetailsDescription>
          </PostDetailsDescriptionBox>

          <PostDetailsTimeBox>
            <PostDetailsTime>{post.date}</PostDetailsTime>
            <PostDetailsTime>{post.time_start}</PostDetailsTime>
            <PostDetailsTime>{post.time_end}</PostDetailsTime>
          </PostDetailsTimeBox>

          <PostDetailsInfoBox>
            <PostDetailsInfo>Организатор: {post.organizer}</PostDetailsInfo>
            <PostDetailsInfo>
              Где пройдёт: {post.geolocation_name}
            </PostDetailsInfo>
          </PostDetailsInfoBox>

          <PostDetailsInfoBox>
            <Rating value={5} />
            <PostDetailsInfo>Значимость: {post.priority}</PostDetailsInfo>
            <PostDetailsInfo>Цена: {post.price} сом</PostDetailsInfo>
          </PostDetailsInfoBox>

          <PostDetailsFunctionBox>
            <Button variant="contained" color="success">
              Я пойду!
            </Button>

            <Button variant="contained" color="warning">
              Добавить в избранное
            </Button>
          </PostDetailsFunctionBox>
        </PostDetailsBox>

        <PostDetailsMap></PostDetailsMap>
      </Box>

      <PostDetailsListBox>
        <ListMemberCustomList dense>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton>
                    <MessageIcon
                      sx={{
                        color: theme.palette.primary.base,
                      }}
                    />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>

                  <ListMemberCustomListItemText
                    id={labelId}
                    primary={`Online/Offline `}
                  />

                  <ListMemberCustomListItemText
                    id={labelId}
                    primary={`Username ${value + 1}`}
                  />

                  <ListMemberCustomListItemText
                    id={labelId}
                    primary={`Gender`}
                  />

                  <ListMemberCustomListItemText
                    id={labelId}
                    primary={post.title}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMemberCustomList>
      </PostDetailsListBox>
    </PostDetailsContainer>
  );
}
