import {
  PostCommentsBox,
  PostCommentsContainer,
  PostDetailsBox,
  PostDetailsContainer,
  PostDetailsDescription,
  PostDetailsDescriptionBox,
  PostDetailsFunctionBox,
  PostDetailsInfo,
  PostDetailsInfoBox,
  PostDetailsMap,
  PostDetailsTime,
  PostDetailsTimeBox,
  PostDetailsTitle,
  PostDetailsTitleBox,
} from "./styles";

import { Button, Rating, TextField } from "@mui/material";
import { theme } from "theme";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentPostDetails,
  getCommentPostDetails,
  getMeetingDetails,
  getPostDetails,
  postMeetingDetails,
} from "reducers/postDetailsSlice";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getFavoriteList, postFavoriteList } from "reducers/favoriteSlice";
import Loading from "components/Loading/Loading";

export default function CheckboxListSecondary() {
  const [commentValue, setCommentValue] = useState();
  const [currentTime, setCurrentTime] = useState();
  const post = useSelector((state) => state.post.post);
  const isLoading = useSelector((state) => state.post.isLoading);
  const meeting = useSelector((state) => state.post.meeting);
  const user = useSelector((state) => state.auth.user);
  const comment = useSelector((state) => state.post.comment);
  console.log("comment: ", comment);

  console.log("post: ", post);
  console.log("meeting: ", meeting);
  console.log("user: ", user);

  const displayTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    setCurrentTime(time);
  };

  // setInterval(displayTime, 1000);

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

  const handleChangeSubmitComment = (e, id, value) => {
    console.log("value: ", value);
    console.log("id: ", id);
    console.log("e: ", e);
    e.preventDefault();
    dispatch(addCommentPostDetails({ id: id, value: value }));
    handleGetComments(id, value);
  };

  const handleGetComments = (id) => {
    dispatch(getCommentPostDetails(id));
  };

  const getMeetingToEvent = useCallback(async () => {
    await dispatch(getMeetingDetails());
  }, []);

  const handleAddFavoriteEvent = async (id) => {
    dispatch(
      postFavoriteList({
        id: id,
      })
    );
    await dispatch(getFavoriteList());
  };

  const handleChangeComment = (e) => {
    setCommentValue(e.target.value);
  };

  useEffect(() => {
    getPost();
  }, [getPost]);

  useEffect(() => {
    handleGetComments();
  }, []);

  if (isLoading || !post) {
    return <Loading />;
  }

  return (
    <PostDetailsContainer>
      <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"}>
        <PostDetailsBox>
          <PostDetailsTitleBox>
            <PostDetailsTitle>{post.title}</PostDetailsTitle>
            <PostDetailsTitle>{currentTime}</PostDetailsTitle>
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
            <PostDetailsInfo>ID поста: {post.organizer}</PostDetailsInfo>
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
              onClick={() => handleAddFavoriteEvent(post.id)}
            >
              Добавить в избранное
            </Button>
          </PostDetailsFunctionBox>
        </PostDetailsBox>

        <PostDetailsMap></PostDetailsMap>
      </Box>

      <PostCommentsContainer>
        <PostCommentsBox>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            onSubmit={(e) =>
              handleChangeSubmitComment(e, post.id, commentValue)
            }
          >
            <TextField
              onChange={handleChangeComment}
              multiline="true"
              placeholder="Введите ваше мнение сюда"
              sx={{ mb: 1, minWidth: "300px", minHeight: "300px" }}
            />

            <Button type="submit" color="primary" variant="contained">
              Отправить
            </Button>
          </form>
        </PostCommentsBox>
        <Box
          sx={{
            marginBottom: "100px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {comment.map(({ title }) => (
            <p>{title}</p>
          ))}
        </Box>
      </PostCommentsContainer>
    </PostDetailsContainer>
  );
}
