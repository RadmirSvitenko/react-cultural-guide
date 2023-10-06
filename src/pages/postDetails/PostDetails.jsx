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
  ContentBoxEventDescription,
  ListMemberCustomList,
  ListMemberCustomListItemText,
  PostDetailsContainer,
  PostDetailsContentBox,
  PostDetailsListBox,
  PostDetailsMap,
  PostDetailsSliderBox,
} from "./styles";

import { IconButton, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { theme } from "theme";
import { Box } from "@mui/system";

export default function CheckboxListSecondary() {
  return (
    <PostDetailsContainer>
      <PostDetailsSliderBox>
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
      </PostDetailsSliderBox>

      <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"}>
        <PostDetailsContentBox>
          <ContentBoxEventDescription>
            Event Description
          </ContentBoxEventDescription>
        </PostDetailsContentBox>

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
                    primary={`Event ${value + 1}`}
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
