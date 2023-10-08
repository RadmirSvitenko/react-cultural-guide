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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { theme } from "theme";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  getMeetingDetails,
  getPostDetails,
  postMeetingDetails,
} from "reducers/postDetailsSlice";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { title } from "process";
import { async } from "q";
import { getFavoriteList, postFavoriteList } from "reducers/favoriteSlice";

export default function CheckboxListSecondary() {
  const [currentTime, setCurrentTime] = useState();
  const post = useSelector((state) => state.post.post);
  const meeting = useSelector((state) => state.post.meeting);
  // const user = useSelector((state) => state.auth.user);
  console.log("post: ", post);
  console.log("meeting: ", meeting);
  // console.log("user: ", user);

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
    getMeetingToEvent();
  }, []);

  const handleCreateMeeting = async (post) => {
    dispatch(
      postMeetingDetails({
        title: post.title,
        category: post.category,
        description: post.description,
        price: post.price,
        date: post.date,
        time_start: post.time_start,
        time_end: post.time_end,
        priority: post.priority,
        geolocation_name: post.geolocation_name,
      })
    );
  };

  const getMeetingToEvent = useCallback(async () => {
    await dispatch(getMeetingDetails());
  }, []);

  const handleAddFavoriteEvent = async (post) => {
    dispatch(
      postFavoriteList({
        type: "event",
        events: post.id,
      })
    );
    await dispatch(getFavoriteList());
  };

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
            <Button
              variant="contained"
              color="success"
              onClick={() => handleCreateMeeting(post)}
            >
              Присоедениться
            </Button>

            <Button
              variant="contained"
              color="warning"
              onClick={() => handleAddFavoriteEvent(post)}
            >
              Добавить в избранное
            </Button>
          </PostDetailsFunctionBox>
        </PostDetailsBox>

        <PostDetailsMap></PostDetailsMap>
      </Box>

      <PostDetailsListBox>
        {/* <ListMemberCustomList dense>
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
        </ListMemberCustomList> */}

        <ListMemberCustomList dense>
          <ListItem
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
                <Avatar alt={`Avatar `} src={`/static/images/avatar.jpg`} />
              </ListItemAvatar>

              <ListMemberCustomListItemText
                primary={`Название: ${post.title}`}
              />
              {/* 
              <ListMemberCustomListItemText
                primary={`Участник: ${user.username}`}
              />

              <ListMemberCustomListItemText
                primary={`Номер: ${user.phone_number}`}
              />

              <ListMemberCustomListItemText primary={`Пол: ${user.gender}`} /> */}
            </ListItemButton>
          </ListItem>
        </ListMemberCustomList>
      </PostDetailsListBox>
    </PostDetailsContainer>
  );
}
